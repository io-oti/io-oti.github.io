---
author: Io_oTI
date: 2024-07-12
tag: 'webpack'
title: 'uglifyjs-webpack-plugin'
---

# uglifyjs-webpack-plugin

这个插件使用 [uglify-js](https://github.com/mishoo/UglifyJS2) 来缩小你的 JavaScript。

npmjs: [uglifyjs-webpack-plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)

## 安装

```bash
$ npm install uglifyjs-webpack-plugin --save-dev
```

## 使用

```javascript
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}
```
