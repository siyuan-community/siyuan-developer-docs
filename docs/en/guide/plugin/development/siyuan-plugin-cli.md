---
title: siyuan-plugin-cli tool
locale: zh
document: 20241002194147-b3nhpsy
notebook: Life
hpath: /杂项关注/思源笔记/思源插件开发Tips/siyuan-plugin-cli/siyuan-plugin-cli EN
export: '2024-10-02 19:46:56'
---

[siyuan-plugin-cli](https://www.npmjs.com/package/siyuan-plugin-cli) is an npm cli program that provides some tools for SiYuan plugin development.

Installation:

```bash
npm install -g siyuan-plugin-cli
```

## Basic Functions

### Create Plugin Project in Terminal

Run `npx create-sy-plugin`​ or `npx create-plugin`​, to create a plugin from a template.

This command provides an interactive command line:

- Enter the basic information of the plugin
- Select the plugin template
- Create the plugin project from the template (essentially `git clone`​ to local)
- Update the basic information of the local plugin project's package.json and plugin.json

You can also choose whether to upload the plugin to GitHub directly. If you agree, the cli program will:

- Automatically create a new repository

  - This may require you to enter the GitHub API key
  - You can cache it locally after entering it once (stored in the `~/.siyuan-plugin-cli`​ file), so you don't need to re-enter it next time

- Apply to automatically enable the repository's workflow permissions to directly use the relevant ci scripts in the template
- Push the local files to the remote repository

​![image](/frostime/image-20241002191846-5prokwg.png)

### make-link and make-install

To facilitate the quick import of developed plugins into SiYuan for debugging and running, the cli program provides two commands.

- ​`npx make-link`​ creates a symbolic link to the SiYuan plugin directory

  - Links the `dev`​ directory under plugin development to the `plugins`​ directory under the SiYuan plugin directory
  - Note: On Windows, it is recommended to run `npx make-link-win`

- ​`npx make-install`​ installs the plugin to the SiYuan plugin directory

  - Copies the files in the `dist`​ directory under plugin development to the SiYuan plugin directory

> ⚠️ Note: **On Windows, administrator privileges are required to create symbolic links**. You have two options:
>
> 1. Run `npx make-link`​ in administrator mode
> 2. Use `npx make-link-win`​ to automatically request administrator privileges.

When running these two commands, please ensure that SiYuan is running, so the program will first automatically obtain all workspaces, and then the user can select which workspace to bind to.

```bash
❯❯❯ npx make-link
>>> Try to visit constant "targetDir" in make_dev_link.js...
>>> Constant "targetDir" is empty, try to get SiYuan directory automatically....
>>> Got 2 SiYuan workspaces
        [0] C:\Users\EEG\Documents\思源笔记
        [1] H:\临时文件夹\SiYuanDevSpace
        Please select a workspace[0-1]:
```

​`make-link`​ uses the `./dev`​ directory as the plugin development directory by default; `make-install`​ uses the `./dist`​ directory as the compiled plugin files by default. You can pass other directory paths after the command to change the default options, for example:

```bash
npx make-install ./build
```

### `update-version`​/`up-ver`

Running `npx update-version`​ (`up-ver`​ is the short version of the command) will automatically update the `version`​ field in `package.json`​ and `plugin.json`​, avoiding manual changes.

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

You can also pass `patch`​, `minor`​, `major`​ parameters to directly specify the version level to change.
