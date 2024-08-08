---
outline: deep
---

# 主题

## 清单文件 {#manifest}

::: code-group
<<< @/snippets/examples/manifest/theme.json [Example]
<<< @/snippets/siyuan-sdk/types/manifest/theme.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/manifest/theme.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/manifest/theme.schema.json [JSON Schema (json)]
:::

- 基础字段
  - `name`：主题名称，必须全局唯一（集市中不能有同名主题）
  - `author`：主题作者名
  - `url`：主题仓库地址
  - `version`：主题版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
  - `minAppVersion`：主题支持的最低思源笔记版本号
  - `keywords`: 用于在集市中搜索的关键词列表
  - `displayName`：模板显示名称，主要用于模板集市列表中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `description`：主题描述，主要用于主题集市列表中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `readme`：自述文件名，主要用于主题集市详情页中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `funding`：主题赞助信息
    - `openCollective`：Open Collective 名称
    - `patreon`：Patreon 名称
    - `github`：GitHub 用户名
    - `custom`：自定义赞助链接列表
- 附加字段
  - `modes`：主题支持的模式列表，可选值为 `light` 和 `dark`
    - `light`: 明亮模式
    - `dark`: 暗黑模式
