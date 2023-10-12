import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "槭 林",
  description: "连林人不觉 独树众乃奇",

  lang: 'zh-CN',
  srcDir: 'src',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/icons/maple.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/icons/maple.png' }],
  ],

  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // logo - 网站图标
    logo: { src: '/icons/maple.svg', width: 24, height: 24 },

    // search - 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    // nav - 导航
    nav: [
      {
        text: 'Vue',
        items: [
          {
            text: 'Vue 3',
            items: [
              { text: 'Options API', link: '/vue/3/options-api' },
              { text: 'Composition API', link: '/vue/3/composition-api' },
            ]
          },
          {
            text: 'Vue 2',
            items: [
              { text: 'Options API', link: '/vue/2/options-api' },
              { text: 'Render Function', link: '/vue/2/render-function' },
              { text: 'JSX', link: '/vue/2/jsx' },
            ]
          },
        ],
      },
      {
        text: 'Node.js',
        items: [
          { text: 'NPM', link: '/nodejs/npm' },
          {
            text: 'Packages',
            items: [
              { text: 'node-sass', link: '/nodejs/packages/css/node-sass' },
              { text: 'xlsx', link: '/nodejs/packages/xlsx' },
            ]
          }
        ]
      },
      {
        text: 'Others',
        items: [
          { text: 'Browser', link: '/others/browser' },
          { text: 'Nginx', link: '/nginx/nginx-guide' },
          { text: 'Git', link: '/git/git-cheapsheets' },
        ],
      }
    ],

    // socialLinks - 社交链接
    socialLinks: [
      {
        text: 'github',
        icon: 'github',
        link: 'https://github.com/io-oti'
      },
      {
        text: 'codepen',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.3 24.29"><path d="M12.15,24.29a1.14,1.14,0,0,1-.65-.2l-11-7.28a.91.91,0,0,1-.32-.3h0l0-.05A1.24,1.24,0,0,1,0,15.82V8.45a1.23,1.23,0,0,1,.18-.63l0-.06a1,1,0,0,1,.32-.29L11.5.19a1.22,1.22,0,0,1,1.3,0l11,7.28a1,1,0,0,1,.32.29h0a.1.1,0,0,1,0,.05,1.23,1.23,0,0,1,.18.63v7.37a1.24,1.24,0,0,1-.18.64l0,.05a1,1,0,0,1-.32.3l-11,7.28A1.14,1.14,0,0,1,12.15,24.29Zm1.15-7.84V21l7.78-5.17-3.43-2.31ZM3.22,15.83,11,21V16.45L6.65,13.52Zm5.49-3.69,3.44,2.31,3.44-2.31L12.15,9.82Zm11,0L22,13.68V10.6ZM2.3,10.6v3.08l2.29-1.54Zm11-2.77,4.35,2.92,3.43-2.3L13.3,3.28ZM3.22,8.45l3.43,2.3L11,7.83V3.28Z"/></svg>'
        },
        link: 'https://codepen.io/Io_oTI'
      }
    ],

    // sidebar - 侧边栏
    sidebar: {
      '/vue/': {
        items: [
          {
            text: 'Vue 3',
            base: '/vue/3/',
            items: [
              { text: 'Options API', link: 'options-api' },
              { text: 'Composition API', link: 'composition-api' },
            ]
          },
          {
            text: 'Vue 2',
            base: '/vue/2/',
            items: [
              { text: 'Options API', link: 'options-api' },
              { text: 'Render Function', link: 'render-function' },
              { text: 'JSX', link: 'jsx' },
            ]
          },
        ]
      },
      '/nodejs/': {
        items: [
          { text: 'NPM', base: '/nodejs/', link: 'npm' },
          {
            text: 'CSS',
            base: '/nodejs/packages/css/',
            items: [
              { text: 'node-sass', link: 'node-sass' },
            ]
          },
          {
            text: 'Others',
            base: '/nodejs/packages/',
            items: [
              { text: 'xlsx', link: 'xlsx' },
            ]
          }
        ]
      }
    },

    // outline - 目录
    outline: {
      label: '目录',
      level: 'deep'
    },

    // lastUpdated - 最后更新时间
    lastUpdated: {
      text: '最后更新'
    },

    // docFooter - 翻页
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // footer - 页脚
    footer: {
      message: 'Email: io_oti@outlook.com',
      copyright: 'Copyright © 2023 Io_oTI'
    }
  }
})
