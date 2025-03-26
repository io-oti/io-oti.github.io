---
author: Io_oTI
date: 2023-09-27
publish: true
tag: 'browser'
title: 'Google Chrome'
---

## Chrome DevTools

打开开发工具

| 操作               | Windows/Linux               | macOS                      |
| ------------------ | --------------------------- | -------------------------- |
| 打开上次使用的窗格 | `F12` 或 `Ctrl + Shift + I` | `⌘ + ⌥ + I`                |
| 打开“控制台”工具   | `Ctrl + Shift + J`          | `⌘ + ⌥ + J`                |
| 打开“元素”工具     | `Ctrl + Shift + C`          | `⌘ + ⇧ + C` 或 `⌘ + ⌥ + C` |

全局键盘快捷方式

| 操作           | Windows/Linux     | macOS                  |
| -------------- | ----------------- | ---------------------- |
| 显示“设置”     | `Shift+?` 或 `F1` | `⇧+?` 或 `Function+F1` |
| 聚焦于下一窗格 | `Ctrl + ]`        | `⌘ + ]`                |
| 聚焦于上一窗格 | `Ctrl + [`        | `⌘ + [`                |

### Sources

#### Snippets

为所有元素添加边框

```javascript
;[].forEach.call($$('*'), function (a) {
  a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
})
```

## 关闭浏览器的安全策略（前端跨域）

::: warning
以下命令需要替换中 `[]` 的内容，最好为 `--user-data-dir` 设置一个空的文件夹。
:::

::: code-group

```bash [macOS 终端]
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=[/Users/Username/browser]
```

```cmd [Windows 命令提示符]
start chrome --disable-web-security --user-data-dir=[D:\browser]
```

```powershell [Windows PowerShell]
Start-Process -FilePath "chrome" -ArgumentList "--disable-web-security --user-data-dir=[D:\browser]"
```

:::

### SameSite （v80+ 跨域不带 Cookie）

这是一个用来决定 Cookie 的可用网站范围的属性。它有三个值：

- Strict: 仅限于同站请求
- Lax: 同站请求，或者跨站的 GET 的会导致页面 URL 发生变化的导航行为，包括链接、GET 的 Form 提交。比如在 `http://www.def.com` 网站的页面中嵌入了一个链接 `http://www.abc.com` ，那么在用户点击此链接时发起的初始请求，会带上 `http://www.abc.com` 中设置为 Lax 的 Cookie。而那些设置为 Strict 的 Cookie 是不会带上的。这种跨站链接还包括像嵌入到邮件中的链接。
- None: 没有限制，同站及跨站请求中都会带上，与传统的方式一样。

在新的 Chrome 的 Privacy Sandbox 的策略中：

- 如果 Cookie 未设置 SameSite，那把其值默认为 Lax。
- 如果 Cookie 设置 SameSite=None，还需要同时设置 Secure，否则此 Cookie 会被浏览器拒绝。设为 Secure 之后，其它三方网站对我方网站资源的引用必须使用 HTTPS，否则还是不会带上此 Cookie，这也要求我方网站必须支持 HTTPS。

#### 禁用 SameSite

1. 在谷歌浏览器地址栏搜索 `chrome://flags`
2. 在 `Experiments` 页面搜索框中搜索 `SameSite by default cookies`
3. 修改 SameSite by default cookies 选项的值为 `Disabled`

### SameSite （v91+ 跨域不带 Cookie）

Chrome 91 禁用 SameSiteByDefaultCookies 与 CookiesWithoutSameSiteMustBeSecure

::: code-group

```bash [macOS 终端]
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure --user-data-dir=[/Users/Username/browser]
```

```cmd [Windows 命令提示符]
start chrome --disable-web-security --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure --user-data-dir=[D:\browser]
```

```cmd [Windows PowerShell]
Start-Process -FilePath "chrome" -ArgumentList "--disable-web-security --disable-features=SameSiteByDefaultCookies,CookiesWithoutSameSiteMustBeSecure --user-data-dir=[D:\browser]"
```

:::

## 参考

- [Chrome DevTools](https://developer.chrome.google.cn/docs/devtools?hl=zh-cn)
