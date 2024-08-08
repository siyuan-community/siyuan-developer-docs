---
outline: deep
---

# 挂件

## 清单文件 {#manifest}

::: code-group
<<< @/snippets/examples/manifest/widget.json [Example]
<<< @/snippets/siyuan-sdk/types/manifest/widget.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/manifest/widget.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/manifest/widget.schema.json [JSON Schema (json)]
:::

- 基础字段
  - `name`：挂件名称，必须全局唯一（集市中不能有同名挂件）
  - `author`：挂件作者名
  - `url`：挂件仓库地址
  - `version`：挂件版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
  - `minAppVersion`：挂件支持的最低思源笔记版本号
  - `keywords`: 用于在集市中搜索的关键词列表
  - `displayName`：模板显示名称，主要用于模板集市列表中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `description`：挂件描述，主要用于挂件集市列表中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `readme`：自述文件名，主要用于挂件集市详情页中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `funding`：挂件赞助信息
    - `openCollective`：Open Collective 名称
    - `patreon`：Patreon 名称
    - `github`：GitHub 用户名
    - `custom`：自定义赞助链接列表
