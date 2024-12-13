---
author: Io_oTI
date: 2023-10-26
draft: true
tag: 'css'
title: '盒子模型（Box Model）'
---

# 盒子模型（Box Model）

在 CSS 中，所有的元素都被一个个的“盒子”包围着，理解这些“盒子”的基本原理，是我们使用 CSS 实现准确布局、处理元素排列的关键。

一般分为区块盒子（block boxes）和行内盒子（inline boxes）,可以使用 `display` 属性为显示类型设置各种值，该属性可以有多种值。


以下是盒子模型内容的大概示意，包括外边距盒子（margin box）、边框盒子（border box）、内边距盒子（padding box）和内容盒子（content box）：

```plaintext
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┊        Margin box         ┊
┊  ┏━━━━ Border box ━━━━━┓  ┊
┊  ┃     Padding box     ┃  ┊
┊  ┃  ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮  ┃  ┊
┊  ┃  ┊               ┊  ┃  ┊
┊  ┃  ┊  Content box  ┊  ┃  ┊
┊  ┃  ┊               ┊  ┃  ┊
┊  ┃  ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯  ┃  ┊
┊  ┗━━━━━━━━━━━━━━━━━━━━━┛  ┊
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

## 外部显示类型

一个拥有 block 外部显示类型的盒子会表现出以下行为：

 - 盒子会产生换行。
 - width 和 height 属性可以发挥作用。
 - 内边距、外边距和边框会将其他元素从当前盒子周围“推开”。
 - 如果未指定 width，方框将沿行向扩展，以填充其容器中的可用空间。在大多数情况下，盒子会变得与其容器一样宽，占据可用空间的 100%。

某些 HTML 元素，如 `<h1>` 和 `<p>`，默认使用 block 作为外部显示类型。

一个拥有 inline 外部显示类型的盒子会表现出以下行为：

 - 盒子不会产生换行。
 - width 和 height 属性将不起作用。
 - 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
 - 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。

某些 HTML 元素，如 `<a>`、 `<span>`、 `<em>` 以及 `<strong>`，默认使用 inline 作为外部显示类型。

## 内部显示类型