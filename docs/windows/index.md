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

## 参考

- [设置 WSL 开发环境](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment)
- [如何使用 WSL 在 Windows 上安装 Linux](https://learn.microsoft.com/zh-cn/windows/wsl/install)
- [在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js](https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl)
