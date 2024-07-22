---
outline: deep
---

# 插件开发入门

这一小节简单介绍插件开发的基本知识和流程。

## 前置技能

基础技能（必备）

- **JavaScript**
- HTML
- CSS

进阶技能（可选）

- SASS（CSS 扩展语言）
- Svelte（前端 UI 框架）
- TypeScript（JS 的扩展语言）

最低限度，需要有 JS 语法基础，如果懂得 TS 是最好的，不懂也没关系，TS 是 JS 的超集，完全兼容 JS 语法

如果同时想要编写美观的交互界面，懂得 Svelte 会更加轻松，当然你也可以使用 Vue，但是推荐使用 Svelte，因为已经有样板工程

## 开发环境及工具

- **Node.js** 环境

  - 它提供了 npm 包管理器，以及 typescript 的运行环境
  - 用其包管理工具 npm 安装更现代化的包管理工具 **pnpm**

- **VScode** 编辑器
- 一个至少能流畅访问 github 的网络环境

思源插件开发所依赖的 js 模块以 npm 包的形式发布，并通过 pnpm 下载，代码通过 vscode 编写

### 环境部署

1. 下载安装 [nodejs](https://nodejs.org/en)
2. 下载安装 [vscode](https://code.visualstudio.com/)
3. 在命令行中使用 npm 安装 pnpm

   ```
   npm install -g pnpm
   ```

   具体参见 [https://pnpm.io/zh/installation](https://pnpm.io/zh/installation)

## 样板工程部署

### 简介

样板工程目前有两个：

一个是<u>官方维护</u>的

- [SiYuan plugin sample](https://github.com/siyuan-note/plugin-sample)

它使用 **webpake** 打包项目

一个是<u>社区维护</u>的

- [SiYuan plugin sample (Vite &amp; Svelte)](https://github.com/siyuan-note/plugin-sample-vite-svelte)

它内置了对 **svelte** 的支持，并且能够将项目文件链接到思源的插件目录下，避免手动复制的麻烦，以及支持热重载，它使用 **vite** 打包项目

### 获取样板工程源码

如果你能够熟练使用 github 来管理代码，或者后续要上架官方集市，那么你应该

1. 点击 <kbd>Use this template</kbd> 按钮，将项目复制到自己的库中并改名
2. `clone` 到本地进行开发
3. 按照规范提交代码，打包文件

如果不能，只是想练练手，那么你可以

1. 将项目的压缩包下载到本地
2. 解压并导入 vscode 编辑器进行开发

### 安装项目依赖

在 vscode 编辑器的终端中执行

```shell
$ pnpm install

# 或者

$ pnpm i
```

用于安装项目依赖，此时通过 pnpm 会向项目文件夹中创建 `node_modules` 文件夹并下载所有相关依赖，其中主要包括 svelte 相关依赖，siyuan 插件开发相关依赖，需要注意的是，可能依赖被下载后没有被正确加载，你需要一次甚至多次重启编辑器来确保其成功加载

### 构建

到了这一步，所有准备工作已经做完，不出问题的话，控制台执行

```shell
$ pnpm build
```

输出信息无报错，且出现 `dist` 文件夹，以及 package.zip 文件，说明成功编译了所有文件，`dist` 文件夹放入思源工作空间 `/data/plugin` 目录下就能够被思源识别和加载

### 具体参见

- [SiYuan plugin sample](https://github.com/siyuan-note/plugin-sample)（官方维护）
- [SiYuan plugin sample (Vite &amp; Svelte)](https://github.com/siyuan-note/plugin-sample-vite-svelte)（社区维护）

## 项目相关文件说明

### 项目结构

- **/src**

  - `*.ts或*.scss`

    - 插件源码

  - `/i18n/*`

    - 其中的文件用于插件的国际化，通常会包含中英双语，方便其他国家用户使用

- **plugin.json**

  - 插件配置文件，具体参见[这里](https://github.com/siyuan-note/plugin-sample/blob/main/README_zh_CN.md#pluginjson)

- icon.png (160\*160)

  - 插件图标

- index.css

  - 插件加载的 CSS 样式

- index.js

  - 插件代码

- preview.png (1024\*768)

  - 插件预览图片

- README\*.md

  - 插件说明文档

你需要关注的主要是 `/src` 目录下的源码部分，以及 `plugin.json` 这个插件配置文件

### 打包文件结构

> 无论使用何种方式编译打包，我们最终需要生成一个 package.zip，它至少包含如下文件：
>
> - i18n/\*
> - icon.png (160\*160)
> - index.css
> - index.js
> - plugin.json
> - preview.png (1024\*768)
> - README\*.md

## 项目分析及源码解析

### 项目分析

- 打包及发布

  1. 项目使用打包工具（webpack 或 vite），将源码及相关资源文件打包

     - 源码

       - `*.ts（*.svelte）` 被编译为 `index.js`
       - `*.scss` 被编译为 `index.css`

     - 资源文件

       - 直接复制

  2. 打包后，会输出到项目的 `/dist` 目录下，并在项目的根目录下输出一个 `package.zip` 文件
  3. `package.zip` 需要开发者手动上传到 github 仓库供思源集市拉取

     - 社区样板工程支持自动打包发布

- 核心依赖

  - 插件核心依赖主要是 `siyuan` 这个 npm 包，它的文件中，只有 `siyuan.d.ts` 生效，它只对插件系统的 API 类型进行声明，以此确保开发者正确调用 API，所以你常常需要执行以下代码，确保项目的依赖是最新的：

    ```
    pnpm up --latest
    或
    pnpm up -L
    ```

由于插件依赖思源本体的插件系统，它无法直接运行，所以我们本地不会有插件系统的源码，你可以在[这里](https://github.com/siyuan-note/siyuan/tree/master/app/src/plugin)查看它的源码

### 源码解析

不同于常规的开发，像 C 语言或者 Java 有 Main 函数作为入口，插件的入口在 `/src/index.ts` 中，简化如下：

```ts
import "./index.scss";

import { Plugin } from "siyuan";

export default class PluginSample extends Plugin {
    onload() {
        console.log("Hello World!");
    }
}
```

`PluginSample` 类继承了 `Plugin` 类，并实现了它的 `onload()` 方法，所以你可以认为，`PluginSample` 类的 `onload()` 方法就是插件的入口，如果插件系统加载它，就会在控制台输出 `Hello World!`

本地查看 `siyuan.d.ts`（在 `/node_modules/siyuan` 下），或者网络查看[它](https://www.npmjs.com/package/siyuan?activeTab=code)，你能够看到，`Plugin` 是一个抽象类，它还还定义了 `onunload()` 和 `onLayoutReady()` 方法，顾名思义，前者是在插件卸载时执行，后者是在界面加载完毕时执行，以此我们能做更多的事，如果你在开发中遇到问题，需要去了解插件系统的某个方法是如何实现的，你可以随时在[这里](https://github.com/siyuan-note/siyuan/tree/master/app/src/plugin)找到它

### 前后端 API

上面说的 `siyuan.d.ts` 它定义了前端 API，后端 API 是由思源内核提供的，官方文档在[这里](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md)

简而言之，插件开发就是调用前端 API 来给思源编辑器添加交互界面或控件，调用后端 API 来实现功能

#### 参考链接

- [一文读懂 TS 的(.d.ts)文件](https://www.jianshu.com/p/cd875a4a6c15)
- [plugin.json 文件说明](https://github.com/siyuan-note/plugin-sample/blob/main/README_zh_CN.md#pluginjson)
- [前端 API 声明文件 siyuan.d.ts](https://www.npmjs.com/package/siyuan)
- [思源前端 API 源码](https://github.com/siyuan-note/siyuan/tree/master/app/src/plugin)
- [思源后端 API 文档](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md)

## 代码调试

- 官方模板

  > 将你的库克隆到本地开发文件夹中，为了方便可以直接将开发文件夹放置在 `{工作空间}/data/plugins/` 下

  但是项目中的所有文件都会被同步到云端，删除插件时，整个文件夹会被移除，容易导致项目丢失

- 社区模板

  使用软链接，将`/dist`目录下的文件链接到插件文件夹下，其中的内容不会被同步

代码更改后，执行`pnpm run build`，会将源代码和资源文件打包输出到`/dist`目录下，并在项目根目录输出`package.zip`，你需要重启思源，或者先禁用再启用插件，来让插件重新加载，因此你最好直接配置vscode

- 点击vscode的运行按钮或按<kbd>F5</kbd>
- 首次运行时，将端口配置为思源的`6806`端口，会启动浏览器访问思源，只要刷新网页便会重载思源界面，方便开发

如果使用的是社区样版工程，执行`pnpm run dev`，会在后台挂起脚本实时编译，每当你按下<kbd>CTRL+S</kbd>保存，就会进行一次编译，并刷新浏览器，你能够立即看到更改，以便于**快速开发**

无论是在思源的控制台、vscode控制台还是浏览器控制台，你都能够看到调试信息，当然，你应该更习惯于使用浏览器的控制台

## 上架集市、更新插件版本

### 上架集市

- [上架集市 (github.com)](https://github.com/siyuan-note/plugin-sample/blob/main/README_zh_CN.md#%E4%B8%8A%E6%9E%B6%E9%9B%86%E5%B8%82)

> - 执行 `pnpm run build` 生成 package.zip
> - 在 GitHub 上创建一个新的发布，使用插件版本号作为 “Tag version”，示例 [https://github.com/siyuan-note/plugin-sample/releases](https://github.com/siyuan-note/plugin-sample/releases)
> - 上传 package.zip 作为二进制附件
> - 提交发布
>
> 如果是第一次发布版本，还需要创建一个 PR 到 [Community Bazaar](https://github.com/siyuan-note/bazaar) 社区集市仓库，修改该库的 plugins.json。该文件是所有社区插件库的索引，格式为：
>
> ```json
> {
>     "repos": ["username/reponame"]
> }
> ```
>
> PR 被合并以后集市会通过 GitHub Actions 自动更新索引并部署。后续发布新版本插件时只需要按照上述步骤创建新的发布即可，不需要再 PR 社区集市仓库。
>
> 正常情况下，社区集市仓库每隔 1 小时会自动更新索引并部署，可在 [https://github.com/siyuan-note/bazaar/actions](https://github.com/siyuan-note/bazaar/actions) 查看部署状态。

### 更新插件版本

1. 通常需要将代码更改提交到仓库，一是方便代码管理与备份，二是便于他人学习与参考，当然你也可以只发布`package.zip`
2. 以插件的版本号作为“Tag version”，也就是`plugin.json`中的`version`字段，使用官方样板工程需要手动上传`package.zip`，使用社区样板工程，在正确配置后会自动打包，无需手动上传
3. **请务必更改** `plugin.json` **中的** `version` **字段**，集市只有当检测到`version`字段变化才会拉取更新，并依据`version`字段拉取相应tag的releases中的`package.zip`，向用户推送
