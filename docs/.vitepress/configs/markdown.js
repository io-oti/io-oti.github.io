// more info: https://github.com/vuejs/vitepress/blob/main/src/node/markdown/markdown.ts

export default {
  // 启用代码块中的行号
  lineNumbers: true,
  // 全局自定义容器标题
  container: {
    tipLabel: '提示',
    warningLabel: '警告',
    dangerLabel: '危险',
    infoLabel: '信息',
    detailsLabel: '详细信息',
  },
  image: {
    // 默认禁用；设置为 true 可为所有图片启用懒加载。
    lazyLoading: true,
  },
  // https://shiki.tmrs.site/themes
  theme: { light: 'catppuccin-latte', dark: 'catppuccin-mocha' },
}
