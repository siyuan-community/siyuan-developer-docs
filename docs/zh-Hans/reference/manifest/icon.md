---
outline: deep
---

```json
{
  "name": "icon-sample",
  "author": "Vanessa",
  "url": "https://github.com/siyuan-note/icon-sample",
  "version": "0.0.3",
  "minAppVersion": "2.8.8",
  "displayName": {
    "default": "Icon Sample",
    "zh_CN": "图标示例"
  },
  "description": {
    "default": "This is a icon sample",
    "zh_CN": "这是一个图标示例"
  },
  "readme": {
    "default": "README.md",
    "zh_CN": "README_zh_CN.md"
  },
  "funding": {
    "openCollective": "",
    "patreon": "",
    "github": "",
    "custom": ["https://ld246.com/sponsor"]
  }
}
```

- `name`：图标名称，必须和库名一致，且全局唯一（集市中不能有重名图标）
- `author`：图标作者名
- `url`：图标仓库地址
- `version`：图标版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
- `minAppVersion`：图标支持的最低思源笔记版本号
- `displayName`：图标显示名称，主要用于图标集市列表中显示，支持多语言
  - `default`：默认语言，必须存在
  - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
- `description`：图标描述，主要用于图标集市列表中显示，支持多语言
  - `default`：默认语言，必须存在
  - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
- `readme`：自述文件名，主要用于图标集市详情页中显示，支持多语言
  - `default`：默认语言，必须存在
  - `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
- `funding`：图标赞助信息
  - `openCollective`：Open Collective 名称
  - `patreon`：Patreon 名称
  - `github`：GitHub 登录名
  - `custom`：自定义赞助链接列表
