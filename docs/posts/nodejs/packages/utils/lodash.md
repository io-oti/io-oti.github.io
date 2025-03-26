---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'Lodash'
---

一个现代化的 JavaScript 实用程序库，提供模块化、性能和附加功能。

## 安装

```bash
npm install lodash
```

## 使用

```javascript
const _ = require('lodash');

// 数组
const arr = [1, 2, 3, 4, 5];
const result = _.filter(arr, (num) => num % 2 === 0);
console.log(result); // [2, 4]

// 对象
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const result = _.pick(obj, ['a', 'c', 'e']);
console.log(result); // { a: 1, c: 3, e: 5 }

// 字符串
const str = 'hello world';
const result = _.split(str, ' ');
console.log(result); // ['hello', 'world']
```

## 参考

- [Lodash 官方文档](https://www.lodashjs.com/)
- [Lodash 中文文档](https://www.lodashjs.com/docs/lodash.html)
- [Lodash - github](https://github.com/lodash/lodash)
- [Lodash - npmjs](https://www.npmjs.com/package/lodash)
