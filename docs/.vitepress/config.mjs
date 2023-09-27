import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Maple",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Vue',
        items: [
          { text: 'Options API', link: '/vue/' },
          { text: 'Render Function', link: '/vue/render' },
          { text: 'JSX', link: '/vue/jsx' },
        ],
      },
      {
        text: 'NPM',
        items: [
          { text: 'Node Package Manager', link: '/npm/' },
          {
            text: 'Packages',
            items: [
              { text: 'xlsx', link: '/npm/packages/xlsx' },
              { text: 'node-sass', link: '/npm/packages/node-sass' },
            ]
          }
        ]
      },
      { text: 'Git', link: '/git/' },
      {
        text: 'Other', items: [
          { text: 'Browser', link: '/browser/' },
          { text: 'Examples', link: '/markdown-examples' }
        ],
      }
    ],

    sidebar: [
      {
        text: 'Vue',
        items: [
          { text: 'Options API', link: '/vue/' },
          { text: 'Render Function', link: '/vue/render' },
          { text: 'JSX', link: '/vue/jsx' },
        ]
      },
      {
        text: 'NPM',
        items: [
          { text: 'Node Package Manager', link: '/npm/' },
          {
            text: 'Packages',
            items: [
              { text: 'xlsx', link: '/npm/packages/xlsx' },
              { text: 'node-sass', link: '/npm/packages/node-sass' },
            ]
          }
        ]
      },
      {
        text: 'Git',
        items: [
          { text: 'Git Cheapsheets', link: '/git/' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
