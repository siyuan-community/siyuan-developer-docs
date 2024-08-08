---
outline: deep
---

# 贡献内容

思源开发者社区离不开大家的共同维护，也欢迎新朋友参与到文档编辑工作中来。

## 我不会弄这么复杂的东西，该如何做？

如果这些东西很复杂的话，你可以直接在论坛中发贴你的内容，标题上写上[siyuan-developer-docs]，我们可以帮助你把文档放到对应的位置。

## 如何深度贡献你的文档

如果你想深度参与到本站的建设中，需要你稍微了解一些计算机相关的知识:

1. git / github
2. node / npm / pnpm
3. vuepress
4. 编辑器的使用，例如vscode

### Fork代码及clone

首先，你需要在github上fork[本工程](https://github.com/siyuan-community/siyuan-developer-docs), 例如https://github.com/zuoez02/siyuan-developer-docs，然后再clone到本地。
关于git如何使用，推荐这篇文章 [还不会使用 GitHub ？ GitHub 教程来了！万字图文详解](https://zhuanlan.zhihu.com/p/369486197)

```bash
git clone https://github.com/YOUR-NAME/siyuan-developer-docs
```

### 安装依赖

在编辑器中打开工程，然后需要你本地已安装好node,并以安装好pnpm
关于如何安装node、pnpm，推荐这两篇文章: [如何安装Nodejs](https://www.runoob.com/nodejs/nodejs-install-setup.html), [如何安装Pnpm](https://juejin.cn/post/7207094325897297957)

```bash
pnpm install
```

### 开始编辑

如果你已经掌握了这些知识，可以开始本地调试模式并编写文章啦

```bash
pnpm run docs:dev
```

### 发布你的代码及Pull Request

使用git命令推送你的代码

```bash
git add .
git commit -m "your commit message"
git push
```

然后在Github上提交PR申请，交由社区文档维护者审核即可，可以参考这篇文章: [如何在 GitHub 提交第一个 pull request - freeCodeCamp.org](https://www.freecodecamp.org/chinese/news/how-to-make-your-first-pull-request-on-github/)
