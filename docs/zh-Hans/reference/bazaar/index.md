---
outline: deep
---

# 社区集市

在思源中, 开发者希望把自己开发的作品上架到集市 (bazaar)，除了核心的代码文件之外, 还必须提交如下内容

- 清单文件 (不同类型资源的清单文件文件名不同)
  - `icon.json`
  - `plugin.json`
  - `template.json`
  - `theme.json`
  - `widget.json`
- 说明文件
  - `README.md`
- 图标图片
  - `icon.png`
- 预览图片
  - `preview.png`

## 清单文件 {#manifest}

bazaar 读取特定 json 文件来获悉社区资源的具体配置。

- 图标资源: `icon.json`
- 插件资源: `plugin.json`
- 模板资源: `template.json`
- 主题资源: `theme.json`
- 挂件资源: `widget.json`

### 基本字段 {#manifest-base}

不同类型的社区资源有不同的清单文件，但是他们有一些共同的字段。

::: code-group
<<< @/snippets/examples/manifest/base.json [Example]
<<< @/snippets/siyuan-sdk/types/manifest/base.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/manifest/base.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/manifest/base.schema.json [JSON Schema (json)]
:::

- 基础字段
  - `name`: 资源名称，必须全局唯一（集市中不能有同名图标）
  - `author`: 资源作者名
  - `url`: 资源 GitHub 仓库 URL
  - `version`: 资源版本号，建议遵循 [semver](https://semver.org/lang/zh-CN/) 规范
  - `minAppVersion`: 资源兼容的最低思源笔记版本号
  - `keywords`: 用于在集市中搜索的关键词列表
  - `displayName`: 资源显示名称，主要用于集市列表中显示，支持多语言
    - `default`: 默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言: 可选，建议至少提供中文和英文
  - `description`: 资源描述，主要用于资源集市列表中显示，支持多语言
    - `default`: 默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言: 可选，建议至少提供中文和英文
  - `readme`: 自述文件名，主要用于资源集市详情页中显示，支持多语言
    - `default`: 默认语言，必须存在
    - `zh_CN`、`en_US` 等其他语言: 可选，建议至少提供中文和英文
  - `funding`: 项目赞助渠道
    - `openCollective`: Open Collective 名称
    - `patreon`: Patreon 名称
    - `github`: GitHub 用户名
    - `custom`: 自定义赞助链接列表

### 附加字段 {#manifest-added}

以下是各清单文件详细定义说明，不同类型的社区资源的清单文件可能存在一些额外的字段。

- 图标: [icon.json](./icon.md#manifest)
- 插件: [plugin.json](./plugin.md#manifest)
  - `backends`: 插件支持的后端环境列表
  - `frontends`: 插件支持的前端环境列表
- 模板: [template.json](./template.md#manifest)
- 主题: [theme.json](./theme.md#manifest)
  - `modes`: 主题支持的模式
- 挂件: [widget.json](./widget.md#manifest)

## 说明文件 {#readme}

README 说明文件会被解析为集市中项目的介绍文档。思源支持 i18n 国际化，所以一个项目中可能不止有一个 README 文件，需要配置 `json` 文件中 `readme` 字段。

```json
"readme": {
    "default": "README.md",
    "zh_CN": "README_zh_CN.md"
},
```

### README 文件中的图片 {#readme-images}

思源在解析 README 的时候遇到相对链接的图片，不会在本地查找，而是会通过网络访问远程仓库中的图片资源。

由于众所周知的原因, 中国大陆内访问 github 仓库会出现波动情况。所以思源会根据 json 文件 `url` 配置把本地图片资源解析成 [cdn](https://cdn.jsdelivr.net/) 链接。`xx.png` 会被处理为 `https://cdn.jsdelivr.net/gh/<author>/<repo>/xx.png`

所以大部分情况下，我们只需要在 README 里使用相对路径引用图片即可。

不过 jsdeliver cdn 本身也存在波动，你也可以选择在 zh_CN 的文档中使用自建图床的链接地址，来提供更加文档的访问。

需要注意的是，思源的集市里的介绍文档是访问 cdn 托管的网络资源。但是「已下载」当中的介绍文档则是访问本地下载下来的 README.md 文件，所以如果你不是很在乎在集市里的显示的话，还有一种方案, 是把所有的 asset 图片打包到发布包当中，然后指定思源内部网络访问的 uri，这样用户下载了集市中的产品后可以在本地看到完整的介绍文档。

例如以下的 url:

```
/appearance/themes/<ThemeX>/preview-light.png`
```

会访问思源工作空间目录下, 主题 `ThemeX` 的安装路径 `/appearance/themes/<ThemeX>/` 下属的图片 `preview-light.png`。

## 图标图片 {#icon}

图标图片用于在社区资源集市列表与详情页中展示你的项目。

图标图片需要满足如下要求：

- 文件名称: `icon.png`
- 图片格式: `image/png`
- 图片尺寸: 160×160 (推荐)

## 预览图片 {#preview}

预览图片用于在社区资源集市详情页面中展示你的项目。

预览图片需要满足如下定要求：

- 文件名称: `preview.png`
- 图片格式: `image/png`
- 图片尺寸: 1024×768 (推荐)

![集市详情页](/public/static/asset-img.png)

> Tips: 一次性制作符合要求尺寸的图片可能比较麻烦，你可以试着分别制作两个 1:1 和 4:3 的图片，然后使用图片编辑软件 (比如 windows 自带的画图) 缩放到指定尺寸。
