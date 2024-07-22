---
outline: deep
---

# 5分钟快速开启插件开发

## 适宜阅读人群

前端开发已入门。如果没有的话建议查看 [入门指南](./startup.md) 进行仔细学习

## 步骤

1. 找到你本地的思源的工作空间目录（WORKSPACE）
2. 使用你习惯的工具，在 `WORKSPACE/data/plugins/` 下创建你的插件，例如名称 `siyuan-plugin-example`
3. 在 `WORKSPACE/data/plugins/siyuan-plugin-example` 中创建五个文件: `plugin.json`, `icon.png`,`preview.png`, `index.js`, `README.MD`，并在下面的内容填写到对应的文件里。

   ```json
   // plugin.json
   {
       "name": "siyuan-plugin-example",
       "version": "v0.1.0",
       "author": "example",
       "url": "https://github.com/example/siyuan-plugin/example",
       "displayName": {
           "default": "example",
           "zh_CN": "example"
       },
       "description": {
           "default": "example",
           "zh_CN": "example"
       },
       "readme": {
           "default": "README.md"
       }
   }
   ```

   ```javascript
   // index.js
   const siyuan = require("siyuan");

   module.exports = class ExamplePlugin extends siyuan.Plugin {
       onload() {
           console.log("Hello World");
       }
   };
   ```

   ```markdown
   <!-- README.md -->

   # Siyuan Plugin Example

   Hello world
   ```

4. 上述文件创建并编辑完成后，在你思源里打开你的工作空间，或者刷新（打开控制台后使用快捷键 <kbd>F5</kbd>, <kbd>Ctrl + F5</kbd> 或 <kbd>Ctrl + R</kbd>）即可刷新页面。
5. 在 `设置 -> 集市 -> 已下载 -> 插件` 中，即可看到你自己的插件`example`。打开后面的开关。
6. 使用思源菜单中的 `开发者工具` 或者快捷键 <kbd>Ctrl + Shift + I</kbd> 打开控制台，即可看到输出的 `Hello World` 了
