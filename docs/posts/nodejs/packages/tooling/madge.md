---
{
"author": "Io_oTI",
"date": "2025-02-25",
"publish": true,
"tag": "nodejs",
"title": "Madge",
}
---

Madge 是一个 Node.js 包，它可以分析项目的依赖关系图。它可以帮助你找出项目中哪些模块没有被使用，或者哪些模块之间存在循环依赖。

## 安装

```bash
npm install -g madge
```

### 安装 Graphviz

只有当你想生成可视化图形（例如SVG或DOT格式）时，才需要 [Graphviz](http://www.graphviz.org/)。

::: code-group

```bash [Mac OS X]
# 安装 Graphviz
brew install graphviz

# 或者
port install graphviz

# 查看是否安装成功
dot -V
```

```bash [Ubuntu]
# 安装 Graphviz
apt-get install graphviz

# 查看是否安装成功
dot -V
```

:::

## 使用

这条命令会分析 `src` 目录下所有 `.js` 文件，并生成一个依赖关系图。

```bash
madge src
```

### 将依赖关系输出到 SVG

```bash
madge --image graph.svg [path]
```

### 将循环依赖输出到控制台

```bash
madge --circular [path]
```

## 参考

- [Madge - github](https://github.com/pahen/madge)
- [Madge - npmjs](https://www.npmjs.com/package/madge)
