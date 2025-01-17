---
author: Io_oTI
date: 2023-10-16
publish: true
tag: 'vite'
title: '如何从 Vue CLI 迁移到 Vite'
---

# 如何从 Vue CLI 迁移到 Vite

如果你在 2021 年之前一直在使用 Vue 进行开发，那么你选择的构建工具很有可能是 Vue CLI。一段时间以来，它一直是脚手架 Vue.js 项目的事实标准。不过现在，Evan You 的下一代构建工具 Vite 已经引起了很多关注，是 Vue CLI 的绝佳替代品。

## 为什么要从 Vue CLI 迁移到 Vite？

采取行动的主要原因是速度。Vite 的开发服务器速度很快。因为它对 JavaScript 模块使用本机浏览器支持，所以服务器启动时间是即时的。这种方法还意味着，无论应用程序的大小如何，热模块更换都保持快速，因为不必重建整个捆绑包。

为了演示，这里有一个全新的 Vue CLI 项目的基准测试，与使用 Vite 的完全相同的项目相比。

- 启动时间:
  - Vue CLI - 2591ms（超过 2 秒）
  - Vite - 259ms（远低于半秒 - 快 10 倍） ⚡️
- 热模块替换 (HMR):
  - Vue CLI - 171ms
  - Vite - 不是由 Vite 打印到控制台，而是从观察中打印出来...基本上是即时的

请记住，这只是脚手架样板。随着项目的增长，Vue CLI 版本只会逐渐变慢，而 Vite 承诺无论你的项目规模如何，都能以相同的水平执行。

## 如何从 Vue CLI 迁移到 Vite？

所以你确信 Vite 适合你，那么如何将你的项目从使用 Vue CLI 迁移到 Vite？

为了回答这个问题，我用 Vue CLI 构建了一个全新的项目，我将与你一起完成将其转换为 Vite 的步骤。当然，你通常不会从一个全新的 Vue CLI 项目开始，但其中许多步骤对于你建立的项目是相同的。

另外，我选择从 Vue 2 代码库工作，因为你们中的大多数人可能已经建立了完善的代码库仍在 Vue 2 上运行。但是，我也在下面的过程中做了笔记，Vue 3 的情况会有所不同。

最后，如果你不想和我一起完成整个过程，你可以在此示例存储库中看到更改的差异。

### 步骤 1：更新依赖项

迁移到 Vite 的第一步是更新 package.json 中的依赖项。我们需要删除与 Vue CLI 相关的依赖项。

```jsonc
// package.json
"@vue/cli-plugin-babel": "~4.5.0", // remove
"@vue/cli-plugin-eslint": "~4.5.0", // remove
"@vue/cli-plugin-router": "~4.5.0", // remove
"@vue/cli-plugin-vuex": "~4.5.0", // remove
"@vue/cli-service": "~4.5.0", // remove
```

我们还可以删除 sass-loader，因为 Vite 为最常见的预处理器提供了开箱即用的内置支持。这将使我们能够继续使用我们选择的 CSS 预处理器。请注意，Vite 建议将原生 CSS 变量与 PostCSS 插件一起使用，这些插件可以实现 CSSWG 草稿并编写简单的、符合未来标准的 CSS。

```jsonc
// package.json
"sass-loader": "^8.0.2" // remove
```

最后，我们将添加 Vite 作为依赖项，以及 Vite 的 Vue 插件组件，以支持单文件组件。

```jsonc
// package.json
"@vitejs/plugin-vue": "^1.6.1",
"vite": "^2.5.4",
```

此外，由于我们正在迁移 Vue 2 项目，除了官方的 Vue 插件之外，我们还需要包含社区维护的 Vue 2 插件。如果我们使用 Vue 3，那就没有必要了。

```jsonc
// package.json
"vite-plugin-vue2" : "1.9.0" // add for Vue 2
```

安装 Vite 插件后，我们现在还可以删除 vue 模板编译器，因为它由 Vite Vue 插件处理。

```jsonc
// package.json
"vue-template-compiler": "^2.6.11" //remove (SFC support provided by vite vue plugin)
```

### 步骤 2：仅为现代浏览器提供支持

由于 Vite 是下一代构建工具，让我们乐观地继续只支持最现代的浏览器。这将使我们的构建尽可能精简和快速。

实际上，这意味着我们可以从依赖项中完全删除 Babel，因为大多数移动和桌面常青浏览器几乎完全支持所有 ES6 功能。如果你仍然需要支持像 Internet Explorer 11 这样的旧浏览器，Vite 确实为此提供了一个官方插件。

因此，要删除 Babel，首先我们将删除 babel.config.js 该文件。

接下来，由于我们已经删除了需要 babel 本身的 @vue/cli-plugin-babel 依赖项，我们只需要从 package.json 中删除其他几个与 babel 相关的依赖项。

```jsonc
// package.json
"babel-eslint": "^10.1.0", // remove
"core-js": "^3.6.5", // remove
```

现在删除后 babel-eslint ，我们需要将其作为解析器从我们的 .eslintrc 文件中删除。

```jsonc
// .eslintrc
// remove
parserOptions: {
    parser: "babel-eslint",
},
```

注意：如果你的项目中没有 linting/format 设置，你可以跳到下一步，但我强烈建议你添加它，如果你还没有它。这是一个很好的教程，可以在你的 Vite 驱动的 Vue 项目上设置它。

最后，当我们进入 .eslintrc 时，我们需要添加环境 es2022，因为该项目的 src 现在完全位于 ES 模块土地上。你也可以保留节点环境，因为某些配置文件仍在节点环境中运行。

```jsonc
// .eslintrc
env: {
    node: true,
    es2022: true, // 👈 add this
}
```

此更改还将迫使我们自行更新 eslint ，以及 eslint-plugin-vue 支持 es2021 环境。

```bash
npm install eslint@8 eslint-plugin-vue@8
```

### 步骤 3：添加 Vite 配置

在此步骤中，让我们为 Vue.js 项目配置 Vite。Vite 是通过项目根目录中的文件配置 vite.config.js 的。这是使用 为 npm init vite@latest Vue 生成全新 Vite 项目时的默认 vite.config.js 文件的样子。

```javascript
// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
```

我们想再添加 2 件事。

首先，我们将从 vite-plugin-vue2 Vue 插件导入，而不是官方的 Vite Vue 插件。

```javascript
// vite.config.js
import vue from '@vitejs/plugin-vue' // remove
import { createVuePlugin as vue } from 'vite-plugin-vue2'

//...
```

当然，如果你使用的是 Vue 3，你不必这样做。

其次，为了使 @ 导入别名像使用 Vue CLI 一样工作，我们需要添加这个位。

```javascript
// vite.config.js
//...
const path = require('path')
export default defineConfig({
  //...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 步骤 4：移动 index.html

与 Vue CLI 相反，Vite 实际上将保存 Vue.js 应用程序的索引.html 文件放在项目的根目录中而不是公共目录中，因此你需要移动它。

同样在索引中.html 你需要进行一些更改。

首先， <%= htmlWebpackPlugin.options.title %> 我们将占位符的实例更改为硬编码值。

```html
// index.html

<!--remove-->
<title><%= htmlWebpackPlugin.options.title %></title>
<!--add-->
<title>Hard Coded Title</title>

//...
<!--remove-->
<strong
  >We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly
  without JavaScript enabled. Please enable it to continue.</strong
>
<!--add-->
<strong
  >We're sorry but this app doesn't work properly without JavaScript enabled.
  Please enable it to continue.</strong
>
```

我们还需要将 <%= BASE_URL %> 占位符替换为绝对路径。

```html
// index.html

<!--remove-->
<link rel="icon" href="<%= BASE_URL %>favicon.ico" />
<!--add-->
<link rel="icon" href="/favicon.ico" />
```

最后也是最重要的一点，JavaScript 应用程序不再是自动注入的，所以我们需要像这样包含它：

```html
<script type="module" src="/src/main.js"></script>
```

### 步骤 5：更新脚本

回到 package.json，我们还需要更新脚本。我们将旧 vue-cli-service 命令更改为 Vite 特定命令。

```jsonc
// package.json
"serve": "vue-cli-service serve", // remove
"build": "vue-cli-service build", // remove
"dev": "vite",
"build": "vite build",
"serve": "vite preview",
```

请注意，启动开发服务器的命令不再是 serve 。Vite 改为使用 dev ， serve 用于在本地预览生产版本。

此外，如果你启用了 linting，则应更新 lint 脚本以直接运行 eslint。

```jsonc
"lint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src"
```

### 步骤 6：更新环境变量

环境变量在 Vite 中的工作方式与它们在 Vue CLI 中的工作方式之间存在很多交叉。例如，你的 .env 命名约定可以保持不变。

```dotenv
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

但是，你无法再访问变量上的环境 process 变量。相反，可以在 上 import.meta.env 找到它们。

```javascript
// router/index.js
base: process.env.BASE_URL, //remove
base: import.meta.env.BASE_URL,
```

此外，用于使声明客户端公开的 env 变量更明显的 VUE*APP* 前缀更改为 ，因此如果你有任何此类环境变量 VITE\_ ，则必须相应地更新它们。

### 步骤 7：将 .vue 扩展名添加到 SFC 导入

虽然我们新创建的 Vue CLI 项目已经这样做了，但我敢打赌你现有的应用程序可能不会这样做。因此，必须确保单个文件组件的所有导入都以 .vue 扩展名结尾。

```javascript
// Home.vue
import HelloWorld from '@/components/HelloWorld.vue' // .vue is required
```

如果此过程由于代码库的大小而过于压倒性，则可以配置 vite，以便不需要这样做。这是通过添加到 .vue 中的 resolve.extensions vite.config.js 配置选项来实现的。确保还手动包含所有默认扩展名，因为此选项会覆盖默认值。

```javascript
// vite.config.js
//...
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    //...
  },
})
```

虽然这有效，但如果可能的话，应该避免。为什么？因为根据 Vite 文档：“请注意，不建议省略自定义导入类型的扩展（例如 .vue ），因为它会干扰 IDE 和类型支持。

### 步骤 8：清理魔术注释

最后，你可以删除所有用于命名动态导入的魔术注释，因为这些是特定于 webpack 的注释，对 Vite 没有任何意义。

```javascript
// router/index.js
import(
    /* webpackChunkName: "about" */  // remove
    "../views/About.vue"
),
```

相反，Vite 将根据原始 .vue 文件名和缓存破坏哈希自动命名你的块，如下所示： About.37a9fa9f.js

### 步骤 9：享受更快，更无缝的开发体验

完成上述步骤 1-8 后，你的应用程序应该已准备好开始使用 Vite 运行！继续启动你的开发服务器 npm run dev ，看看 Vite 对自己来说有多快。

如果此时弹出任何其他错误，请在下面发表评论并与社区分享，以及你可能拥有的任何解决方案！

最后，请记住，在此示例存储库中，可以将所有这些更改视为差异，以帮助进行迁移。

## 参考

[How to Migrate from Vue CLI to Vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
