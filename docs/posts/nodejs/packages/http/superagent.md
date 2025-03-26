---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'SuperAgent'
---

小型渐进式客户端 HTTP 请求库和具有相同 API 的 Node.js 模块，支持许多高级 HTTP 客户端功能。

## 安装

```bash
npm install superagent
```

## 使用

```javascript
const request = require('superagent');

request
  .get('https://api.example.com/users')
  .set('Authorization', 'Bearer ' + token)
  .end((err, res) => {
      if (err) {
         console.error(err);
      } else {
         console.log(res.body);
      }
   });
```

## 参考

- [SuperAgent - 中文文档](https://ladjs.github.io/superagent/docs/zh_CN/index.html)
- [SuperAgent - github](https://github.com/ladjs/superagent)
- [SuperAgent - npmjs](https://www.npmjs.com/package/superagent)
