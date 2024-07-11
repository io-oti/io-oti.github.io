---
author: Io_oTI
date: 2023-09-28
title: 'Github Pages'
description: ''
---

# Github Pages

## 配置 Github Pages

1. 新建 `<github username>.github.io` 的仓库
2. 克隆新建的 github 仓库到本地并修改内容
3. 在 github 上修改仓库的配置 `Settings` > `Pages` > `Build and deployment`，Source 选项选择 `Deploy from a branch`，Branch 选项选择 `gh-pages` 分支和 `/root` 路径

## 配置 Github Actions

项目根目录下新建 `.github/workflows/deploy.yml` 文件，配置如下：

```yml
name: Deploy Github Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

jobs:
  # Single deploy job since we're just deploying
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'

      - name: Install dependencies
        run: npm install

      - name: Run build script
        run: npm run docs:build

      - name: Deploy to Github Pages
        uses: crazy-max/ghaction-github-pages@v3
        with:
          # Deploy to gh-pages branch
          target_branch: gh-pages
          # Deploy the default output  dir of Vitepress
          build_dir: docs/.vitepress/dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 部署问题：

> Error: The process '/usr/bin/git' failed with exit code 128
>
> 在 github 上修改仓库的配置 `Settings` > `Actions` > `Genneral` > `Workflow permissions`，选择 `Read and write permissions` 选项并保存
