---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'Underscore.js'
---

Underscore 是一个 JavaScript 库，它在不扩展任何内置对象的情况下提供了一大堆有用的函数式编程助手。

## 安装

```bash
npm install underscore
```

## 使用

```javascript
const _ = require('underscore');

// 数组
const arr = [1, 2, 3, 4, 5];

// 过滤
const filtered = _.filter(arr, function(num) {
  return num % 2 === 0;
});
console.log(filtered); // [2, 4]

// 映射
const mapped = _.map(arr, function(num) {
  return num * 2;
});
console.log(mapped); // [2, 4, 6, 8, 10]

// 排序
const sorted = _.sortBy(arr, function(num) {
  return -num;
});
console.log(sorted); // [5, 4, 3, 2, 1]

// 对象
const obj = {name: 'John', age: 30, city: 'New York'};

// 键值对
const pairs = _.pairs(obj);
console.log(pairs); // [['name', 'John'], ['age', 30], ['city', 'New York']]

// 合并
const merged = _.merge({name: 'Jane'}, {age: 25});
console.log(merged); // {name: 'Jane', age: 25}

// 其他
const flattened = _.flatten([1, [2, [3, 4], 5]]);
console.log(flattened); // [1, 2, 3, 4, 5]
```

## 参考

- [Underscore.js](http://underscorejs.org/)
- [Underscore.js - github](https://github.com/jashkenas/underscore)
- [Underscore.js - npmjs](https://www.npmjs.com/package/underscore)
