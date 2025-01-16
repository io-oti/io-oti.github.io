---
author: Io_oTI
date: 2024-07-12
publish: false
tag: 'vue'
title: 'Composition API'
---

# Composition API

组合式 API 是 Vue 中的一组用于编写组件和组合式函数的函数。

该词也用于描述用于编写组件的两种主要风格之一，另一种是选项式 API。通过组合式 API 编写的组件使用 `<script setup>` 或显式的 `setup()` 函数。

## setup() 函数

`setup()` 函数是组合式 API 的核心。它是一个函数，它接收一个上下文对象作为参数，并返回一个对象，包含了组件的状态、数据、方法和生命周期钩子。

```js
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)

    onMounted(() => {
      console.log('Component mounted')
    })

    return {
      count
    }
  }
}
```

1. `ref()` 函数用于创建响应式变量。
2. `onMounted()` 函数用于注册一个回调函数，在组件被挂载后执行。
3. `return` 语句返回一个对象，包含了组件的状态 `count`。

## 响应式: 核心

✍ 敬请期待

## 响应式: 工具

✍ 敬请期待

## 响应式: 进阶

✍ 敬请期待

## 生命周期钩子

✍ 敬请期待

## 依赖注入

✍ 敬请期待

## 辅助

✍ 敬请期待
