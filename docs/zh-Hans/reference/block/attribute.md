---
outline: deep
---

# 块属性

| 块属性名                                                      | 适用块类型 |
| :------------------------------------------------------------ | ---------- |
| [`custom-avs`](#custom-avs)                                   | 所有块     |
| [`custom-data-assets`](#custom-data-assets)                   | 挂件块     |
| [`custom-heading-mode`](#custom-heading-mode)                 | 嵌入块     |
| [`custom-hidden`](#custom-hidden)                             | 文档块     |
| [`custom-liandi-articleId`](#custom-liandi-articleId)         | 文档块     |
| [`custom-reminder-wechat`](#custom-reminder-wechat)           | 所有块     |
| [`custom-riff-decks`](#custom-riff-decks)                     | 所有块     |
| [`custom-sy-fullwidth`](#custom-sy-fullwidth)                 | 文档块     |
| [`custom-sy-readonly`](#custom-sy-readonly)                   | 文档块     |
| [`custom-dailynote-{yyyymmdd}`](#custom-dailynote-{yyyymmdd}) | 文档块     |
| [`data-assets`](#data-assets)                                 | 挂件块     |
| [`data-export-html`](#data-export-html)                       | 挂件块     |
| [`data-export-md`](#data-export-md)                           | 挂件块     |

## `custom-avs`

- 所有块
- 所有关联到该块的属性视图的 ID 列表
- 属性值示例
  - `20230927002636-rksmxa0`
    - ID 为 `20230927002636-rksmxa0` 的属性视图
  - `20230927002636-rksmxa0,20231007002428-w7z858y`
    - ID 为 `20230927002636-rksmxa0` 的属性视图
    - ID 为 `20231007002428-w7z858y` 的属性视图

## `custom-data-assets`

- 挂件块
- 等效于 [`data-assets`](#data-assets)

## `custom-heading-mode`

- 嵌入块
- 是否在嵌入块中显示标题下方的内容
- 属性值
  - `0`: 显示标题下方的内容
  - `1`: 隐藏标题下方的内容

## `custom-hidden`

- 文档块
- 属性值
  - `true`: 在文档树中隐藏文档及其下级文档

## `custom-liandi-articleId`

- 文档块
- 属性值
  - 分享到链滴的帖子 ID

## `custom-reminder-wechat`

- 所有块
- 属性值
  - 预定的微信推送提醒时间

## `custom-riff-decks`

- 所有块
- 属性值
  - 闪卡卡包 ID 列表

## `custom-sy-fullwidth`

- 文档块
- 属性值
  - `true`: 开启文档自适应宽度
  - `false`: 关闭文档自适应宽度

## `custom-sy-readonly`

- 文档块
- 属性值
  - `true`: 启用文档只读
  - `false`: 禁用文档只读

## `custom-dailynote-{yymmdd}`

- 文档块
  - daily note 文档
- 属性名
  - `custom-dailynote-{yyyymmdd}`
  - `{yyyymmdd}` 为日期，格式为 `YYYYMMDD`，例如 `20211001` 代表 2021 年 10 月 1 日
- 属性值
  - `yyyymmdd`: 日期，格式为 `YYYYMMDD`
- 详细细节请见: [Github Issue #9807](https://github.com/siyuan-note/siyuan/issues/9807)

## `data-assets`

- 挂件块
- 设置该挂件引用的资源文件

## `data-export-html`

- 挂件块
- 设置导出时替换的 HTML 内容

## `data-export-md`

- 挂件块
- 设置导出时替换的 Markdown 内容
