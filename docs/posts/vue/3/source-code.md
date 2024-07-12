---
author: Io_oTI
date: 2024-07-11
draft: true
tag: 'vue'
title: 'Vue 源码分析'
---

# Vue

```shell
src
├── compiler
│   ├── codegen
│   ├── directives
│   ├── parser
│   ├── codeframe.ts
│   ├── create-compiler.ts
│   ├── error-detector.ts
│   ├── helpers.ts
│   ├── index.ts
│   ├── optimizer.ts
│   └── to-function.ts
├── core
│   ├── components
│   ├── global-api
│   ├── instance
│   ├── observer
│   ├── util
│   ├── vdom
│   ├── config.ts
│   └── index.ts
├── platforms
│   └── web
├── shared
│   ├── constants.ts
│   └── util.ts
├── types
│   ├── compiler.ts
│   ├── component.ts
│   ├── global-api.ts
│   ├── modules.d.ts
│   ├── options.ts
│   ├── ssr.ts
│   ├── utils.ts
│   └── vnode.ts
├── v3
│   ├── reactivity
│   ├── sfc-helpers
│   ├── apiAsyncComponent.ts
│   ├── apiInject.ts
│   ├── apiLifecycle.ts
│   ├── apiSetup.ts
│   ├── apiWatch.ts
│   ├── currentInstance.ts
│   ├── debug.ts
│   ├── h.ts
│   └── index.ts
└── global.d.ts
```
