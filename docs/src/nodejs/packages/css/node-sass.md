# node-sass


Sass 是世界上最成熟、最稳定、最强大的专业级 CSS 扩展语言。

npmjs: [node-sass](https://www.npmjs.com/package/node-sass)


## Node.js 版本支持策略


1. 支持的 Node.js 版本因版本而异，请参阅 [版本页面](https://github.com/sass/node-sass/releases)。
2. 达到生命周期结束的 [Node.js 版本](https://github.com/nodejs/Release) 将在每个 Node.js 版本（主要、次要）中退出支持。
3. 我们将停止为不受支持的版本构建二进制文件，测试依赖项兼容性的中断，但我们不会阻止那些想要支持自己的人的安装。
4. 新 Node.js 版本需要少量的内部更改以及 CI 提供商（AppVeyor、GitHub Actions）的支持。我们将打开一个问题供感兴趣的各方订阅，并关闭其他问题。

以下是 node-sass 支持的最低和最高版本的快速指南:

| NodeJS  | Supported node-sass version | Node Module |
| ------- | --------------------------- | ----------- |
| Node 20 | 9.0+                        | 115         |
| Node 19 | 8.0+                        | 111         |
| Node 18 | 8.0+                        | 108         |
| Node 17 | 7.0+, <8.0                  | 102         |
| Node 16 | 6.0+                        | 93          |
| Node 15 | 5.0+, <7.0                  | 88          |
| Node 14 | 4.14+                       | 83          |
| Node 13 | 4.13+, <5.0                 | 79          |
| Node 12 | 4.12+                       | 72          |
| Node 11 | 4.10+, <5.0                 | 67          |
| Node 10 | 4.9+, <6.0                  | 64          |
| Node 8  | 4.5.3+, <5.0                | 57          |
| Node <8 | <5.0                        | <57         |


## 重建 node-sass 二进制文件


```bash
# 指定本地文件安装
$ npm install node-sass --sass-binary-path=[path]


# 指定文件链接安装
$ npm install node-sass --sass-binary-site=[url]


# NodeJS 12 指定文件链接安装 node-sass
$ npm install node-sass --sass-binary-site=https://github.com/sass/node-sass/releases/download/v4.12.0/win32-x64-72_binding.node
```
