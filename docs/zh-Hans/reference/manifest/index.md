---
outline: deep

---

思源的 bazzar (集市) 系统需要通过特定格式的 json 文件来读取相关配置。在介绍详细的文件格式之前，请注意以下三个字段，务必保证: **`name` 字段和 `url` 仓库名称一致**。


```json
{
    "name": "widget-sample",
    "url": "https://github.com/siyuan-note/widget-sample",
    "version": "0.0.3"
}
```

详细的配置文件格式如下所示

- 插件: [plugin.json](./plugin.md)
- 主题: [theme.json](./theme.md)
- 挂件: [widget.json](./widget.md)
- 模板: [template.json](./template.md)
- 图标: [icon.json](./icon.md)
