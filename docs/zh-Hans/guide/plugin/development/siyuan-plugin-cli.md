---
title: siyuan-plugin-cli 工具
locale: zh
document: 20241002185122-o3kp77k
notebook: Life
hpath: /杂项关注/思源笔记/思源插件开发Tips/siyuan-plugin-cli
export: '2024-10-02 19:44:38'
---

[siyuan-plugin-cli](https://www.npmjs.com/package/siyuan-plugin-cli) 是一个 npm cli 程序，提供了一些 SiYuan 插件开发的工具。

安装:

```bash
npm install -g siyuan-plugin-cli
```

## 基本功能

### 在终端创建插件项目

运行`npx create-sy-plugin`​ 或 `npx create-plugin`​ ，可以从模板中创建一个插件。

该命令会提供一个的交互式命令行：

- 输入插件的基本信息
- 选择插件模板
- 从模板中创建插件项目（本质是 `git clone`​ 到本地）
- 更新本地插件项目 package.json 和 plugin.json 的基本信息

你还可以选择是否直接将插件上传 github，如果同意，则 cli 程序将：

- 自动创建一个新的仓库

  - 这可能需要你输入 github 的 api key
  - 你可以在输入一次后就将它缓存在本地 (存放在 `~/.siyuan-plugin-cli`​ 文件中)，这样下次使用的时候就不用重复输入了

- 申请自动开启仓库的 workflow 权限，以便于直接使用模板中相关 ci 脚本
- 将本地文件 push 到远端仓库

​![image](/frostime/image-20241002191846-5prokwg.png)

###

### make-link 与 make-install

为了方便开发的插件能快速导入到思源中调试、运行，cli 程序提供了两种命令。

- ​`npx make-link`​ 创建软链接到 SiYuan 插件目录

  - 将插件开发下的 `dev`​ 目录链接到 SiYuan 插件目录下的 `plugins`​ 目录下
  - 注意：在 Windows 下推荐运行 `npx make-link-win`

- ​`npx make-install`​ 安装插件到 SiYuan 插件目录下

  - 将插件开发下的 `dist`​ 目录中的文件复制到 SiYuan 的插件目录中

> ⚠️ 注意: **在 Windows 下，需要管理员权限来创建软链接**，你可以有两种选择：
>
> 1. 管理员模式下运行 `npx make-link`
> 2. 使用 `npx make-link-win`​ 来自动请求管理员权限。

运行这两条命令的时候，请保证思源处于运行中，这样程序会首先自动获取所有的工作空间，然后由用户自行选择想要绑定到哪个工作空间下。

```bash
❯❯❯ npx make-link
>>> Try to visit constant "targetDir" in make_dev_link.js...
>>> Constant "targetDir" is empty, try to get SiYuan directory automatically....
>>> Got 2 SiYuan workspaces
        [0] C:\Users\EEG\Documents\思源笔记
        [1] H:\临时文件夹\SiYuanDevSpace
        Please select a workspace[0-1]:
```

​`make-link`​ 默认使用 `./dev`​ 目录作为插件开发目录；`make-install`​ 默认使用 `./dist`​ 目录作为编译后的插件文件。你可以在命令后面传入其他目录的路径来更换默认的选项，例如:

```bash
npx make-install ./build
```

### `update-version`​/`up-ver`

运行 `npx update-version`​ （`up-ver`​ 是简写版的命令）会自动更新 `package.json`​ 和 `plugin.json`​ 中的 `version`​ 字段，避免手动更改。

```bash
❯❯❯ npx update-version

🌟  Current version: 0.1.0

🔄  How would you like to update the version?

   1️⃣  Auto update patch version   (new version: 0.1.1)
   2️⃣  Auto update minor version   (new version: 0.2.0)
   3️⃣  Auto update major version   (new version: 1.0.0)
   4️⃣  Input version manually
   0️⃣  Quit without updating

👉  Please choose (1/2/3/4):
```

你也可以传入 `patch`​, `minor`​, `major`​ 参数来直接指定更改的版本级别。
