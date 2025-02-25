---
author: Io_oTI
date: 2024-07-12
publish: true
tag: 'nodejs'
title: 'Axios'
---

# Axios

一个基于 Promise 的网络请求库，可用于浏览器和 Node.js 环境。

## 安装

```bash
npm install axios
```

## 使用

::: code-group

```javascript [创建实例]
import axios from 'axios';

// 默认配置
const defaultConfig = {
  baseURL: 'https://example.com/api',
  timeout: 6e4,
  headers: {
    'Content-Type': 'application/json',
  }
};

// axios 实例
const http = axios.create(defaultConfig);

// 请求拦截器
http.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config;
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 响应拦截器
http.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数
  // 对响应数据做点什么
  return response;
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default http;
```

```javascript [Get 请求]
import http from './http';

const params = {
  page: 1,
  size: 10,
};

http.get('/example', { params })
 .then((response) => {
    console.log(response.data);
  })
 .catch((error) => {
    console.log(error);
  });
```

```javascript [Post 请求]
import http from './http';

const data = {
  page: 1,
  size: 10,
};

http.post('/example', { data })
 .then((response) => {
    console.log(response.data);
  })
 .catch((error) => {
    console.log(error);
  });
```

```javascript [上传文件]
import http from './http';

const data = new FormData();

data.append('file', file);

http.post('/upload', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
 .then((response) => {
    console.log(response.data);
  })
 .catch((error) => {
    console.log(error);
  });
```

::: code-group

## 参考

- [Axios - 官方文档](https://axios-http.com/zh/docs/intro)
- [Axios - github](https://github.com/axios/axios)
- [Axios - npmjs](https://www.npmjs.com/package/axios)
