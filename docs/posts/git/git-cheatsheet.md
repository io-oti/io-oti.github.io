---
author: Io_oTI
date: 2023-09-27
tag: 'git'
title: 'Git Cheapsheets'
---

# Git Cheapsheets

## 设置和配置

```bash
# 初始化新的 Git 存储库
git init

# 克隆并创建远程存储库的本地副本
git clone <url>

# 配置全局 Git 设置
git config --global <setting_name> <value>

# 为特定回购配置本地Git设置
git config --local <setting_name> <value>

# --------------------------------- Advanced -----------------------------------

# 显示 Git 配置设置的摘要
git config --list

# 为 Git 消息设置自定义文本编辑器
git config --global core.editor "<editor_command>"

# 创建 Git 命令别名
git config --global alias.<shortcut> <command>

# 启用 Git 输出的自动着色
git config --global color.ui auto

# 启用 Git 输出的自动着色
git config --global credential.helper 'cache --timeout=<seconds>'

# 配置 Git 以检测特定类型的空白错误
git config --global core.whitespace <options>

# 获取更新时自动修剪远程跟踪分支
git config --global fetch.prune true

# 为 Git 设置自定义差异工具
git config --global diff.tool <tool>

# 为 Git 设置自定义差异工具
git config --global merge.tool <tool>

# 使用自定义差异工具比较更改
git difftool

# 使用自定义合并工具解决合并冲突
git mergetool
```

## 文件操作

- .gitignore 只能忽略之前没有被 staged(缓存)的文件，如果已经 staged 纳入了版本管理中，再修改 .gitignore 是无效的。

```bash
# 显示工作树状态
git status

# 将文件添加到暂存区
git add <file(s)>

# 从工作树和临时区域中删除文件
git rm <file(s)>

# 移动或重命名文件
git mv <old_file> <new_file>

# 使用消息提交更改
git commit -m "commit message"

# 显示工作树和上次提交之间的差异
git diff

# --------------------------------- Advanced -----------------------------------

# 假设被跟踪的文件未更改
git update-index --assume-unchanged <file>

# 恢复跟踪更改的正常行为
git update-index --no-assume-unchanged <file>

# 显示两次提交之间的差异
git diff <commit_id1>..<commit_id2>

# 取消暂存文件，但保留在工作目录中
git rm --cached <file_name>
```

## 分支与合并

```bash
# 列出所有分支机构
git branch

# 创建新分支
git branch <branch_name>

# 切换到特定分支
git checkout <branch_name>

# 将分支合并到当前分支
git merge <branch_name>

# 删除特定分支
git branch -d <branch_name>

# 列出所有远程分支
git branch -r

# --------------------------------- Advanced -----------------------------------

# 列出包含附加信息的分支机构
git branch -vv

# 基于远程分支创建新分支
git checkout -b <branch_name> <remote_name>/<remote_branch>

# 发生冲突时取消合并
git merge --abort

# 重置合并
git reset --merge

# 将当前分支重新分配到另一个分支
git rebase <branch_name>

# 取消正在进行的重定基数操作
git rebase --abort

# 用于编辑、压缩、重新排序或删除提交的交互式重定基准
git rebase -i

# 以交互方式将当前分支中的提交重新绑定到远程分支
git rebase -i <remote_name>/<remote_branch>
```

## 远程存储库

```bash
# 列出远程存储库
git remote

# 添加远程存储库
git remote add <name> <url>

# 添加远程存储库
git fetch <remote_name>

# 从远程分支提取更改
git pull <remote_name> <remote_branch>

# 将更改推送到远程存储库
git push <remote_name> <local_branch>

# 删除远程存储库
git remote rm <remote_name>

# 显示有关特定远程存储库的信息
git remote show <remote_name>

# 显示远程存储库的跟踪分支
git remote show <remote_name> --verbose

# --------------------------------- Advanced -----------------------------------

# 从所有远程存储库获取更新
git remote update

# 强制将更改推送到远程存储库，覆盖远程历史记录
git push --force <remote_name> <local_branch>

# 将所有标记推送到远程存储库
git push --tags <remote_name>

# 重命名远程存储库
git remote rename <old_name> <new_name>

# 更改远程存储库的URL
git remote set-url <name> <new_url>

# 删除过时的远程跟踪分支
git remote prune <remote_name>

# 列出已合并到当前分支中的所有远程分支
git branch -r --merged

# 列出所有尚未合并到当前分支中的远程分支
git branch -r --no-merged

# 从远程存储库获取更新并修剪过时的远程跟踪分支
git fetch -p

# 跟踪远程分支并将本地分支设置为自动与其同步
git branch --track <branch_name> <remote_name>/<remote_branch>

# 设置现有的本地分支以跟踪远程分支
git branch -u <remote_name>/<remote_branch>

# 将分支推送到远程存储库，并将其设置为跟踪远程分支
git push -u <remote_name> <local_branch>

# 删除本地分支和远程分支之间的跟踪关联
git branch --unset-upstream <branch_name>
```

## 提交历史记录

```bash
# 显示提交历史记录
git log

# 显示浓缩的提交历史记录
git log --oneline

# 显示分支提交历史记录
git log --graph

# 按作者筛选提交历史记录
git log --author=<author_name>

# 显示自特定日期以来的提交历史记录
git log --since=<date>

# 显示特定日期之前的提交历史记录
git log --until=<date>
```

## 标签

```bash
# 列出所有标签
git tag

# 列出所有标签
git tag <tag_name> <commit_id>

# 创建带有消息的注释标记
git tag -a <tag_name> -m "tag message"

# 删除特定标记
git tag -d <tag_name>

# 删除特定的远程标记
git push <remote_name> --delete <tag_name>

# 显示有关特定标记的信息
git show <tag_name>
```

## 储藏

```bash
# 临时保存工作树中的更改
git stash save "stash message"

# 储藏（包含未跟踪）
git stash save -u "stash message"

# 列出所有储藏物品
git stash list

# 应用最新储藏
git stash apply

# 应用特定储藏中的更改
git stash apply <stash>

# 删除特定的储藏
git stash drop <stash>

# 删除所有隐藏内容
git stash clear

# 弹出最新储藏
git stash pop

# 弹出特定储藏
git stash pop <stash>

# 查看特定储藏的修改
git stash show <stash>
```

## Cherry-Picking

```bash
# 将特定的提交从一个分支应用到另一个分支
git cherry-pick <commit_id>
```

## 提交管理

- 不要执行 git reset --hard 命令，会导致此次修改的内容丢失。如果不慎操作，执行 git reflog 找到提交历史，然后再 git reset 回去。

```bash
# 修改最新提交, Vim: ZZ 保存, ZQ 不保存
git commit --amend

# husky 检查不通过
git commit -m "message" --no-verify

# 创建一个新的提交，该提交撤消以前提交的更改
git revert <commit_id>

# 放弃更改并将 HEAD 移动到特定提交
git reset --hard <commit_id>

# 本地撤销上次提交
git reset --soft HEAD~

# 将 HEAD 移动到特定的提交，但保留已暂存的更改
git reset --soft <commit_id>

# 显示对本地存储库头所做的所有更改的记录
git reflog
```

## 子模块、子树和高级子模块

```bash
# 将子模块添加到当前存储库
git submodule add <repository_url> <path>

# 递归初始化和更新所有子模块
git submodule update --init --recursive

# 将子树添加到当前存储库
git subtree add --prefix=<path> <repository_url>

# 初始化存储库中的子模块
git submodule init

# 将子模块更新为其最新提交
git submodule update

# 在每个子模块中执行特定命令
git submodule foreach <command>

# 注销子模块
git submodule deinit <path>
```

## 钩子和自动化，以及差异和合并工具

```bash
# 在 Git 存储库中找到 hooks 目录（通常位于.git/hooks/)
git hooks

# 可以添加到 hooks 目录的特定 hook 的脚本名称
pre-commit, post-commit, pre-push, post-merge, etc.

# 使挂钩脚本可执行，以确保在必要时触发它
chmod +x <hook_script>
```

## 使用修补程序

```bash
# 为特定提交生成修补程序文件
git format-patch <commit_id>

# 将修补程序应用于当前分支
git apply <patch_file>

# 使用“git am”（应用邮箱）命令应用修补程序
git am <patch_file>
```

## 选择、调试和性能问题

```bash
# 开始一个平分会话，查找引入错误的提交
git bisect start

# 将提交标记为“错误”，表示它包含错误
git bisect bad <commit_id>

# 将提交标记为“良好”，表示它不包含错误
git bisect good <commit_id>

# 结束平分会话并返回到原始分支/提交
git bisect reset

# 验证Git存储库的完整性
git fsck

# 运行垃圾收集以优化存储库的性能
git gc

# 删除未跟踪的文件和目录（谨慎使用）
git clean -df
```

## 技巧和窍门

```bash
# 交互式地选择要暂存的文件的部分（hunks）
git add -p

# 显示特定文件的提交历史记录和关联的修补程序
git log -p <file_name>

# 自定义 Git 日志输出的格式
git log --pretty=format:"%h - %an, %ar : %s"

# 在提交消息中查找文本（有助于查找特定更改）
git log --grep="<text>"

# 快速查看自上次提交以来工作目录中的更改
git diff --stat

# 显示带有装饰的分支历史记录，以查看分支已拆分或合并的位置
git log --oneline --decorate --graph

# 在工作树中保存更改，包括未跟踪的文件
git stash save -u

# 创建一个空提交，在测试分支保护规则时很有用
git commit --allow-empty -m "Empty commit message"

# 当输出小于一个屏幕时，设置 Git 输出寻呼机退出，显示后不清除屏幕
git config --global core.pager 'less -RFX'

# 使用 Git 的自动更正功能来修复错误键入的命令
git config --global help.autocorrect 1

# 配置 Git 保存密码
git config --global credential.helper store

# 列出 Git 命令的别名
git config --get-regexp alias

# 在不实际合并分支的情况下执行合并的试运行
git merge --no-commit --no-ff <branch_name>

# 显示回购结构的树状表示
git ls-tree --name-only -r -t HEAD

# git clone [repository] --depth 1` 本身会让 clone 下来的是最近的一个 commit 的文件夹状态，而不是整个文件夹的记录，然后 git fetch --unshallow 可以在之后，将整个文件夹的状态下载下来。
git clone <https://github.com/[repository]> --depth 1

cd [repository] && git fetch --unshallow

# 当你要clone一个repository，然后特别嫌弃他的速度的时候可以将本来的：
git clone <https://github.com/[repository].git>

# 改成：
git clone <https://github.com.cnpmjs.org/[repository].git>
```

## Git Workflow

[Git Flow](https://www.notion.so/Git-Flow-fb15ecfbc47745f794f4b5bafa54f6a4)

[GitHub flow - GitHub Docs](https://docs.github.com/en/get-started/quickstart/github-flow)

[Introduction to GitLab Flow | GitLab](https://docs.gitlab.com/ee/topics/gitlab_flow.html#introduction-to-gitlab-flow)

[Git Cheatsheet - cs.fyi](https://cs.fyi/guide/git-cheatsheet)

[GitHub Git 备忘单 - GitHub Cheatsheets](https://training.github.com/downloads/zh_CN/github-git-cheat-sheet/)
