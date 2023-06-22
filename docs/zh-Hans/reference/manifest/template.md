---
outline: deep

---

```json
{
  "name": "template-sample",
  "author": "Vanessa",
  "url": "https://github.com/siyuan-note/template-sample",
  "version": "0.0.3",
  "minAppVersion": "2.9.0",
  "displayName": {
    "default": "Template Sample",
    "zh_CN": "模板示例"
  },
  "description": {
    "default": "This is a template sample",
    "zh_CN": "这是一个模板示例"
  },
  "readme": {
    "default": "README.md",
    "zh_CN": "README_zh_CN.md"
  },
  "funding": {
    "openCollective": "",
    "patreon": "",
    "github": "",
    "custom": [
      "https://ld246.com/sponsor"
    ]
  }
}
```

* `name`：模板名称，必须和库名一致，且全局唯一（集市中不能有重名模板）
* `author`：模板作者名
* `url`：模板仓库地址
* `version`：模板版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
* `minAppVersion`：模板支持的最低思源笔记版本号
* `displayName`：模板显示名称，主要用于模板集市列表中显示，支持多语言
    * `default`：默认语言，必须存在
    * `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
* `description`：模板描述，主要用于模板集市列表中显示，支持多语言
    * `default`：默认语言，必须存在
    * `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
* `readme`：自述文件名，主要用于模板集市详情页中显示，支持多语言
    * `default`：默认语言，必须存在
    * `zh_CN`、`en_US` 等其他语言：可选，建议至少提供中文和英文
* `funding`：模板赞助信息
    * `openCollective`：Open Collective 名称
    * `patreon`：Patreon 名称
    * `github`：GitHub 登录名
    * `custom`：自定义赞助链接列表
