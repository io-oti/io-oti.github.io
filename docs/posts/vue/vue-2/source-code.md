---
author: Io_oTI
date: 2024-10-29
draft: true
tag: 'vue'
title: 'Vue 2 源码阅读'
---

# Vue 2 源码阅读

Vue 2.7 源码目录结构：

```shell
./src
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

```plaintext
initGlobalAPI
vm._init
  initLifecycle
  initEvents
  initRender
  beforeCreate(lifecycle)
  initInjections
  initState
  initProvide
  created(lifecycle)
vm.$mount
  mountComponent
    beforeMount(lifecycle)
    renderTracked(lifecycle)
    renderTriggered(lifecycle)
    mounted(lifecycle)
```
