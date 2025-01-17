---
author: Io_oTI
date: 2024-10-29
publish: true
tag: 'windows'
title: 'Microsoft PowerToys'
---

# {{ $frontmatter.title }}

Microsoft PowerToys 是一组实用程序，可供高级用户调整和简化其 `Windows` 体验，从而提高工作效率。

## 键盘管理器

### 按键 - 重新映射键

| 选择         | 发送         |
| ------------ | ------------ |
| `Ctrl(Left)` | `Alt(Left)`  |
| `Alt(Left)`  | `Ctrl(Left)` |

#### 问题

- [微信导致映射键失效 - Github Issues 21877](https://github.com/microsoft/PowerToys/issues/21877#issuecomment-1876571225)
  可通过添加 `F22` 到 `Disable` 映射键来解决。

### 快捷键 - 重新映射快捷键

| 选择                           | 发送                           |
| ------------------------------ | ------------------------------ |
| `Alt(Left)` + `Tab`            | `Ctrl(Left)` + `Tab`           |
| `Alt(Left)` + `Shift` + `Tab`  | `Ctrl(Left)` + `Shift` + `Tab` |
| `Ctrl(Left)` + `Tab`           | `Alt(Left)` + `Tab`            |
| `Ctrl(Left)` + `Shift` + `Tab` | `Alt(Left)` + `Shift` + `Tab`  |

## 参考

- [PowerToys 官方文档](https://docs.microsoft.com/zh-cn/windows/powertoys/)
- [关于 PowerToys](https://learn.microsoft.com/zh-cn/windows/powertoys/)
- [安装 PowerToys](https://docs.microsoft.com/en-us/windows/powertoys/install)
- [我的 PowerToys 设置](https://github.com/io-oti/oh-settings/tree/main/power-toys)
