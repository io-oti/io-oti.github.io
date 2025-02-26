---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'Day.js'
---

# Day.js

用于解析、验证、操作和格式化日期的 JavaScript 日期库。

## 安装

```bash
npm install dayjs
```

## 使用

```javascript
const dayjs = require('dayjs')

// 解析日期字符串
const date = dayjs('2021-07-12')
console.log(date.format('YYYY-MM-DD')) // 2021-07-12

// 格式化日期
const date = dayjs()
console.log(date.format('YYYY-MM-DD HH:mm:ss')) // 2021-07-12 10:10:10

// 验证日期
const date = dayjs('2021-07-12')
console.log(date.isValid()) // true

// 操作日期
const date = dayjs('2021-07-12')
console.log(date.add(1, 'day').format('YYYY-MM-DD')) // 2021-07-13
console.log(date.subtract(1, 'day').format('YYYY-MM-DD')) // 2021-07-11
```

## 参考

- [Day.js](https://day.js.org/)
- [Day.js - github](https://github.com/iamkun/dayjs)
- [Day.js - npmjs](https://www.npmjs.com/package/dayjs)
