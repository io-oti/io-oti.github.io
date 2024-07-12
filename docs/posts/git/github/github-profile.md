---
author: Io_oTI
date: 2024-06-23
tag: 'github'
title: 'Github Profile'
---

# Github Profile

Github Profile 是 Github 网站的个人主页。GitHub 早在 2020 年就推出自定义首页的功能，以下是自定义 Github 个人主页的教程。

以下是我的主页截图：

![github-profile](/public/github-profile.jpg)

## 新建仓库

1. 在 `Github` 上新建一个仓库，仓库名必须与 Github 账号名一致。
2. 仓库可见性设置为 `Public` ，并且勾上 `Add a README file` 选项。
3. 创建完成后会自动跳转到仓库中，点击右上绿色的编辑按钮（Edit README），或者灰色小铅笔图标，开始正式编辑首页文件。

## 编辑 `README.md`

### [Readme Typing SVG](https://readme-typing-svg.herokuapp.com/)

使用链接来加载一个 SVG 可以轻松的自定义打字效果，以下是其可自定义的参数：

| Parameter  | Details                                                                     | Type    | Example                             |
| ---------- | --------------------------------------------------------------------------- | ------- | ----------------------------------- |
| lines      | Text to display with lines separated by `;` and `+` for spaces              | string  | `First+line;Second+line;Third+line` |
| height     | Height of the output SVG in pixels (default: `50`)                          | integer | Any positive number                 |
| width      | Width of the output SVG in pixels (default: `400`)                          | integer | Any positive number                 |
| size       | Font size in pixels (default: `20`)                                         | integer | Any positive number                 |
| font       | Font family (default: `monospace`)                                          | string  | Any font from Google Fonts          |
| color      | Color of the text (default: `36BCF7`)                                       | string  | Hex code without # (eg. `F724A9`)   |
| background | Background color of the text (default: `00000000`)                          | string  | Hex code without # (eg. `FEFF4C`)   |
| center     | `true` to center text or `false` for left aligned (default: `false`)        | boolean | `true` or `false`                   |
| vCenter    | `true` to center vertically or `false`(default) to align above the center   | boolean | `true` or `false`                   |
| multiline  | `true` to wrap lines or `false` to retype on one line (default: `false`)    | boolean | `true` or `false`                   |
| duration   | Duration of the printing of a single line in milliseconds (default: `5000`) | integer | Any positive number                 |
| pause      | Duration of the pause between lines in milliseconds (default: `0`)          | integer | Any non-negative number             |
| repeat     | `true` to loop around to the first line after the last (default: `true`)    | boolean | `true` or `false`                   |
| separator  | Separator used between lines in the lines parameter (default: `;`)          | string  | `;`, `;;`, `/`, etc.                |

### [Shields.io](https://shields.io/)

徽标路径参数如下：

| Parameter    | Details                                                   | Type     | Example                   |
| ------------ | --------------------------------------------------------- | -------- | ------------------------- |
| badgeContent | Label, (optional) message, and color. Separated by dashes | string   | build-passing-brightgreen |

徽标查询参数如下：

| Parameter    | Details                                                   | Type     | Example                   |
| ------------ | --------------------------------------------------------- | -------- | ------------------------- |
| style        |                                                           | string   |                           |
| logo         |                                                           | string   |                           |
| logoColor    |                                                           | string   |                           |
| label        |                                                           | string   |                           |
| labelColor   |                                                           | string   |                           |
| color        |                                                           | string   |                           |
| cacheSeconds |                                                           | string   |                           |
| link         |                                                           | string[] |                           |

### [GitHub Readme Stats](https://github-readme-stats.vercel.app/)

我的 `README.md` 文件的内容：

```markdown
<h3 align="center">
  <a href="https://readme-typing-svg.herokuapp.com/">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=Hi,+There!+👋;Pleasure+to+see+you!🎉&font=Fira+Code&center=true&weight=600&color=539bf5&size=24">
  </a>
</h3>

<p align="center">
  <img src="https://img.shields.io/badge/-Git-000000?logo=git&logoColor=F05032" alt="Git" />
  <img src="https://img.shields.io/badge/-Javascript-F7DF1E?logo=javascript&logoColor=black" alt="Javascript" />
  <img src="https://img.shields.io/badge/-Visual Studio Code-2c2c32?logo=visualstudiocode&logoColor=007ACC" alt="Visual Studio Code" />
  <img src="https://img.shields.io/badge/-Vue.js-34495e?logo=vuedotjs&logoColor=4FC08D" alt="Vue.js" />
  <img src="https://img.shields.io/badge/-Webpack-2b3a42?logo=webpack&logoColor=8DD6F9" alt="Webpack" />
  <a href="https://github.com/io-oti/io-oti">
    <img src="https://komarev.com/ghpvc/?username=io-oti" alt="Profile views" />
  </a>
</p>

<hr>

<!-- Me -->
<h3>👨‍💻 Me</h3>

<p align="center">
  <a href="https://io-oti.github.io/">
    <img src="https://img.shields.io/badge/-Github Pages-ffffff?logo=githubpages&logoColor=222222&style=for-the-badge" alt="Github Pages" />
  </a>
  <a href="https://codepen.io/io_oti/">
    <img src="https://img.shields.io/badge/-Codepen-ffffff?logo=codepen&logoColor=000000&style=for-the-badge" alt="Codepen" />
  </a>
</p>

<hr>

<!-- Stats -->
<h3>📈 Stats</h3>

<p align=center>
  <a href="https://github.com/Ashutosh00710/github-readme-activity-graph">
    <img
      src="https://github-readme-activity-graph.vercel.app/graph?username=io-oti&theme=tokyo-night&color=539bf5&line=539bf5&bg_color=20232a&hide_border=true" />
  </a>
  <div align=center>
    <a href="https://github.com/anuraghazra/github-readme-stats">
      <img align="left" height=160
        src="https://github-readme-stats.vercel.app/api?username=io-oti&theme=blue_navy&title_color=539bf5&text_color=539bf5&bg_color=20232a&hide_border=true" />
    </a>
    <a href="https://github.com/anuraghazra/github-readme-stats">
      <img align="right" height=160
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=io-oti&theme=blue_navy&title_color=539bf5&text_color=539bf5&bg_color=20232a&langs_count=3&hide_border=true&size_weight=0.5&count_weight=0.5" />
    </a>
  </div>
</p>
```
