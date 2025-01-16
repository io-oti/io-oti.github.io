---
author: Io_oTI
date: 2024-10-30
publish: true
tag: 'miniprogram'
title: '微信小程序开发指南'
---

# 微信小程序开发指南

推荐第一次开发微信小程序的开发者阅读微信官方的文档[《小程序开发指南》](https://developers.weixin.qq.com/ebook?action=get_post_info&docid=0008aeea9a8978ab0086a685851c0a)，本文的是对此文档的一些补充。

## npm

使用 npm 的命令需安装 node.js，请先自行安装。

1. 安装 npm 包

   在小程序 package.json 所在的目录中执行命令：

   ```shell
   npm install [package name]
   ```

2. 构建 npm 包

   点击微信开发者工具中的菜单栏：`工具` --> `构建 npm`

   等待构建完成后，package.json 所在的目录中会有一个 `miniprogram_npm` 文件夹，
   这里面就是已经构建好的 npm 包。

3. 在 JS 文件中引用：

   ```javascript
   import packageName from 'packageName'
   ```

详细步骤可参考官方文档：[npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## computed

小程序有许多地方与 Vue 很像，但是并没有 Vue 的 computed 和 watch，想要使用这些特性可以安装并构建一个 npm 包来实现。

```shell
npm install --save miniprogram-computed
```

在 Component 构造器中的使用示例：

::: code-group

```javascript[computed]
import computedBehavior from 'miniprogram-computed'

Component({
  behaviors: [computedBehavior],
  data: {
    a: 1,
    b: 1,
  },
  computed: {
    sum(data) {
      return data.a + data.b
    },
  },
})
```

```javascript[watch]
import computedBehavior from 'miniprogram-computed'

Component({
  behaviors: [computedBehavior],
  data: {
    a: 1,
    b: 1,
    sum: 2,
  },
  watch: {
    'a, b': function(a, b) {
      this.setData({
        sum: a + b
      })
    },
  },
})
```

:::

在 Page 构造器中 computed 的使用示例：

```javascript
import computedBehavior from 'miniprogram-computed'

Page({
  behaviors: [
    Behavior({
      behaviors: [computedBehavior],
      computed: {
        sum(data) {
          return data.a + data.b
        },
      }
    })
  ],
  data: {
    a: 1,
    b: 1,
  },
})
```

更多详细信息可以参考：[miniprogram-computed](https://github.com/wechat-miniprogram/computed)

## 状态管理器

与 computed 的情况相似，如果需要用到全局的状态管理，则需要安装并构建 `mobx-miniprogram` 和 `mobx-miniprogram-bindings` npm 包:

```shell
npm install --save mobx-miniprogram mobx-miniprogram-bindings
```

::: code-group

```javascript[创建 store]
// store.js
import { observable, action } from 'mobx-miniprogram'

// 创建 store 时可以采用任何 mobx 的接口风格
// 这里以传统的 observable 风格为例

export const store = observable({
  // data
  numA: 1,
  numB: 2,

  // computed
  get sum() {
    return this.numA + this.numB
  },

  // actions
  update: action(function () {
    const sum = this.sum
    this.numA = this.numB
    this.numB = sum
  }),
})
```

```javascript[在 Component 构造器中使用]
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from './store'

Component({
  behaviors: [storeBindingsBehavior], // 添加这个 behavior
  data: {
    someData: '...',
  },
  storeBindings: {
    store,
    fields: {
      numA: () => store.numA,
      numB: (store) => store.numB,
      sum: 'sum',
    },
    actions: {
      buttonTap: 'update',
    },
  },
  methods: {
    myMethod() {
      this.data.sum // 来自于 MobX store 的字段
    },
  },
})
```

:::

更多详细信息可以参考：[mobx-miniprogram-bindings](https://github.com/wechat-miniprogram/mobx-miniprogram-bindings)
