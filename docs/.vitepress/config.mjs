import { defineConfig } from 'vitepress'
import configs from './configs/index.js'

export default defineConfig({
  // 站点元数据
  lang: 'zh-CN',
  title: '槭 林',
  description: '今日菖蒲花 明朝枫树老',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icons/maple.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/maple.png' }],
  ],

  // 路由
  cleanUrls: true,
  rewrites: {
    'pages/:page': ':page',
  },

  // 构建
  ignoreDeadLinks: true,

  ...configs,
})
