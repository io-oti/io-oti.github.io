---
author: Io_oTI
date: 2023-10-26
publish: true
tag: 'css'
title: '优先级（Specificity）'
---

# {{ $frontmatter.title }}

假设使用的是以下 HTML 和 CSS：

::: code-group

```html
<button class="branding">Hello, Specificity!</button>
```

```css
button {
  color: red;
}

.branding {
  color: blue;
}
```

:::

这里有两条相互竞争的规则。 一个按钮将按钮设置为红色，另一个将按钮设置为蓝色。哪项规则会应用于此元素？ 了解 CSS 规范关于优先级的算法是了解 CSS 如何在竞争规则之间作出决定的关键。

优先级是级联的四个不同阶段之一，在最后一个有关级联的单元中进行了介绍。

## 优先级评分

每条选择器规则都会获得一个评分。 可以将优先级视为一个总分，每种选择器类型都会获得相应分数。 得分最高的选择器胜出。

鉴于真实项目的优先级，平衡措施是确保预期应用的 CSS 规则确实确实适用，同时通常会降低得分以避免复杂性。分数只应尽可能高，而不是力求达到最高分数。未来，我们可能会应用一些真正更重要的 CSS。 如果要获得最高分，那么要付出的努力会非常困难。

## 对每种选择器类型进行评分

每类选择器都能获得积分。 将所有点相加即可计算选择器的整体优先级。

| 选择器类型           | 优先级点 |
| :------------------- | -------- |
| 通用选择器           | 0        |
| 元素或伪元素选择器   | 1        |
| 类、伪类或属性选择器 | 10       |
| ID 选择器            | 100      |
| 行内样式             | 1000     |
| !important           | 10000    |

### 通用选择器

通用选择器 `*` 没有优先级，可获得 0 分。也就是说，任何包含 1 个或多个点的规则会覆盖

```css
* {
  color: red;
}
```

### 元素或伪元素选择器

元素（类型）或伪元素选择器获得 1 个优先级。

元素选择器

```css
div {
  color: red;
}
```

伪元素选择器

```css
::selection {
  color: red;
}
```

### 类、伪类或属性选择器

类、伪类或属性选择器具有 10 个优先级点。

类选择器

```css
.my-class {
  color: red;
}
```

伪类选择器

```css
:hover {
  color: red;
}
```

属性选择器

```css
[href='#'] {
  color: red;
}
```

:not() 伪类本身对优先级计算没有任何影响。不过，作为参数传入的选择器确实会添加到优先级计算中。

```css
div:not(.my-class) {
  color: red;
}
```

### ID 选择器

只要使用 ID 选择器 (#myID) 而不是属性选择器 ([id="myID"])，ID 选择器就可获得 100 个优先级点。

```css
#myID {
  color: red;
}
```

### 内嵌样式属性

CSS 直接应用于 HTML 元素的 style 属性，则会获得优先级得分 1,000 分。这意味着，为了在 CSS 中替换它，必须编写一个极为具体的选择器。

```html
<div style="color: red"></div>
```

### !important 规则

最后，CSS 值末尾的 !important 的优先级得分为 10,000 分。这是单个项目可获得的最高优先级。

!important 规则会应用于 CSS 属性，因此整个规则中的所有内容（选择器和属性）都不会获得相同的优先级分数。

```css
.my-class {
  color: red !important; /* 10,000 points */
  background: white; /* 10 points */
}
```

## 参考

- [Specificity | web.dev for China](https://web.developers.google.cn/learn/css/specificity?hl=zh-cn)
- [前端杂谈: CSS 权重 (Specificity)](https://zhuanlan.zhihu.com/p/50322177)
