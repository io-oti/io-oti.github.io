// 导入所需的模块
import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import { writeFileSync } from 'fs'
import path from 'path'

// 定义插件名称
const PLUGIN_NAME = 'vite-plugin-vitepress-rss'
let isBuilded = false

// RSS 配置选项
let rssOptions = {
  link: '',
  files: './**/*.md',
  content: 'html',
  filePath: 'feed.rss',
  socialLink: true,
  log: true,
}

// 拼接链接的函数
function spliceLink(base, path) {
  if (!base || !path) return ''

  const formattedPath = path.startsWith('/') ? path : '/' + path

  return base.endsWith('/')
    ? base.replace(/\/$/, formattedPath)
    : base + formattedPath
}

// 添加社交链接到站点配置
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

// 打印生成信息
function printInfo() {
  if (!rssOptions.log) return

  console.log(
    '\x1B[32m✓\x1B[0m',
    'rss feed generated:',
    `\x1B[36m${spliceLink(rssOptions.link, rssOptions.filePath)}\x1B[0m`
  )
}

// 生成文章的函数
function genPosts(files) {
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

// 生成 RSS 源的函数
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

// 配置函数
const config = config => {
  if (isBuilded) return

  const { vitepress } = config

  vitepress.buildEnd = genFeed(vitepress.buildEnd)
  vitepress.site = addSocialLink(vitepress.site)

  isBuilded = true
  return { ...config, vitepress }
}

// 默认导出插件函数
export default function (options) {
  rssOptions = { ...rssOptions, ...options }

  return {
    name: PLUGIN_NAME,
    apply: 'build',
    config,
  }
}
