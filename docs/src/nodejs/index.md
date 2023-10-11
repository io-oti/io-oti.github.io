# NPM


Node Package Manager 是 Node.js 标准的软件包管理器。


## 配置


- npmmirror 镜像源：[https://registry.npmmirror.com](https://registry.npmmirror.com/)


```bash
# 配置 npmmirror 镜像源
npm config set registry=https://registry.npmmirror.com

```


### npmrc 文件


// TODO: [config | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v9/using-npm/config#npmrc-files)


## 命令


文档: [CLI Commands | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v9/commands)


### Cheatsheets


```bash
# 查看已安装程序包
npm ls [pkg name]


# 查看全局已安装程序包 - 列出第0层
npm ls -g --depth 0


# 搜索程序包 - 指定镜像源
npm search [pkg name] --registry=https://registry.npmmirror.com


# 查看程序包注册表信息
npm viwe [pkg name]


# 安装程序包 - 指定镜像源
npm install [pkg name] --registry=https://registry.npmmirror.com


# 卸载程序包
npm uninstall [pkg name]


# 忽略依赖安装
npm install phantomjs-prebuilt@2.1.14 --ignore-scripts


# 重置缓存运行
npm start -- --reset-cache


# 强制清除缓存
npm cache clean --force


# 重新构建程序包
npm rebuild
```


## Npx


// TODO: [npx | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v9/commands/npx)


## 软件包


### 开发依赖


#### postcss


一个用JavaScript转换CSS的工具。


#### sass


Sass 是世界上最成熟、稳定、强大的专业级 CSS 扩展语言。


#### less


一个基于 Javascript 的 CSS 预处理器。



### 依赖


#### axios


一个基于 Promise 的 HTTP 请求库。


#### flyio


一个基于 promise 的 HTTP 请求库。


#### superagent


小型渐进式客户端HTTP请求库和具有相同API的Node.js模块，支持许多高级HTTP客户端功能。


#### moment


用于解析、验证、操作和格式化日期的JavaScript日期库。


#### dayjs


一个轻量的处理时间和日期的 JavaScript 库。


```
library
├── Framework
│   ├── Meteor.js
│   ├── Qwik
│   ├── Ionic
│   └── Webix
├── validate forms
│   └── Parsley
├── tools
│   ├── Ramda       一个很重要的库，提供了许多有用的方法，每个 JavaScript 程序员都应该掌握这个工具
│   ├── Lodash      一个一致性、模块化、高性能的 JavaScript 实用工具库
│   ├── jQuery      封装了各种dom/事件操作, 设计思想值得研究借鉴
│   ├── Zepto      jquery 的轻量级版本, 适合移动端操作
│   ├── fastclick    一个简单易用的库，它消除了移动端浏览器上的点击和触发一个 click 事件之间的 300ms 的延迟。
│   ├── Underscore.js
│   ├── qs        一个 url 参数转化 (parse和stringify)的轻量级 js 库
│   ├── Knip       Kinp 可以在 JavaScript 和 TypeScript 项目中寻找未使用的文件、依赖和导出，并移除掉
│   └── big       一个小型，快速的JavaScript库，用于任意精度的十进制算术运算
├── chart
│   ├── Chart.js
│   └── ECharts
├── richtext
│   └── wangEditor
├── excel
│   └── xlsx
├── Animation
│   ├── Anime.js    一个 JavaScript 动画库
│   ├── Granim.js
│   ├── Choreographer.js
│   └── Animate On Scroll
├── 3D
│   ├── D3.js
│   └── Three.js
├── obfuscator
│   └── javascript-obfuscator
├── Popper.js
├── Masonry
├── Mocha
├── Cypress
├── Puppeteer
└── ...
```


## 问题集


### 内网环境从淘宝镜像下载依赖问题


1. 删除 package.json 文件中的 node-sass 依赖和 image-webpack-loader 依赖。
2. 将 webpack.base.conf.js 文件中 url-loader 部分注释掉的内容放开，将原本放开的 loaders 注释掉。
3. 修改镜像源，执行 `npm config set registry=http://xxx.com.cn/repository/npm/` 。
4. 第 3 步 执行完后执行 `npm install` 。
5. 第 4 步 执行完后执行 `npm install node-sass@4.10.0 --sass-binary-site=http://30.16.105.146/mirrors/node-sass` 。
6. 执行 `npm run dev` 。

