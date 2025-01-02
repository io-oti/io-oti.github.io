import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import path from 'path'
import fs from 'fs'
import 'node:path'
import 'node:fs'

const pluginName = 'vite-plugin-vitepress-rss'
let rssOptions = {
  link: '',
  filePath: 'feed.rss',
  socialLink: true,
  log: true,
  files: 'docs/**/*.md',
  content: 'html',
}

function log() {
  if (!rssOptions.log) return

  console.log(
    '\x1B[32m✓\x1B[0m',
    'rss feed generated:',
    `\x1B[36m${genLink(rssOptions.link, rssOptions.filePath)}\x1B[0m`
  )
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

async function buildEnd({ site, outDir }) {
  const siteOptions = {
    language: site.lang,
    title: site.title,
    link: rssOptions.link,
    description: site.description,
    image: rssOptions.image,
    favicon: rssOptions.favicon,
    copyright: site.themeConfig?.footer?.copyright,
    updated: new Date(),
    generator: pluginName,
  }
  const filePath = path.join(outDir, rssOptions.filePath)
  const feed = new Feed({ ...siteOptions, ...rssOptions })
  const posts = await genPosts(rssOptions.files)

  posts.forEach(post => feed.addItem(post))
  await fs.promises.writeFile(filePath, feed.rss2())
  log()
}

function config(config, { command }) {
  if (command === 'build') {
    config.vitepress.buildEnd = buildEnd

    if (!rssOptions.socialLink) return

    const socialLink = {
      ariaLabel: 'rss',
      icon: 'rss',
      link: genLink(rssOptions.link, rssOptions.filePath),
    }

    if (!config.vitepress.site.themeConfig) {
      config.vitepress.site.themeConfig = {
        socialLinks: [socialLink],
      }

      return
    }

    if (config.vitepress.site.themeConfig.socialLinks) {
      config.vitepress.site.themeConfig.socialLinks.push(socialLink)
    } else {
      config.vitepress.site.themeConfig.socialLinks = [socialLink]
    }
  }
}

export default function (options) {
  rssOptions = { ...rssOptions, ...options }

  return {
    name: pluginName,
    apply: 'build',
    config,
  }
}
