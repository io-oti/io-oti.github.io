---
author: Io_oTI
date: 2024-10-29
publish: false
tag: 'vue'
title: 'Vue 源码阅读'
---

Vue 源码目录结构：

```sh
src
├── compiler                  # 编译器
│   ├── codegen               #
│   ├── directives            # 指令
│   ├── parser                # 解析器
│   ├── codeframe.ts          #
│   ├── create-compiler.ts    #
│   ├── error-detector.ts     #
│   ├── helpers.ts            #
│   ├── index.ts              #
│   ├── optimizer.ts          #
│   └── to-function.ts        #
├── core                      # 核心代码
│   ├── components            # 内置组件
│   ├── global-api            # 全局 API
│   ├── instance              #
│   ├── observer              #
│   ├── util                  #
│   ├── vdom                  #
│   ├── config.ts             #
│   └── index.ts              #
├── platforms                 #
│   └── web                   #
├── shared                    #
│   ├── constants.ts          #
│   └── util.ts               #
├── types                     #
│   ├── compiler.ts           #
│   ├── component.ts          #
│   ├── global-api.ts         #
│   ├── modules.d.ts          #
│   ├── options.ts            #
│   ├── ssr.ts                #
│   ├── utils.ts              #
│   └── vnode.ts              #
├── v3                        #
│   ├── reactivity            #
│   ├── sfc-helpers           #
│   ├── apiAsyncComponent.ts  #
│   ├── apiInject.ts          #
│   ├── apiLifecycle.ts       #
│   ├── apiSetup.ts           #
│   ├── apiWatch.ts           #
│   ├── currentInstance.ts    #
│   ├── debug.ts              #
│   ├── h.ts                  #
│   └── index.ts              #
└── global.d.ts               #
```

调用栈：

```plaintext
initGlobalAPI
│   ├── vm._init
│   │   ├── initLifecycle
│   │   ├── initEvents
│   │   ├── initRender
│   │   ├── beforeCreate(lifecycle)
│   │   ├── initInjections
│   │   ├── initState
│   │   ├── initProvide
│   │   └── created(lifecycle)
│   ├── vm.$mount
│   │   └── mountComponent
│   │       ├── beforeMount(lifecycle)
│   │       ├── renderTracked(lifecycle)
│   │       ├── renderTriggered(lifecycle)
│   │       └── mounted(lifecycle)

```

## 编译器

编译器主要负责将模板编译成渲染函数，并将模板中的数据绑定到视图上。

✍ 敬请期待

## 核心代码

核心代码主要负责 Vue 的实例化、数据观察、事件系统、渲染系统等功能。

✍ 敬请期待

## 平台

平台主要负责不同平台的适配，比如浏览器、Node.js 等。

✍ 敬请期待

## 共享代码

共享代码主要负责一些工具函数和常量。

✍ 敬请期待

## 类型定义

类型定义主要负责 TypeScript 的类型定义。

✍ 敬请期待

## v3

v3 主要是 Vue 3.0 的代码，包括 Reactivity、SFC Helpers、API 等。

✍ 敬请期待

## 全局 API

全局 API 主要是 Vue 的构造函数和全局方法。

✍ 敬请期待

## 生命周期

生命周期主要是 Vue 实例的各个阶段，比如创建、挂载、更新、销毁等。

✍ 敬请期待

## 实例初始化流程

实例初始化流程主要是 Vue 实例的初始化流程，包括初始化生命周期、初始化事件、初始化渲染、创建、挂载等。

✍ 敬请期待

## 编译流程

编译流程主要是 Vue 模板的编译流程，包括解析、优化、生成渲染函数等。

✍ 敬请期待

## 响应式系统

响应式系统主要是 Vue 实现数据响应式的系统，包括数据观察、依赖收集、派发更新等。

✍ 敬请期待

## 虚拟 DOM

虚拟 DOM 主要是 Vue 实现的视图层虚拟化技术，将真实 DOM 转换成一个轻量级的虚拟 DOM，并通过 diff 算法计算出最小的变化，以减少实际 DOM 操作。

✍ 敬请期待

## 组件系统

组件系统主要是 Vue 实现的组件化系统，包括组件的定义、注册、渲染等。

✍ 敬请期待

## 路由系统

路由系统主要是 Vue 实现的路由系统，包括路由的定义、匹配、跳转等。

✍ 敬请期待

## 状态管理系统

状态管理系统主要是 Vue 实现的状态管理系统，包括 Vuex、Pinia 等。

✍ 敬请期待
