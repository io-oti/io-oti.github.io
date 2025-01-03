import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import path from 'path'
import fs from 'fs'
import 'node:path'
import 'node:fs'

const PLUGIN_NAME = 'vite-plugin-vitepress-rss'
let isBuilded = false
let rssOptions = {
  link: '',
  filePath: 'feed.rss',
  socialLink: true,
  log: true,
  files: 'docs/**/*.md',
  content: 'html',
}

function genLink(base, path) {
  if (!base || !path) return ''

  const p = path.startsWith('/') ? path : '/' + path

  return base.endsWith('/') ? base.replace(/\/$/, p) : base + p
}

function genPosts(files) {
  return createContentLoader(files, {
    render: rssOptions.content === 'html',
    excerpt: rssOptions.content === 'excerpt',
    transform(raw) {
      return raw
        .sort((a, b) => {
          return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        })
        .reduce((posts, post) => {
          if (!post.frontmatter.publish) return posts

          const link = genLink(rssOptions.link, post.url)

          posts.push({
            title: post.frontmatter.title,
            id: link,
            link,
            description: post.frontmatter.description,
            content: post[rssOptions.content],
            author: post.frontmatter.author,
            contributor: post.frontmatter.contributor,
            date: new Date(post.frontmatter.date),
            image: post.frontmatter.image,
          })

          return posts
        }, [])
    },
  }).load()
}

function addSocialLink(siteConfig) {
  if (!rssOptions.socialLink) return siteConfig

  const socialLink = {
    ariaLabel: 'rss',
    icon: 'rss',
    link: genLink(rssOptions.link, rssOptions.filePath),
  }

  if (siteConfig.themeConfig) {
    if (siteConfig.themeConfig.socialLinks) {
      siteConfig.themeConfig.socialLinks.push(socialLink)
      console.log('socialLinks-if:', siteConfig.themeConfig.socialLinks)
    } else {
      siteConfig.themeConfig.socialLinks = [socialLink]
      console.log('socialLinks-else:', siteConfig.themeConfig.socialLinks)
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
    `\x1B[36m${genLink(rssOptions.link, rssOptions.filePath)}\x1B[0m`
  )
}

function genFeed(func) {
  return async siteConfig => {
    if (func) {
      await func(siteConfig)
    }

    const { lang, title, description, themeConfig } = siteConfig.site
    const { filePath, files } = rssOptions
    const siteOptions = {
      language: lang,
      title,
      // link,
      description,
      // image,
      // favicon,
      copyright: themeConfig?.footer?.copyright,
      updated: new Date(),
      generator: PLUGIN_NAME,
    }
    const outFile = path.join(siteConfig.outDir, filePath)
    const feed = new Feed({ ...siteOptions, ...rssOptions })
    const posts = await genPosts(files)

    posts.forEach(post => feed.addItem(post))
    await fs.promises.writeFile(outFile, feed.rss2())
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
