---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'Moment.js'
---

# Moment.js

用于解析、验证、操作和格式化日期的 JavaScript 日期库。

## 安装

```bash
npm install moment
```

## 使用

```javascript
const moment = require('moment');

// 解析日期
const date = moment('2021-07-12');
console.log(date.format()); // 2021-07-12T00:00:00+08:00

// 验证日期
const isValid = moment('2021-07-12', 'YYYY-MM-DD').isValid();
console.log(isValid); // true

// 操作日期
const newDate = moment('2021-07-12').add(1, 'day');
console.log(newDate.format()); // 2021-07-13T00:00:00+08:00

// 格式化日期
const formattedDate = moment('2021-07-12').format('YYYY-MM-DD');
console.log(formattedDate); // 2021-07-12
```

## 参考

- [Moment.js](https://momentjs.com/)
- [Moment.js - github](https://github.com/moment/moment/)
- [Moment.js - npmjs](https://www.npmjs.com/package/moment)
