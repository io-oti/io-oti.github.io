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

```bash
npm i -g @antfu/ni
```

## 使用

### ni - install

```bash
ni [package]

# npm i [package]
# yarn add [package]
# pnpm add [package]
# bun add [package]
```

### nr - run

```bash
nr dev --port=3000

# npm run dev -- --port=3000
# yarn run dev --port=3000
# pnpm run dev --port=3000
# bun run dev --port=3000
```

### nu - upgrade

```bash
nu

# npm upgrade
# yarn upgrade (Yarn 1)
# yarn up (Yarn Berry)
# pnpm update
# bun update
```

### nun - uninstall

```bash
nun [package]

# npm uninstall [package]
# yarn remove [package]
# pnpm remove [package]
# bun remove [package]
```

## 参考

- [文档](https://github.com/antfu-collective/ni#readme)
- [@antfu/ni - gitHub](https://github.com/antfu-collective/ni)
- [@antfy/ni - npmjs](https://www.npmjs.com/package/@antfu/ni)
