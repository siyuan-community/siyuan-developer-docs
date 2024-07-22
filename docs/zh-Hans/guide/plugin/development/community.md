---
outline: deep
---

# 社区资源

思源社区在发展的过程中，有热心的开发者为插件开发编写了一些工具包。这里做一些简单介绍

## `siyuan-package-custom-block`

| 作者    | github                                                                                | npm                                                                                      | 语言环境 |
| ------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------- |
| zuoez02 | [siyuan-package-custom-block](https://github.com/zuoez02/siyuan-package-custom-block) | [siyuan-package-custom-block](https://www.npmjs.com/package/siyuan-package-custom-block) |          |

用于协助开发者控制基于HTML块的自定义块工具。

### 代码示例

```javascript
const siyuan = require("siyuan");
const { CustomBlock, CustomBlockManager } = require("siyuan-package-custom-block");

class CarouselBlock extends CustomBlock {
    static type = "CarouselBlock";
    static css = ".hello { color: red; }";

    onMount(el, data) {
        console.log("hello world");
        el.insertAdjacentHTML("afterbegin", `<div class="hello">hello ${data.name}</div>`);
    }
}

module.exports = class P extends siyuan.Plugin {
    onload() {
        CustomBlockManager.init(this);
        CustomBlockManager.load(CarouselBlock);
        const content = CustomBlockManager.buildBlock("CarouselBlock", {
            name: "123",
        });
        // use content for paste in editor.
        console.log(content);
    }
};
```

## `sy-plugin-changelog`

| 作者     | github                                                                 | npm                                                                      | 语言环境   |
| -------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------ | ---------- |
| frostime | [sy-plugin-changelog](https://github.com/frostime/sy-plugin-changelog) | [sy-plugin-changelog](https://www.npmjs.com/package/sy-plugin-changelog) | typescript |

这个包可以可以帮开发者在插件更新的时候展示更新日志。主要用法如下:

1. 安装依赖

   > pnpm add -D sy-plugin-changelog

2. 在自己的代码中导入, 并将 `this` 作为参数传入 `changelog` 当中

   ```ts
   import { changelog } from "sy-plugin-changelog";

   export default class PluginSample extends Plugin {
       async onload() {
       // ... everything done
           changelog(this);
       }
   }
   ```

3. 请在 i18n 目录下新建文件 `CHANGELOG-<lang>-<version>.md` 文件, 并保证被加入打包当中

   - 例如: i18n/CHANGELOG-zh_CN-0.0.2.md
   - `<lang>` 应当和思源 `window.siyuan.config.lang` 一致, 例如: zh_CN
   - `<version>` 应当和 plugin.json 中 version 字段一致, 且格式为 `/\d+\.\d+\.\d+/`, 如 `1.1.2`

更多详细的用法, 请阅读文档。

## `zhi-siyuan-api`

| 作者   | github                                          | npm                                                            | 语言环境 |
| ------ | ----------------------------------------------- | -------------------------------------------------------------- | -------- |
| terwer | [zhi-siyuan-api](https://github.com/terwer/zhi) | [zhi-siyuan-api](https://www.npmjs.com/package/zhi-siyuan-api) | ?        |

#TODO

## `siyuan-sdk`

| 作者          | GitHub 仓库                                                                                                                                                                                                                                                                                                               | npm                                                                                                                                                                                                                                                                         | 语言环境                |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| Zuoqiu-Yingyi | [siyuan-community/siyuan-sdk](https://github.com/siyuan-community/siyuan-sdk)<br/> [![GitHub 最新发行版本 (最新一次发行/预发行)](https://img.shields.io/github/v/release/siyuan-community/siyuan-sdk?include_prereleases&style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/releases/latest) | [@siyuan-community/siyuan-sdk](https://www.npmjs.com/package/@siyuan-community/siyuan-sdk)<br/> [![NPM 版本](https://img.shields.io/npm/v/%40siyuan-community/siyuan-sdk?style=flat-square)](https://www.npmjs.com/package/@siyuan-community/siyuan-sdk?activeTab=versions) | JavaScript / TypeScript |

思源内核 API 的封装，提供了一些常用的方法，可以帮助开发者更快的开发插件。

其他详细信息请参阅 [siyuan-sdk 文档](/zh-Hans/reference/community/siyuan-sdk/)
