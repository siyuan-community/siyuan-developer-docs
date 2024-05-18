---
outline: deep
---

# 插件

## 清单文件 {#manifest}

::: code-group
<<< @/snippets/examples/manifest/plugin.json [Example]
<<< @/snippets/siyuan-sdk/types/manifest/plugin.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/manifest/plugin.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/manifest/plugin.schema.json [JSON Schema (json)]
:::

- 基础字段
  - `name`：插件名称，必须全局唯一（集市中不能有同名插件）
  - `author`：插件作者名
  - `url`：插件仓库地址
  - `version`：插件版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
  - `minAppVersion`：插件支持的最低思源笔记版本号
  - `keywords`: 用于在集市中搜索的关键词列表
  - `displayName`：模板显示名称，主要用于模板集市列表中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `description`：插件描述，主要用于插件集市列表中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `readme`：自述文件名，主要用于插件集市详情页中显示，支持多语言
    - `default`：默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
  - `funding`：插件赞助信息
    - `openCollective`：Open Collective 名称
    - `patreon`：Patreon 名称
    - `github`：GitHub 用户名
    - `custom`：自定义赞助链接列表
- 附加字段
  - `backends`：插件兼容的后端环境列表，可选值为 `windows`, `linux`, `darwin`, `docker`, `android`, `ios` 与 `all`
    - `windows`：Windows 桌面端
    - `linux`：Linux 桌面端
    - `darwin`：macOS 桌面端
    - `docker`：Docker 端
    - `android`：Android 端
    - `ios`：iOS 端
    - `all`：所有环境
  - `frontends`：插件兼容的前端环境列表，可选值为 `desktop`, `desktop-window`, `mobile`, `browser-desktop`, `browser-mobile` 与 `all`
    - `desktop`：桌面端
    - `desktop-window`：桌面端页签转换的独立窗口
    - `mobile`：移动端
    - `browser-desktop`：桌面端浏览器
    - `browser-mobile`：移动端浏览器
    - `all`：所有环境
