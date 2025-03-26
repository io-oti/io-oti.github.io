---
author: Io_oTI
date: 2023-07-23
publish: true
tag: 'mac'
title: 'macOS 构建前端开发环境'
---

## Homebrew

安装命令（需要管理员权限），使用其他镜像源安装可以直接下载脚本修改资源链接并运行脚本。

```shell
# 使用 Shell 脚本安装 Homebrew：
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"

# 使用 Shell 脚本卸载 Homebrew：
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/uninstall.sh)"
```

<details>
  <summary>基本命令：</summary>

  ```shell
  # 查询可安装软件
  brew search [formula]

  # 安装软件
  brew install [formula]

  # 卸载软件
  brew uninstall [formula]

  # 升级软件
  brew upgrade [formula]

  # 查看软件信息
  brew info [formula]

  # 查看软件依赖包
  brew deps [formula]

  # 列出已安装软件
  brew list

  # 更新 Homebrew
  brew update

  # 升级 Homebrew
  brew upgrade

  # 清理 Homebrew
  brew cleanup

  # 修复 Homebrew
  brew doctor

  # 查看 Homebrew 配置信息
  brew config

  # 安装 JDK8
  brew install --cask adoptopenjdk/openjdk/adoptopenjdk8

  # 安装本地包
  brew --cache -s libuv

  mv <local-file> "$(brew --cache -s <libuv>)"

  brew install <libuv>
  ```

</details>

### Homebrew 替换源

华中科技大学开源镜像站： [https://mirrors.hust.edu.cn/](https://mirrors.hust.edu.cn/)

参考链接：[https://www.cnblogs.com/joyce33/p/13376752.html](https://www.cnblogs.com/joyce33/p/13376752.html)

**\*** 替换 brew（源代码仓库）：

```shell
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
```

**\*** 替换 homebrew-core（Homebrew 核心源）：

```shell
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
```

替换 homebrew-cask（提供 macos 应用和大型二进制文件的安装） ：

```shell
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git
```

替换 homebrew-bottles （预编译二进制软件包）：
首先要先区分你的 mac 用哪种终端工具，如果是 bash ，则执行：

```shell
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

若是 zsh ，则执行：

```zsh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

### 问题记录

- `Failed to connect to api.github.com port 443: Operation timed out`
  1. 检查是否能接入Github：ping api.github.com
  2. 可以修改 hosts 记录，添加 api.github.com 的 IP 记录。

## 使用 ZSH

查看当前系统是否已安装 zsh ，如已安装则可以省略安装步骤，切换到 zsh 使用即可。

### 切换 zsh

```shell
# 查看当前 shell
echo $0

# 查看系统 shell
cat /etc/shells

# 切换 zsh (重启 iTerm 2)
chsh -s /bin/zsh
```

### 安装 oh-my-zsh

::: code-group

```shell [使用 curl 安装]
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```shell [使用 wget 安装]
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

:::

### 安装 oh-my-zsh 插件

下载 zsh-autosuggestions 插件：

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

下载 zsh-syntax-highlighting 插件：

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

下载好 `zsh-autosuggestions` 和 `zsh-syntax-highlighting` 插件后，还需要将插件添加至 `.zshrc` 配置文件:

```shell
# 添加 zsh-autosuggestions, zsh-syntax-highlighting 和 zsh-z 插件
# oh-my-zsh 内置了 git 和 z 插件，所以无需安装，直接配置就可使用
plugins=(
  git
  zsh-autosuggestions # [!code highlight:2]
  zsh-syntax-highlighting
  z
)
```

最后使用命令让 `.zshrc` 配置文件生效：

```shell
source ~/.zshrc
```

### 安装 powerlevel10k 主题

Clone the repository:

```shell
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Users in China can use the official mirror on gitee.com for faster download.
中国用户可以使用 gitee.com 上的官方镜像加速下载.

```shell
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

修改 `oh-my-zsh` 的配置文件，将主题设置为 `powerlevel10k`：

```shell
# 将 "ZSH_THEME=robbyrussell" 修改为:
ZSH_THEME="powerlevel10k/powerlevel10k" # [!code focus]

# Enable instant prompt and don't print warnings when detecting console output
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet

# The list of segments shown on the left. Fill it with the most important  segments.
typeset -g POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
  os_icon               # os identifier
  node_version          # node.js version
  dir                   # current directory
  # vcs                 # git status
  # prompt_char         # prompt symbol
)
```

当然，修改完 `.zshrc` 配置文件别忘了让它生效：

```shell
source ~/.zshrc
```

#### 安装字体

缺少字体终端中的文字和符号会显示乱码，可以在 Windows 系统安装 `powerlevel10k` 推荐字体以解决此问题：

- [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
- [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
- [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
- [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

下载好字体以后可以直接双击字体文件安装，然后修改 `visual studio code` 的配置，将字体添加到配置项：

```json
{
  "editor.fontFamily": "MesloLGS NF",
}
```

现在你可以运行以下命令配置 `powerlevel10k` 主题:

```shell
p10k configure
```

## 安装 nvm、node.js 和 npm

### 安装 NVM

::: warning
在安装版本管理器之前，始终建议从操作系统中删除 Node.js 或 npm 的任何现有安装，因为不同的安装类型可能会导致出现奇怪和混淆的冲突。
:::

```shell
# 安装 NVM，使用 NVM 管理 Node.js
brew install nvm

# 列出已安装的 Node.js 版本
nvm ls

# 列出可安装的 Node.js 版本
nvm ls-remote

# 安装指定版本的 Node.js
nvm install <version>

# 卸载指定版本的 Node.js
nvm uninstall <version>

# 切换指定版本的 Node.js
nvm use <version>

# 设置默认版本
nvm alias default <version>
```

### 使用 @antfu/ni

ni 可以简化包管理器使用命令，并始终使用正确的包管理器。

```shell
npm i -g @antfu/ni
```

文档：[@antfu/ni](https://www.npmjs.com/package/@antfu/ni)

阅读：[尤雨溪推荐神器 ni ，能替代 npm/yarn/pnpm ？简单好用！源码揭秘！](https://segmentfault.com/a/1190000040937835#item-3-1)

## 安装 Visual Studio Code

进入 [Visual Studio Code](https://code.visualstudio.com/) 官网下载并安装，具体步骤略。
