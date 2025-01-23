import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import path from 'path'

const PLUGIN_NAME = 'vite-plugin-vitepress-rss'
let isBuilded = false

let rssOptions = {
  link: '',
  files: './**/*.md',
  content: 'html',
  filePath: 'feed.rss',
}

// 拼接URL路径
function spliceLink(base, path) {
  if (!base || !path) return ''

  const formattedPath = path.startsWith('/') ? path : '/' + path

  return base.endsWith('/')
    ? base.replace(/\/$/, formattedPath)
    : base + formattedPath
}

// 获取文章数据
function getPostsData(files) {
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
            date: new Date(post.frontmatter.date),
          })

          return posts
        }, [])
    },
  }).load()
}

// 生成RSS Feed
function genFeed(func) {
  return async siteConfig => {
    if (func) await func(siteConfig)

    const { lang, locales, title, description, themeConfig } = siteConfig.site
    const { filePath, files } = rssOptions
    const siteOptions = {
      title,
      description,
      id: rssOptions.link,
      link: rssOptions.link,
      language: lang || locales?.root?.lang,
      image: spliceLink(rssOptions.link, rssOptions.image),
      favicon: spliceLink(rssOptions.link, rssOptions.favicon),
      copyright: themeConfig?.footer?.copyright,
      generator: PLUGIN_NAME,
      updated: new Date(),
    }
    const feed = new Feed({ ...siteOptions, ...rssOptions })
    const posts = await getPostsData(files, siteConfig.srcDir)

    posts.forEach(post => feed.addItem(post))
    writeFileSync(path.join(siteConfig.outDir, filePath), feed.rss2())
  }
}

export default function (options) {
  rssOptions = { ...rssOptions, ...options }

  return {
    name: PLUGIN_NAME,
    apply: 'build',
    enforce: 'post',
    configResolved (config) {
      if (isBuilded) return config

      isBuilded = true
      config.vitepress.buildEnd = genFeed(config.vitepress.buildEnd)

      return config
    },
  }
}
