# Github Pages

## 配置 Github Pages

1. 新建 `<github username>.github.io` 的仓库
2. 克隆新建的 github 仓库到本地并修改内容
3. 在 github 上修改仓库的配置 `Settings` > `Pages` > `Build and deployment`，Source 选项选择 `Github Actions`

## 配置 Github Actions

### 部署问题：

> Error: The process '/usr/bin/git' failed with exit code 128
>
> 在 github 上修改仓库的配置 `Settings` > `Actions` > `Genneral` > `Workflow permissions`，选择 `Read and write permissions` 选项并保存
