import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import { statSync, writeFileSync } from 'fs'
import path from 'path'

const PLUGIN_NAME = 'vite-plugin-vitepress-rss'
let isBuilded = false
let rssOptions = {
  link: '',
  files: './**/*.md',
  content: 'html',
  filePath: 'feed.rss',
  socialLink: true,
  log: true,
}

function spliceLink(base, path) {
  if (!base || !path) return ''

  const formattedPath = path.startsWith('/') ? path : '/' + path

  return base.endsWith('/')
    ? base.replace(/\/$/, formattedPath)
    : base + formattedPath
}

function addSocialLink(siteConfig) {
  if (!rssOptions.socialLink) return siteConfig

  const socialLink = {
    ariaLabel: 'rss',
    icon: 'rss',
    link: spliceLink(rssOptions.link, rssOptions.filePath),
  }

  if (siteConfig.themeConfig) {
    if (siteConfig.themeConfig.socialLinks) {
      siteConfig.themeConfig.socialLinks.push(socialLink)
    } else {
      siteConfig.themeConfig.socialLinks = [socialLink]
    }
  } else {
    siteConfig.themeConfig = { socialLinks: [socialLink] }
  }

  return siteConfig
}

function printInfo() {
  if (!rssOptions.log) return

  console.log(
    '\x1B[32m✓\x1B[0m',
    'rss feed generated:',
    `\x1B[36m${spliceLink(rssOptions.link, rssOptions.filePath)}\x1B[0m`
  )
}

function genPosts(files, srcDir) {
  return createContentLoader(files, {
    render: rssOptions.content === 'html',
    excerpt: rssOptions.content === 'excerpt',
    transform(raw) {
      return raw
        .sort(
          (a, b) =>
            +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        )
        .reduce((posts, post) => {
          if (!post.frontmatter.publish) return posts

          const link = spliceLink(rssOptions.link, post.url)
          const date = statSync(
            path.format({
              root: path.basename(srcDir),
              name: post.url,
              ext: 'md',
            })
          )

          posts.push({
            title: post.frontmatter.title,
            id: link,
            link,
            description: post.frontmatter.description,
            content: post[rssOptions.content]?.replaceAll(
              '&ZeroWidthSpace;',
              ''
            ),
            author: post.frontmatter.author,
            date: date.mtime,
          })

          return posts
        }, [])
    },
  }).load()
}

function genFeed(func) {
  return async siteConfig => {
    if (func) await func(siteConfig)

    const { lang, title, description, themeConfig } = siteConfig.site
    const { filePath, files } = rssOptions
    const siteOptions = {
      title,
      description,
      id: rssOptions.link,
      link: rssOptions.link,
      language: lang,
      image: spliceLink(rssOptions.link, rssOptions.image),
      favicon: spliceLink(rssOptions.link, rssOptions.favicon),
      copyright: themeConfig?.footer?.copyright,
      generator: PLUGIN_NAME,
      updated: new Date(),
    }
    const feed = new Feed({ ...siteOptions, ...rssOptions })
    const posts = await genPosts(files, siteConfig.srcDir)

    posts.forEach(post => feed.addItem(post))
    writeFileSync(path.join(siteConfig.outDir, filePath), feed.rss2())
    printInfo()
  }
}

const config = config => {
  if (isBuilded) return

  const { vitepress } = config

  vitepress.buildEnd = genFeed(vitepress.buildEnd)
  vitepress.site = addSocialLink(vitepress.site)

  isBuilded = true
  return { ...config, vitepress }
}

export default function (options) {
  rssOptions = { ...rssOptions, ...options }

  return {
    name: PLUGIN_NAME,
    apply: 'build',
    config,
  }
}
