---
author: Io_oTI
date: 2024-12-09
publish: true
tag: 'vue'
title: '如何规范 Vue 3 项目代码'
---

# 如何规范 Vue 3 项目代码

::: tip
以下教程基于 Visual Studio Code 编辑器来安装和配置。
:::

## Vue - Official

[Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 是一个 Vue 官方开发的 VS Code 扩展，该插件提供了语法高亮、TypeScript 支持，以及模板内表达式与组件 props 的智能提示。

> Vue - Official 取代了之前为 Vue 2 提供的官方 VS Code 扩展 Vetur。如果你之前已经安装了 Vetur，请确保在 Vue 3 的项目中禁用它。

### 推荐配置

此设置自动为 ref 对象添加 `.value` 属性。

```json
{
  "...": "",
  "vue.autoInsert.dotValue": true,
}
```

## ESLint

ESLint 是一个根据方案识别并报告 ECMAScript/JavaScript 代码问题的工具，其目的是使代码风格更加一致并避免错误。

### 安装和配置 ESLint

你可以参考使用以下命令来安装和配置 ESLint：

```shell
npm init @eslint/config
```

以下是配置步骤：

```shell
? How would you like to use ESLint? …
  To check syntax only
▸ To check syntax and find problems # 👈

? What type of modules does your project use? …
▸ JavaScript modules (import/export) # 👈
  CommonJS (require/exports)
  None of these

? Which framework does your project use? …
  React
▸ Vue.js # 👈
  None of these

? Does your project use TypeScript? …
▸ No # 根据你的情况选择，我会选择这个。
  Yes

? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser # 根据你的情况选择，我会选择这个。
✔ Node

eslint@9.x, globals, @eslint/js, eslint-plugin-vue
? Would you like to install them now? ‣ No / Yes # yes

? Which package manager do you want to use? …
▸ npm # 根据你的情况选择，我会选择这个。
  yarn
  pnpm
  bun
```

等待包管理器安装好依赖包和 eslint 配置脚本创建 `eslint.config.mjs` 文件，之后 `package.json` 中会出现这些依赖项：

```json
{
  "...": "",
  "devDependencies": {
    "@eslint/js": "^9.16.0", // [!code highlight:4]
    "eslint": "^9.16.0",
    "eslint-plugin-vue": "^9.32.0",
    "globals": "^15.13.0"
  }
}
```

`eslint.config.mjs` 文件的内容：

```javascript
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
```

### 修改 ESLint 配置

我们将 `eslint.config.mjs` 文件格式化一下，并根据实际情况修改一些配置。比如添加一些全局变量，这可以避免 ESLint 将全局变量当作未定义变量；以及如果你使用 JSX 来编写 Vue，那么你应该配置启用 JSX。

这里是 [eslint-plugin-vue的规则](https://eslint.vuejs.org/rules/)，推荐使用 'flat/recommended' 规则。如果需要配置更多文件的规则，最好给 `eslint-plugin-vue` 加上 files 属性，避免影响其他规则。

[Issues - How does the flat configuration of eslint-plugin-vue only apply to vue files](https://github.com/vuejs/eslint-plugin-vue/issues/2603)

```javascript
import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'

export default [,
  // 给 eslint-plugin-vue 加上匹配文件类型
  ...pluginVue.configs['flat/recommended'].map(config => ({ // [!code highlight:4]
    ...config,
    files: ['docs/**/*.vue'],
  })),
  {
    name: 'files-to-ignore',
    ignores: [
      // 忽略文件或文件夹
      "**/node_modules/" // [!code highlight]
    ]
  },
  {
    name: 'files-to-lint',
    files: ['src/**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        // 添加全局变量
        __dirname: true, // [!code highlight]
      },
      parserOptions: {
        // 启用 JSX
        ecmaFeatures: { // // [!code highlight:3]
          jsx: true,
        },
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      // 自定义规则
      'vue/multi-word-component-names': 0, // // [!code highlight]
    },
  },
]
```

### 保存时修复错误

在 VS Code 中添加此配置可以在保存文件时自动修复 ESLint 发现的错误。

```json
{
  "...": "",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
  },
}
```

### ESLint 配置检查器

[@eslint/config-inspector](https://www.npmjs.com/package/@eslint/config-inspector)

在包含 `eslint.config.js` 文件的目录运行以下命令：

```shell
npx @eslint/config-inspector@latest
```

此命令将在本地启动一个 web 服务，在页面上展示所有的 ESLint 配置、规则和生效的文件。

## Prettier

Prettier 是一个固执己见的代码格式化器。它支持格式化：

- JavaScript
- TypeScript
- Vue
- JSX
- CSS, Less, and SCSS
- HTML
- ...

### 安装 Prettier 扩展

在 VS Code 中安装 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 扩展，然后在 VS Code 设置文件中添加 Prettier 的配置。

### 添加 Prettier 配置

将 Prettier 设置为 Vue 的默认格式化工具，之后就可以使用 `ctrl + shift + f` 来格式化代码：

```json
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

这里是 [Prettier 配置项文档](https://prettier.io/docs/en/options) ，以下是推荐的格式化配置：

```json
  "prettier.bracketSameLine": false,
  "prettier.bracketSpacing": true,
  "prettier.printWidth": 80,
  "prettier.semi": false,
  "prettier.singleAttributePerLine": true,
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "es5",
```

## 完整的 VS Code 工作区设置

<details>
  <summary>settings.json:</summary>

  ```json
  {
    /* vscode - editor */
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": "explicit",
    },

    /* vscode - vue */
    "[vue]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    /* vscode - javascript */
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    /* vscode - typescript */
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    /* vscode - jsx */
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

    /* extensions - vue official */
    "vue.autoInsert.dotValue": true,

    /* extensions - prettier */
    "prettier.bracketSameLine": false,
    "prettier.bracketSpacing": true,
    "prettier.printWidth": 80,
    "prettier.semi": false,
    "prettier.singleAttributePerLine": true,
    "prettier.singleQuote": true,
    "prettier.tabWidth": 2,
    "prettier.trailingComma": "es5",
  }
  ```

</details>

## 参考

- [ESLint](https://eslint.org/docs/latest/)
- [eslint-plugin-vue 用户指南](https://eslint.vuejs.org/user-guide/)
- [Prettier](https://prettier.io/docs/en/)
