---
author: Io_oTI
date: 2023-10-23
publish: true
tag: 'windows'
title: 'Windows 构建前端开发环境'
---

# Windows 构建前端开发环境

::: tip
以下教程仅运行于 Windows 10 以上版本的 Windows 操作系统。
:::

## 安装 WSL

在管理员模式下打开 PowerShell 或 Windows 命令提示符，方法是右键单击并选择“以管理员身份运行”，并输入以下命令：

```Powershell
# 查看可用发行版列表
wsl --list --online

# 安装 WSL ，指定可用发行版
wsl --install -d [DistroName]
```

--install 命令执行以下操作：

- 启用可选的 WSL 和虚拟机平台组件
- 下载并安装最新 Linux 内核
- 将 WSL 2 设置为默认值
- 下载并安装 Ubuntu Linux 发行版（可能需要重新启动）

在此安装过程中，你将需要重启计算机。

::: warning
若要卸载 WSL，请参阅[卸载旧版 WSL](https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting#uninstall-legacy-version-of-wsl)或[注销或卸载 Linux 发行版](https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands#unregister-or-uninstall-a-linux-distribution)。
:::

### [WSL 中的高级设置配置](https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config)

使用 WSL 会出现 vmmem 程序内存占用过高的情况，使用 .wslconfig 为 WSL 上运行的所有已安装的发行版配置全局设置，下面的 `.wslconfig` 示例文件演示了一些可用的配置选项。 在此示例中，文件路径为 `C:\Users\<UserName>\.wslconfig`。

```shell
# Settings apply across all Linux distros running on WSL 2
[wsl2]

# Limits VM memory to use no more than 2 GB,
# this can be set as whole numbers using GB or MB
memory=2GB
```

### 设置 Linux 用户名和密码

使用 WSL 安装 Linux 发行版的过程完成后，使用“开始”菜单打开该发行版（默认情况下为 Ubuntu）。 系统将要求你为 Linux 发行版创建“用户名”和“密码”。

- 此用户名和密码特定于安装的每个单独的 Linux 分发版，与 Windows 用户名无关。

- 请注意，输入密码时，屏幕上不会显示任何内容。 这称为盲人键入。 你不会看到你正在键入的内容，这是完全正常的。

- 创建用户名和密码后，该帐户将是分发版的默认用户，并将在启动时自动登录。

- 此帐户将被视为 Linux 管理员，能够运行 sudo (Super User Do) 管理命令。

- 在 WSL 上运行的每个 Linux 发行版都有其自己的 Linux 用户帐户和密码。 每当添加分发版、重新安装或重置时，都必须配置一个 Linux 用户帐户。

若要更改或重置密码，请打开 Linux 发行版并输入命令：passwd。 系统会要求你输入当前密码，然后要求输入新密码，之后再确认新密码。

如果忘记了 Linux 分发版的密码

1. 请打开 PowerShell，并使用以下命令进入默认 WSL 分发版的根目录：`wsl -u root`。

   > 如果需要在非默认分发版中更新忘记的密码，请使用命令：`wsl -d Debian -u root`，并将 Debian 替换为目标分发版的名称。

2. 在 PowerShell 内的根级别打开 WSL 发行版后，可使用此命令更新密码：`passwd <username>`，其中 `<username>` 是发行版中帐户的用户名，而你忘记了它的密码。

3. 系统将提示你输入新的 UNIX 密码，然后确认该密码。 在被告知密码已成功更新后，请使用以下命令在 PowerShell 内关闭 WSL：exit。

修改以下配置使用 sudo 时可以不用输入密码。

```shell{4}
sudo vi /etc/sudoers

# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) NOPASSWD:ALL
```

### 更新和升级包

Windows 不会自动更新或升级 Linux 分发版。 大多数 Linux 用户往往倾向于自行控制此任务。建议使用发行版的首选包管理器定期更新和升级包。 对于 Ubuntu 或 Debian，请使用以下命令：

```Bash
sudo apt update && sudo apt upgrade
```

### 使用 ZSH

查看当前系统是否已安装 zsh ，如已安装则可以省略安装步骤，切换到 zsh 使用即可。

```shell
# 查看系统已有 shell
cat /etc/shells

# 安装 ZSH
sudo apt install zsh -y

# 验证安装
zsh --version

# 切换 zsh (重启终端)
chsh -s /usr/bin/zsh
```

#### 安装 oh-my-zsh

::: code-group

```shell[使用 curl 安装]
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```shell[使用 wget 安装]
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

:::

#### 安装 oh-my-zsh 插件

下载 zsh-autosuggestions 插件：

```shell
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

下载 zsh-syntax-highlighting 插件：

```shell
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

下载好 `zsh-autosuggestions` 和 `zsh-syntax-highlighting` 插件后，还需要将插件添加至 `.zshrc` 配置文件:

```shell{5-6}
# 添加 zsh-autosuggestions, zsh-syntax-highlighting 和 zsh-z 插件
# oh-my-zsh 内置了 git 和 z 插件，所以无需安装，直接配置就可使用
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
  z
)
```

最后使用命令让 `.zshrc` 配置文件生效：

```shell
source ~/.zshrc
```

#### 安装 `powerlevel10k` 主题

中国用户可以使用 gitee 上的官方镜像加速下载。

::: code-group

```shell[Github]
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

```shell[Gitee]
git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

:::

修改 `oh-my-zsh` 的配置文件，将主题设置为 `powerlevel10k`：

```shell{4}
code ~/.zshrc

# 将 "ZSH_THEME=robbyrussell" 修改为:
ZSH_THEME="powerlevel10k/powerlevel10k"

# Enable instant prompt and don't print warnings when detecting console output
typeset -g POWERLEVEL9K_INSTANT_PROMPT=quiet

# The list of segments shown on the left. Fill it with the most important segments.
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

[MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)

[MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)

[MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)

[MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

下载好字体以后可以直接双击字体文件安装，然后修改 `visual studio code` 的配置，将字体添加到配置项：

```json{2}
{
  "editor.fontFamily": "MesloLGS NF",
}
```

现在你可以运行以下命令配置 `powerlevel10k` 主题:

```shell
p10k configure
```

### 安装 nvm、node.js 和 npm

除了选择在 Windows 还是在 WSL 上安装，安装 Node.js 时还要作出其他选择。 建议使用版本管理器，因为版本变更速度非常快。 你可能需要根据所使用的不同项目的需求在多个版本的 Node.js 之间进行切换。

::: warning
在安装版本管理器之前，始终建议从操作系统中删除 Node.js 或 npm 的任何现有安装，因为不同的安装类型可能会导致出现奇怪和混淆的冲突。 例如，可以使用 Ubuntu 的 `apt-get` 命令安装的 Node 版本当前已过时。 有关删除先前安装的帮助，请参阅[如何从 ubuntu 中删除 node.js](https://askubuntu.com/questions/786015/how-to-remove-nodejs-from-ubuntu-16-04)
:::

1. 打开 Ubuntu 命令行（或所选的发行版）。

2. 使用以下命令安装 cURL（用于在命令行中从 Internet 下载内容的工具）：

   ```shell
   sudo apt-get install curl
   ```

3. 使用以下命令安装 nvm：

   ```shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
   ```

4. 若要验证安装，请输入：`command -v nvm`。此命令应返回“nvm”，如果你收到“找不到命令”或根本没有响应，请关闭当前终端，将其重新打开，然后重试。

5. 列出当前安装的 Node 版本（此时应为无）：`nvm ls`

6. 安装 Node.js 的当前版本和稳定的 LTS 版本。 后面的步骤将介绍如何使用 nvm 命令在 Node.js 的活动版本之间切换。
   - 安装 Node.js 的当前稳定的 LTS 版本（推荐用于生产应用程序）：

     ```shell
     nvm install --lts
     ```

   - 安装 Node.js 的当前版本（用于测试最新的 Node.js 功能和改进，但更容易出现问题）：

     ```shell
     nvm install node
     ```

7. 列出安装的 Node 版本：`nvm ls`。现在应会看到刚安装的两个版本。

8. 使用以下命令验证 Node.js 是否已安装，以及是否为当前默认版本：`node --version`。 然后使用以下命令验证是否也有 npm：`npm --version`（还可以使用 `which node` 或 `which npm` 来查看用于默认版本的路径）。

9. 若要更改要用于项目的 Node.js 版本，请创建新的项目目录 `mkdir NodeTest`，输入目录 cd NodeTest，然后输入 `nvm use node` 切换到当前版本，或输入 `nvm use --lts` 切换到 LTS 版本。 你还可以使用已安装的任何其他版本的特定数量，如 `nvm use v8.2.1`。 （若要列出 Node.js 的所有可用版本，请使用以下命令：`nvm ls-remote`）。

   如果要使用 NVM 安装 Node.js 和 NPM，则不需要使用 SUDO 命令来安装新包。

#### 使用 @antfu/ni

ni 可以简化包管理器使用命令，并始终使用正确的包管理器。

```shell
npm i -g @antfu/ni
```

文档：[@antfu/ni](https://www.npmjs.com/package/@antfu/ni)

阅读：[尤雨溪推荐神器 ni ，能替代 npm/yarn/pnpm ？简单好用！源码揭秘！](https://segmentfault.com/a/1190000040937835#item-3-1)

### 问题

#### 1. Ubuntu 文件夹背景高亮

其实很简单，drwxrwxrwx 权限中如果其它组权限拥有写入权限，系统默认这是一个高风险
目录，因为任何人都可以该目录进行写入操作，当然也包括黑客，所以将它显示为醒目的绿
色背景以警示操作者。表示将 PYCR 文件夹下所有的文件权限改为 除自己和所在群组外其
他用户不能写入。

```shell
chmod -R 775 PYCR/
```

#### 2. 通过局域网访问 wsl 服务

通过netsh命令添加网络代理

```powershell
netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=xxx.xxx.xxx.xxx
```

查看所有代理状态

```powershell
netsh interface portproxy show all
```

删除代理

```powershell
netsh interface portproxy delete v4tov4 listenaddress=127.0.0.1 listenport=8080
```

参考：[Netsh 命令语法、上下文和格式](https://learn.microsoft.com/zh-cn/windows-server/networking/technologies/netsh/netsh-contexts)

## 安装 Visual Studio Code

进入 [Visual Studio Code](https://code.visualstudio.com/) 官网下载并安装，具体步骤略。

### 推荐的扩展

- [WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) 扩展允许你打开一个连接到 WSL 的远程窗口，使你在 WSL 中使用 VS Code，就像在 Windows 中使用一样。
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) 增强 Git 并释放存储库中未开发的知识，以更好地理解、编写和审查代码。

## 参考

- [设置 WSL 开发环境](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment)
- [如何使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)
- [在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js](https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl)
