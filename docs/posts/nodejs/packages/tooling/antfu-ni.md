---
{
  "author": "Io_oTI",
  "date": "2025-03-25",
  "publish": true,
  "tag": "nodejs",
  "title": "@antfu/ni",
}
---

ni 可以简化包管理器使用命令，并始终使用正确的包管理器。

## 安装

```sh
npm i -g @antfu/ni
```

## 使用

### ni - install

```sh
ni [package]

# npm i [package]
# yarn add [package]
# pnpm add [package]
# bun add [package]
```

### nun - uninstall

```sh
nun [package]

# npm uninstall [package]
# yarn remove [package]
# pnpm remove [package]
# bun remove [package]
```

### nr - run

```sh
nr dev --port=3000

# npm run dev -- --port=3000
# yarn run dev --port=3000
# pnpm run dev --port=3000
# bun run dev --port=3000
```

### nu - upgrade

```sh
nu

# npm upgrade
# yarn upgrade (Yarn 1)
# yarn up (Yarn Berry)
# pnpm update
# bun update
```

## 搭配 shell 食用

将以下配置写入的你的shell配置文件：

```sh
export NI_GLOBAL_AGENT="npm"
export NI_DEFAULT_AGENT="npm"

alias s="nr start"
alias d="nr dev"
alias b="nr build"
alias bw="nr build --watch"
alias nw="nr watch"

alias nt="nr typecheck"
alias lint="nr lint"
alias lintf="nr lint --fix"

alias t="nr test"
alias tu="nr test -u"
alias tw="nr test --watch"
alias re="nr release"
```

然后你就可以在命令行通过运行 `d` 来直接执行 `npm run dev` 命令了。

## 参考

- [文档](https://github.com/antfu-collective/ni#readme)
- [@antfu/ni - gitHub](https://github.com/antfu-collective/ni)
- [@antfy/ni - npmjs](https://www.npmjs.com/package/@antfu/ni)
