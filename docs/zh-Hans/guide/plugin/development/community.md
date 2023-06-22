思源社区在发展的过程中，有热心的开发者为插件开发编写了一些工具包。这里做一些简单介绍

## `sy-plugin-changelog`

|作者| github | npm |语言环境|
|---|---|---|---|
|frostime|[sy-plugin-changelog](https://github.com/frostime/sy-plugin-changelog)|[sy-plugin-changelog](https://www.npmjs.com/package/sy-plugin-changelog)|typescript|


这个包可以可以帮开发者在插件更新的时候展示更新日志。主要用法如下:

1. 安装依赖

    > pnpm add -D sy-plugin-changelog
2. 在自己的代码中导入, 并将 `this` 作为参数传入 `changelog` 当中

    ```ts
    import { changelog } from 'sy-plugin-changelog';

    export default class PluginSample extends Plugin {
        async onload() {
            //... everything done
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


|作者| github | npm |语言环境|
|---|---|---|---|
|terwer|[zhi-siyuan-api](https://github.com/terwer/zhi)|[zhi-siyuan-api](https://www.npmjs.com/package/zhi-siyuan-api)|? |

#TODO
