# Windows 搭建前端开发环境

::: tip
以下教程仅运行于 Windows 10 以上版本的 Windows 操作系统。
:::

## 安装 WSL

在管理员模式下打开 PowerShell 或 Windows 命令提示符，方法是右键单击并选择“以管理员身份运行”，并输入以下命令：

```Powershell
wsl --install
```

--install 命令执行以下操作：

- 启用可选的 WSL 和虚拟机平台组件
- 下载并安装最新 Linux 内核
- 将 WSL 2 设置为默认值
- 下载并安装 Ubuntu Linux 发行版（可能需要重新启动）

在此安装过程中，你将需要重启计算机。

::: tip
上述命令仅在完全未安装 WSL 时才有效，如果运行 `wsl --install` 并查看 WSL 帮助文本，请尝试运行 `wsl --list --online` 以查看可用发行版列表并运行 `wsl --install -d <DistroName>` 以安装发行版。 若要卸载 WSL，请参阅[卸载旧版 WSL](https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting#uninstall-legacy-version-of-wsl) 或[注销或卸载 Linux 发行版](https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands#unregister-or-uninstall-a-linux-distribution)。
:::

### 设置 Linux 用户名和密码

使用 WSL 安装 Linux 发行版的过程完成后，使用“开始”菜单打开该发行版（默认情况下为 Ubuntu）。 系统将要求你为 Linux 发行版创建“用户名”和“密码”。

- 此用户名和密码特定于安装的每个单独的 Linux 分发版，与 Windows 用户名无关。
- 请注意，输入密码时，屏幕上不会显示任何内容。 这称为盲人键入。 你不会看到你正在键入的内容，这是完全正常的。
- 创建用户名和密码后，该帐户将是分发版的默认用户，并将在启动时自动登录。
- 此帐户将被视为 Linux 管理员，能够运行 sudo (Super User Do) 管理命令。
- 在 WSL 上运行的每个 Linux 发行版都有其自己的 Linux 用户帐户和密码。 每当添加分发版、重新安装或重置时，都必须配置一个 Linux 用户帐户。

### 更新和升级包

Windows 不会自动更新或升级 Linux 分发版。 大多数 Linux 用户往往倾向于自行控制此任务。建议使用发行版的首选包管理器定期更新和升级包。 对于 Ubuntu 或 Debian，请使用以下命令：

```Bash
$ sudo apt update && sudo apt upgrade
```

## 安装 Nvm、Node.js 和 Npm

除了选择在 Windows 还是在 WSL 上安装，安装 Node.js 时还要作出其他选择。 建议使用版本管理器，因为版本变更速度非常快。 你可能需要根据所使用的不同项目的需求在多个版本的 Node.js 之间进行切换。

::: warning
在安装版本管理器之前，始终建议从操作系统中删除 Node.js 或 npm 的任何现有安装，因为不同的安装类型可能会导致出现奇怪和混淆的冲突。 例如，可以使用 Ubuntu 的 `apt-get` 命令安装的 Node 版本当前已过时。 有关删除先前安装的帮助，请参阅[如何从 ubuntu 中删除 node.js](https://askubuntu.com/questions/786015/how-to-remove-nodejs-from-ubuntu-16-04)
:::

1. 打开 Ubuntu 命令行（或所选的发行版）。
2. 使用以下命令安装 cURL（用于在命令行中从 Internet 下载内容的工具）：`sudo apt-get install curl`
3. 使用以下命令安装 nvm：`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash`
4. 若要验证安装，请输入：`command -v nvm`。此命令应返回“nvm”，如果你收到“找不到命令”或根本没有响应，请关闭当前终端，将其重新打开，然后重试。
5. 列出当前安装的 Node 版本（此时应为无）：`nvm ls`
6. 安装 Node.js 的当前版本和稳定的 LTS 版本。 后面的步骤将介绍如何使用 nvm 命令在 Node.js 的活动版本之间切换。
   - 安装 Node.js 的当前稳定的 LTS 版本（推荐用于生产应用程序）：`nvm install --lts`
   - 安装 Node.js 的当前版本（用于测试最新的 Node.js 功能和改进，但更容易出现问题）：`nvm install node`
7. 列出安装的 Node 版本：`nvm ls`。现在应会看到刚安装的两个版本。
8. 使用以下命令验证 Node.js 是否已安装，以及是否为当前默认版本：`node --version`。 然后使用以下命令验证是否也有 npm：`npm --version`（还可以使用 `which node` 或 `which npm` 来查看用于默认版本的路径）。
9. 若要更改要用于项目的 Node.js 版本，请创建新的项目目录 `mkdir NodeTest`，输入目录 cd NodeTest，然后输入 `nvm use node` 切换到当前版本，或输入 `nvm use --lts` 切换到 LTS 版本。 你还可以使用已安装的任何其他版本的特定数量，如 `nvm use v8.2.1`。 （若要列出 Node.js 的所有可用版本，请使用以下命令：`nvm ls-remote`）。

如果要使用 NVM 安装 Node.js 和 NPM，则不需要使用 SUDO 命令来安装新包。

## 安装 Visual Studio Code

### 推荐的扩展

- [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 扩展允许你打开一个连接到 WSL 的远程窗口，使你在 WSL 中使用 VS Code，就像在 Windows 中使用一样。
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 增强 Git 并释放存储库中未开发的知识，以更好地理解、编写和审查代码。

## 配置 Ubuntu

```bash
# 查看当前 shell
echo $0

# 查看系统 shell
cat /etc/shells

# 切换 zsh (重启终端)
chsh -s /usr/bin/zsh
```

### 安装 ZSH

安装 ZSH 前，需要先更新 Ubuntu 的包列表：

```shell
sudo apt update
```

接下来，安装 ZSH

```shell
sudo apt install zsh -y
```

验证安装

```shell
zsh --version
```

更换到 ZSH

```shell
chsh -s /usr/bin/zsh
```

### 安装 oh-my-zsh

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# 或者
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

#### 安装 `powerlevel10k` 主题

中国用户可以使用 gitee 上的官方镜像加速下载.

```shell
# github
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# gitee
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

修改 `oh-my-zsh` 的配置文件，将主题设置为 `powerlevel10k`：

```shell
code ~/.zshrc

# 将 "ZSH_THEME=robbyrussell" 修改为:
ZSH_THEME="powerlevel10k/powerlevel10k"
```

#### 安装字体

缺少字体终端可能会显示乱码，可以在 Windows 系统安装 `powerlevel10k` 推荐字体解决此问题：
[MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
[MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
[MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
[MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)


下载好字体以后可以直接双击字体文件安装，然后修改 `visual studio code` 的配置，将字体添加到配置项：

```json
{
  "editor.fontFamily": "MesloLGS NF",
}
```

运行以下命令配置 `powerlevel10k` 主题:
```shell
p10k configure
```

#### 安装插件

```shell
# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

修改 `.zshrc` 配置文件:

```shell
# 添加 zsh-autosuggestions, zsh-syntax-highlighting 和 zsh-z 插件
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  z
)

# Enable instant prompt and don't print warnings when detecting console output
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet
```

应用 `.zshrc` 文件的配置：

```shell
source ~/.zshrc
```

### tree

安装 tree 工具:

```shell
sudo apt install tree
```

#### 常用命令

```shell
# 打印 src 目录
tree [src] -L 2 --dirsfirst
```

帮助文档：

```shell
# 查看帮助命令
tree —help

# 输出：
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

## 参考

- [设置 WSL 开发环境](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment)
- [如何使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)
- [在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js](https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl)
