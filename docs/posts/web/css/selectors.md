---
author: Io_oTI
date: 2024-10-30
publish: true
tag: 'css'
title: '选择器（Selectors）'
---

# {{ $frontmatter.title }}

## 简单选择器

如需了解选择器的工作原理及其在 CSS 中的作用， 请务必了解 CSS 规则的组成部分 CSS 规则是一段代码块 包含一个或多个选择器以及一个或多个声明，以下代码片段中包含一个选择器和两条申明：

```css
.my-css-rule {
  color: black;
  background: lightgray;
}
```

以上代码片段中 `.my-css-rule` 是一个 CSS 的类选择器，高亮代码行则是一条 CSS 规则的申明，其中 `color` 是 CSS 的属性，`black` 是这条 CSS 属性的值。

### 通用选择器

```css
* {
  color: black;
}
```

### 元素选择器

```css
div {
  background: gray;
}
```

### 类选择器

```css
.container {
  background: gray;
}
```

### 属性选择器

```css
[data-type='number'] {
  background: gray;
}
```

### id选择器

```css
#container {
  background: gray;
}
```

### 分组选择器

```css
.container,
#container {
  background: gray;
}
```

## 伪类和伪元素

### 伪类选择器

```css
div:hover {
  background: gray;
}
```

### 伪元素选择器

```css
div::before {
  background: gray;
}

div::after {
  background: gray;
}

li::marker {
  color: #00b7a8;
}
```

## 复杂选择器

### 组合词

✍ 敬请期待

### 复合选择器

✍ 敬请期待

## 参考

- [CSS 选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Selectors)
