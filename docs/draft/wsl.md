# WSL

`io_oti / Time.2023`

```powershell
# 切换 root 用户
ubuntu2004.exe config --default-user root

# 切换 io_oti 用户
ubuntu2004.exe config --default-user io_oti
```

---

## 安装 WSL

```powershell
# 查看 wsl
wsl -l

# 查看 wsl 版本
wsl -l -v

# 启用虚拟机功能
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# 下载 Linux 内核更新包
https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi


wsl --set-version Ubuntu-20.04 2
wsl --set-default-version 2
```

## 安装 ZSH

```bash
# 查看已安装 shell
cat /etc/shells

# 安装 Zsh
sudu apt install zsh

# 切换 Zsh
chsh -s /bin/zsh
```

## 安装 oh-my-zsh

```bash
# 安装 oh-my-zsh
wget --no-check-certificate https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh

# 国内镜像源
sh -c "$(curl -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh)"
```

### 安装 oh-my-zsh 插件

```bash
# autojump
git clone https://github.com/wting/autojump.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/autojump

# zsh-autosuggestions 命令行命令键入时的历史命令建议
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# zsh-syntax-highlighting 命令行语法高亮插件
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

## 安装字体

If you are running a Debian or Ubuntu based Linux distribution, there should be a package available to install the Powerline Fonts with the following command:

```bash
sudo apt-get install fonts-powerline

# clone
git clone https://github.com/powerline/fonts.git --depth=1

# install
cd fonts
./install.sh

# clean-up a bit
cd ..
rm -rf fonts
```

## 问题

### 1. ubuntu 文件夹背景高亮

其实很简单，drwxrwxrwx 权限中如果其它组权限拥有写入权限，系统默认这是一个高风险目录，因为任何人都可以该目录进行写入操作，当然也包括黑客，所以将它显示为醒目的绿色背景以警示操作者。表示将 PYCR 文件夹下所有的文件权限改为 除自己和所在群组外其他用户不能写入。

```bash
chmod -R 775 PYCR/
```
