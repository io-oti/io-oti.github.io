---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'Ramda'
---

一款实用的 JavaScript 函数式编程库。

## 安装

```bash
npm install ramda
```

## 使用

```javascript
const R = require('ramda');

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const addThenMultiply = R.compose(multiply, add);

console.log(addThenMultiply(2, 3)); // 9
```

## 参考

- [Ramda 官方文档](https://ramdajs.com/docs/)
- [Ramda - github](https://github.com/ramda/ramda)
- [Ramda - npmjs](https://www.npmjs.com/package/ramda)
