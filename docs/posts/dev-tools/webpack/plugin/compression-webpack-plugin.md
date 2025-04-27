---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'webpack'
title: 'compression-webpack-plugin'
---


这个插件可以提供资产的压缩版本，以使用内容编码为其提供服务。

npmjs: [compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin)

## 安装

```sh
npm install compression-webpack-plugin --save-dev
```

## 使用

```js
const CompressionWebpackPlugin = require('compression-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      // 设置版本构建时间
      new webpack.DefinePlugin({
        'process.env.VUE_APP_VERSION': JSON.stringify(
          `Build on: ${builtTime.getFullYear()}-${`0${
            builtTime.getMonth() + 1
          }`.slice(-2)}-${`0${builtTime.getDate()}`.slice(
            -2
          )} ${builtTime.getHours()}:${builtTime.getMinutes()}`
        ),
      }),
      new CompressionWebpackPlugin({
        // 压缩算法
        algorithm: 'gzip',
        // 压缩后的文件名(保持原文件名，后缀加.gz)
        filename: '[path][base].gz',
        // 压缩率小于1才会压缩
        minRatio: 0.8,
        // 压缩 js 与 css
        test: new RegExp('.(js|css)$'),
        // 对超过10k的数据压缩
        threshold: 10240,
      }),
    ],
  },
}
```
