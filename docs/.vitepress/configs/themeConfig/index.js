import search from './search.js'
import socialLinks from './socialLinks.js'
import sidebar from './sidebar.js'

export default {
  // logo - 网站图标
  logo: { src: '/icons/maple.svg', width: 24, height: 24 },

  // Search - 搜索
  search,

  // Nav - 导航
  nav: [
    { text: '分类', link: '/categories', activeMatch: '/categories' },
    { text: '归档', link: '/archives', activeMatch: '/archives' },
  ],

  // SocialLinks - 社交链接
  socialLinks,

  // Sidebar - 侧边栏
  sidebar,

  // Outline - 目录
  outline: {
    label: '目录',
    level: 'deep',
  },

  // LastUpdated - 最后更新
  lastUpdated: {
    text: '最后更新',
  },

  // DocFooter - 翻页
  docFooter: {
    prev: '上一篇',
    next: '下一篇',
  },

  // Footer - 页脚
  footer: {
    copyright: 'Copyright © 2023-present Io_oTI. All Rights Reserved.',
  },
}
