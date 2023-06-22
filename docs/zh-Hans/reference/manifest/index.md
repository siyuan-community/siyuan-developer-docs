---
outline: deep

---

在思源中, 开发者希望把自己开发的作品上架到 bazzar (集市)，除了核心的代码等之外, 还必须提交三种东西

- json 配置文件
- README 文件
- 图标和预览图片

## json 配置文件格式

bazzar 读取特定 json 文件来获悉项目的局具体配置。在介绍详细的文件格式之前，请注意以下三个字段，务必保证: **`name` 字段和 `url` 仓库名称一致**。


```json
{
    "name": "widget-sample",
    "url": "https://github.com/siyuan-note/widget-sample",
    "version": "0.0.3"
}
```

以下是 json 文件详细的格式说明

- 插件: [plugin.json](./plugin.md)
- 主题: [theme.json](./theme.md)
- 挂件: [widget.json](./widget.md)
- 模板: [template.json](./template.md)
- 图标: [icon.json](./icon.md)

## README 文件

README 文件会被解析为集市中项目的介绍文档。思源支持 i18n 国际化，所以一个项目中可能不止有一个 README 文件，需要配置 `json` 文件中 `readme` 字段。

```json
"readme": {
    "default": "README.md",
    "zh_CN": "README_zh_CN.md"
},
```

### 关于图片

思源在解析 README 的时候遇到相对链接的图片，不会在本地查找，而是会通过网络访问远程仓库中的图片资源。

由于众所周知的原因, 中国大陆内访问 github 仓库会出现波动情况。所以思源会根据 json 文件 `url` 配置把本地图片资源解析成 [cdn](https://cdn.jsdelivr.net/) 链接。`xx.png` 会被处理为 `https://cdn.jsdelivr.net/gh/<author>/<repo>/xx.png`

所以大部分情况下，我们只需要在 README 里使用相对路径引用图片即可。

不过 jsdeliver cdn 本身也存在波动，你也可以选择在 zh_CN 的文档中使用自建图床的链接地址，来提供更加文档的访问。

还有一种方案, 是把所有的 asset 图片打包到发布包当中，然后指定思源内部网络访问的 uri，例如:

```
/appearance/themes/<ThemeX>/preview-light.png`
```

会访问思源工作空间目录下, 主题 `ThemeX` 的安装路径 `/appearance/themes/<ThemeX>/` 下属的图片 `preview-light.png`。

## 图标和预览图片

需要两张图片:

* icon.png (160*160)

  * 图标图片

* preview.png (1024*768)

  * 效果预览图片

![集市展示](/public/static/asset-img.png)

> Tips: 一次性制作符合要求尺寸的图片可能比较麻烦，你可以试着分别制作两个 1:1 和 4:3 的图片，然后使用图片编辑软件 (比如 windows 自带的画图) 缩放到指定尺寸。

