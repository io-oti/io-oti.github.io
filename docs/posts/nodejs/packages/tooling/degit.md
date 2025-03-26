---
{
  "author": "Io_oTI",
  "date": "2025-03-25",
  "publish": true,
  "tag": "nodejs",
  "title": "Degit",
}
---

一个命令行工具，用于克隆远程 Git 仓库模板。

## 安装

```bash
npm install -g degit
```

## 使用

```bash
degit user/repo new-project
```

- `user/repo`：Git 仓库地址，格式为 `用户名/仓库名`。
- `new-project`：新项目的名称。

### 更多示例

```bash
# download from GitHub
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo

# download from GitLab
degit gitlab:user/repo
degit git@gitlab.com:user/repo
degit https://gitlab.com/user/repo

# download from BitBucket
degit bitbucket:user/repo
degit git@bitbucket.org:user/repo
degit https://bitbucket.org/user/repo

# download from Sourcehut
degit git.sr.ht/user/repo
degit git@git.sr.ht:user/repo
degit https://git.sr.ht/user/repo
```

### 指定分支、标记或提交

```bash
degit user/repo#dev       # branch
degit user/repo#v1.2.3    # release tag
degit user/repo#1234abcd  # commit hash
```

## 与 git clone 区别

`degit user/repo` 不是 `git clone --depth 1`

- 当你运行 `degit github:some-user/some-repo` 时，它会在 <https://github.com/some-user/some-repo> 上找到最新的提交，并将相关的 `.tar.gz` 文件下载到本地，这比使用 `git clone` 快得多，因为你没有下载整个 git 历史。
- 如果你使用 `git clone`，你会得到一个包含 `.git` 文件夹的项目，而不只是你的项目。你很容易忘记重新初始化存储库，并最终混淆自己。
- 缓存和离线支持（如果你已经有特定提交的 `.tar.gz` 文件，则不需要再次获取它）。
- 更少的输入（`degit user/repo` 而不是 `git clone --depth 1 git@github.com:user/repo` ）。

## 参考

- [degit 文档](https://github.com/Rich-Harris/degit#readme)
- [degit - github](https://github.com/Rich-Harris/degit)
- [degit - npmjs](https://www.npmjs.com/package/degit)
