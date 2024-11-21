---
author: Io_oTI
date: 2024-07-12
draft: false
tag: 'node'
title: 'NPM'
---

# NPM

NPM 是 JavaScript 运行时环境 Node.js 标准的软件包管理器。

主页：[npmjs](https://www.npmjs.com/)

文档：[npm Docs](https://docs.npmjs.com/)

## 配置

### 使用命令配置 npm

内置全局镜像：[https://registry.npmjs.org](https://registry.npmjs.org)

淘宝镜像源：[https://registry.npmmirror.com](https://registry.npmmirror.com/)

腾讯镜像源：[http://mirrors.cloud.tencent.com/npm/](http://mirrors.cloud.tencent.com/npm/)

华为云镜像源：[https://mirrors.huaweicloud.com/repository/npm/](https://mirrors.huaweicloud.com/repository/npm/)

使用以下命令可将 registry 配置为淘宝镜像源：

```bash
# 显示所有配置设置。使用-l也可以显示默认值。使用--json以json格式显示设置。
$ npm config list

# 配置 npm 的默认镜像源
$ npm config set registry=https://registry.npmmirror.com

# 从所有配置文件中删除指定的密钥。
$ npm config delete <key | [key, ...]>
```

### 使用 npmrc 文件配置 npm

文档: [npmrc | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc)

`npmrc` 是 npm 的配置文件。npm 可以从命令行、环境变量和 `npmrc` 文件中获取其配置设置。`npm config` 命令可用于更新和编辑用户和全局 `npmrc` 文件的内容。

所有 npm 配置文件都是 ini 格式的 key = value 参数列表。可以使用 `${VARIABLE_NAME}` 替换环境变量。例如：

```ini
# 使用系统环境变量
prefix = ${HOME}/.npm-packages

# 配置 npm 的默认镜像源
registry = "https://registry.npmmirror.com"
```

npm 获取配置顺序（降序）：

- 每个项目的配置文件 （/path/to/my/project/.npmrc）
- 每用户配置文件 （~/.npmrc）
- 全局配置文件 （$PREFIX/etc/npmrc）
- npm 内置配置文件 （/path/to/npm/npmrc）

## 命令

文档: [CLI Commands | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v9/commands)

使用 help 命令查看所有可用命令：

```bash
$ npm help
```

### 备忘录

```bash
# 查看已安装软件包
$ npm ls <pkg-name>

# 查看全局已安装软件包 - 列出第0层
$ npm ls -g --depth 0

# 搜索软件包 - 指定镜像源
$ npm search <pkg-name> --registry=https://registry.npmmirror.com

# 查看软件包注册表信息
$ npm viwe <pkg-name>

# 安装软件包 - 指定镜像源
$ npm install <pkg-name> --registry=https://registry.npmmirror.com

# 卸载软件包
$ npm uninstall <pkg-name>

# 忽略依赖安装
$ npm install phantomjs-prebuilt@2.1.14 --ignore-scripts

# 重置缓存运行
$ npm start -- --reset-cache

# 强制清除缓存
$ npm cache clean --force

# 重新构建软件包
$ npm rebuild
```

## Npx

文档: [npx | npm Docs (npmjs.com)](https://docs.npmjs.com/cli/v9/commands/npx)

从本地或远程 npm 包运行命令。此命令允许您从 npm 包（本地安装或远程获取）运行任意命令，上下文与通过运行 类似 npm run 。
