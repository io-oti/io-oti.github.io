---
author: Io_oTI
date: 2024-07-23
publish: false
tag: 'mac'
title: 'macOS'
---

# macOS

## Homebrew

安装命令（需要管理员权限），使用其他镜像源安装可以直接下载脚本修改资源链接并运行脚本。

```bash
# Shell 脚本安装 Homebrew：
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/install.sh)"

# Shell 脚本卸载 Homebrew：
/bin/bash -c "$(curl -fsSL https://cdn.jsdelivr.net/gh/ineo6/homebrew-install/uninstall.sh)"
```

基本用法：

```bash
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

### Homebrew 替换源

华中科技大学开源镜像站： https://mirrors.hust.edu.cn/

参考链接：https://www.cnblogs.com/joyce33/p/13376752.html

- **\*** 替换 brew（源代码仓库）：

```bash
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
```

- **\*** 替换 homebrew-core（Homebrew 核心源）：

```bash
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
```

- 替换 homebrew-cask（提供 macos 应用和大型二进制文件的安装） ：

```bash
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git
```

- 替换 homebrew-bottles （预编译二进制软件包）：
  首先要先区分你的 mac 用哪种终端工具，如果是 bash ，则执行：

```bash
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

若是 zsh ，则执行：

```zsh
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

### 问题列表

- Failed to connect to api.github.com port 443: Operation timed out

```plaintext
1. 检查是否能接入Github：ping api.github.com
2. 可以修改 hosts 记录，添加 api.github.com 的 IP 记录。
```

## ZSH

### 切换 zsh

```bash
# 查看当前 shell
echo $0

# 查看系统 shell
cat /etc/shells

# 切换 zsh (重启 iTerm 2)
chsh -s /bin/zsh
```

### oh-my-zsh

#### 安装 oh-my-zsh

```bash
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

#### 安装 powerlevel10k

1. Clone the repository:

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Users in China can use the official mirror on gitee.com for faster download.
中国用户可以使用 gitee.com 上的官方镜像加速下载.

```bash
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. `Set ZSH_THEME="powerlevel10k/powerlevel10k" in ~/.zshrc.`

#### 导入主题色

```bash
# Import all color schemes
tools/import-scheme.sh schemes/*

# Import all color schemes (verbose mode)
tools/import-scheme.sh -v schemes/*

# Import specific color schemes (quotations are needed for schemes with spaces in name)
tools/import-scheme.sh 'schemes/SpaceGray Eighties.itermcolors' # by file path
tools/import-scheme.sh 'SpaceGray Eighties'                     # by scheme name
tools/import-scheme.sh Molokai 'SpaceGray Eighties'             # import multiple
```

#### 安装 zsh-syntax-highlighting

To activate the syntax highlighting, add the following at the end of your .zshrc:

```bash
  source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

If you receive "highlighters directory not found" error message,
you may need to add the following to your .zshenv:

```bash
  export ZSH_HIGHLIGHT_HIGHLIGHTERS_DIR=/usr/local/share/zsh-syntax-highlighting/highlighters
```

## NVM

```bash
# 安装 NVM，使用 NVM 管理 NodeJS
brew install nvm

# 列出可安装的 Node 版本
nvm ls-remote

# 安装指定版本的 Node
nvm install <version>

# 列出已安装的 Node 版本
nvm ls

# 切换指定版本的 Node
nvm use <version>
```

## tree

安装 `brew insatll tree`

```bash
# 帮助命令
tree —help

# 打印 src 目录
tree [src] -L 2 --dirsfirst

# usage
usage: tree [-acdfghilnpqrstuvxACDFJQNSUX] [-H baseHREF] [-T title ]
        [-L level [-R]] [-P pattern] [-I pattern] [-o filename] [--version]
        [--help] [--inodes] [--device] [--noreport] [--nolinks] [--dirsfirst]
        [--charset charset] [--filelimit[=]#] [--si] [--timefmt[=]<f>]
        [--sort[=]<name>] [--matchdirs] [--ignore-case] [--fromfile] [--]
        [<directory list>]
  ------- Listing options -------
  -a            All files are listed.
  -d            List directories only.
  -l            Follow symbolic links like directories.
  -f            Print the full path prefix for each file.
  -x            Stay on current filesystem only.
  -L level      Descend only level directories deep.
  -R            Rerun tree when max dir level reached.
  -P pattern    List only those files that match the pattern given.
  -I pattern    Do not list files that match the given pattern.
  --ignore-case Ignore case when pattern matching.
  --matchdirs   Include directory names in -P pattern matching.
  --noreport    Turn off file/directory count at end of tree listing.
  --charset X   Use charset X for terminal/HTML and indentation line output.
  --filelimit # Do not descend dirs with more than # files in them.
  --timefmt <f> Print and format time according to the format <f>.
  -o filename   Output to file instead of stdout.
  ------- File options -------
  -q            Print non-printable characters as '?'.
  -N            Print non-printable characters as is.
  -Q            Quote filenames with double quotes.
  -p            Print the protections for each file.
  -u            Displays file owner or UID number.
  -g            Displays file group owner or GID number.
  -s            Print the size in bytes of each file.
  -h            Print the size in a more human readable way.
  --si          Like -h, but use in SI units (powers of 1000).
  -D            Print the date of last modification or (-c) status change.
  -F            Appends '/', '=', '*', '@', '|' or '>' as per ls -F.
  --inodes      Print inode number of each file.
  --device      Print device ID number to which each file belongs.
  ------- Sorting options -------
  -v            Sort files alphanumerically by version.
  -t            Sort files by last modification time.
  -c            Sort files by last status change time.
  -U            Leave files unsorted.
  -r            Reverse the order of the sort.
  --dirsfirst   List directories before files (-U disables).
  --sort X      Select sort: name,version,size,mtime,ctime.
  ------- Graphics options -------
  -i            Don't print indentation lines.
  -A            Print ANSI lines graphic indentation lines.
  -S            Print with CP437 (console) graphics indentation lines.
  -n            Turn colorization off always (-C overrides).
  -C            Turn colorization on always.
  ------- XML/HTML/JSON options -------
  -X            Prints out an XML representation of the tree.
  -J            Prints out an JSON representation of the tree.
  -H baseHREF   Prints out HTML format with baseHREF as top directory.
  -T string     Replace the default HTML title and H1 header with string.
  --nolinks     Turn off hyperlinks in HTML output.
  ------- Input options -------
  --fromfile    Reads paths from files (.=stdin)
  ------- Miscellaneous options -------
  --version     Print version and exit.
  --help        Print usage and this help message and exit.
  --            Options processing terminator.
```
