---
outline: deep
---

# 事件总线

| 总线名称                                                                                         | 简介                                       |
| :----------------------------------------------------------------------------------------------- | :----------------------------------------- |
| [`click-blockicon`](#click-blockicon) <Badge type="tip" text="^2.9.0" />                         | ✅ 块菜单打开事件                          |
| [`click-editorcontent`](#click-editorcontent) <Badge type="tip" text="^2.9.0" />                 | ✅ 编辑区点击事件                          |
| [`click-editortitleicon`](#click-editortitleicon) <Badge type="tip" text="^2.9.0" />             | ✅ 文档块菜单打开事件                      |
| [`click-flashcard-action`](#click-flashcard-action) <Badge type="tip" text="^2.12.8" />          | ✅ 点击闪卡选项事件                        |
| [`click-pdf`](#click-pdf) <Badge type="tip" text="^2.9.0" />                                     | ✅ PDF 注释菜单打开事件                    |
| [`destroy-protyle`](#destroy-protyle) <Badge type="tip" text="^2.10.2" />                        | ✅ 编辑器关闭事件                          |
| [`input-search`](#input-search) <Badge type="tip" text="^2.9.6" />                               | ✅ 搜索输入框内容变更事件                  |
| [`loaded-protyle-dynamic`](#loaded-protyle-dynamic) <Badge type="tip" text="^2.10.2" />          | ✅ 编辑器内容动态加载事件                  |
| [`loaded-protyle-static`](#loaded-protyle-static) <Badge type="tip" text="^2.10.12" />           | ✅ 编辑器内容静态加载事件                  |
| [`loaded-protyle`](#loaded-protyle) <Badge type="danger" text="2.9.0 ~ 2.10.12" />               | 🚫 编辑器加载事件                          |
| [`lock-screen`](#lock-screen) <Badge type="tip" text="^2.12.0" />                                | ✅ 锁屏事件                                |
| [`mobile-keyboard-hide`](#mobile-keyboard-hide) <Badge type="tip" text="^2.11.1" />              | ✅ 移动端隐藏悬浮键盘                      |
| [`mobile-keyboard-show`](#mobile-keyboard-show) <Badge type="tip" text="^2.11.1" />              | ✅ 移动端显示悬浮键盘                      |
| [`open-menu-av`](#open-menu-av) <Badge type="tip" text="^2.9.4" />                               | ✅ 属性视图右键菜单打开事件                |
| [`open-menu-blockref`](#open-menu-blockref) <Badge type="tip" text="^2.9.4" />                   | ✅ 块引用右键菜单打开事件                  |
| [`open-menu-breadcrumbmore`](#open-menu-breadcrumbmore) <Badge type="tip" text="^2.9.4" />       | ✅ 面包屑`更多`菜单打开事件                |
| [`open-menu-content`](#open-menu-content) <Badge type="tip" text="^2.9.4" />                     | ✅ 文本划选右键菜单打开事件                |
| [`open-menu-doctree`](#open-menu-doctree) <Badge type="tip" text="^2.10.9" />                    | ✅ 文档树右键菜单打开事件                  |
| [`open-menu-fileannotationref`](#open-menu-fileannotationref) <Badge type="tip" text="^2.9.4" /> | ✅ 附件引用右键菜单打开事件                |
| [`open-menu-image`](#open-menu-image) <Badge type="tip" text="^2.9.4" />                         | ✅ 图片菜单打开事件                        |
| [`open-menu-inbox`](#open-menu-inbox) <Badge type="tip" text="^2.12.0" />                        | ✅ 云收集箱右键菜单打开事件                |
| [`open-menu-link`](#open-menu-link) <Badge type="tip" text="^2.9.4" />                           | ✅ 超链接右键菜单打开事件                  |
| [`open-menu-tag`](#open-menu-tag) <Badge type="tip" text="^2.9.4" />                             | ✅ 标签右键菜单打开事件                    |
| [`open-noneditableblock`](#open-noneditableblock) <Badge type="tip" text="^2.9.0" />             | ✅ 文本编辑框打开事件                      |
| [`open-siyuan-url-block`](#open-siyuan-url-block) <Badge type="tip" text="^2.10.0" />            | ✅ 打开思源超链接 `siyuan://blocks/` 事件  |
| [`open-siyuan-url-plugin`](#open-siyuan-url-plugin) <Badge type="tip" text="^2.10.0" />          | ✅ 打开思源超链接 `siyuan://plugins/` 事件 |
| [`paste`](#paste) <Badge type="tip" text="^2.10.12" />                                           | ✅ 剪贴板粘贴事件                          |
| [`switch-protyle`](#switch-protyle) <Badge type="tip" text="^2.10.13" />                         | ✅ 编辑器切换事件                          |
| [`sync-end`](#sync-end) <Badge type="tip" text="^2.11.1" />                                      | ✅ 同步结束事件                            |
| [`sync-fail`](#sync-fail) <Badge type="tip" text="^2.11.1" />                                    | ✅ 同步失败事件                            |
| [`sync-start`](#sync-start) <Badge type="tip" text="^2.11.1" />                                  | ✅ 同步开始事件                            |
| [`ws-main`](#ws-main) <Badge type="tip" text="^2.9.0" />                                         | ✅ 编辑事件 & 其他消息事件                 |

- ✅: [思源最新版本](https://github.com/siyuan-note/siyuan/releases/latest)可用
  - ![思源最新版本](https://img.shields.io/github/release/siyuan-note/siyuan.svg?style=flat-square&color=9CF)
- 🧪: 实验性功能
- ⚠: 强烈反对，在未来可能被移除
- 🚫: 已移除

## `click-blockicon` <Badge type="tip" text="^2.9.0" /> {#click-blockicon}

- 块菜单打开事件
- 参考: [Issue #5066 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/5066)

## `click-editorcontent` <Badge type="tip" text="^2.9.0" /> {#click-editorcontent}

- 编辑区点击事件
- 参考: [Issue #5066 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/5066)

## `click-editortitleicon` <Badge type="tip" text="^2.9.0" /> {#click-editortitleicon}

- 文档块菜单打开事件
- 参考: [Issue #5066 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/5066)

## `click-flashcard-action` <Badge type="tip" text="^2.12.8" /> {#click-flashcard-action}

- 点击闪卡选项事件
- 参考: [Issue #10318 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/10318)

## `click-pdf` <Badge type="tip" text="^2.9.0" /> {#click-pdf}

- PDF 注释菜单打开事件
- 参考: [Issue #5066 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/5066)

## `destroy-protyle` <Badge type="tip" text="^2.10.2" /> {#destroy-protyle}

- 编辑器关闭事件
- 参考: [Issue #9033 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9033)

## `input-search` <Badge type="tip" text="^2.9.6" /> {#input-search}

- 搜索输入框内容变更事件
- 参考: [Issue #8725 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8725)

## `loaded-protyle-dynamic` <Badge type="tip" text="^2.10.2" /> {#loaded-protyle-dynamic}

- 编辑器内容动态加载事件
- 参考: [Issue #9021 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9021)

## `loaded-protyle-static` <Badge type="tip" text="^2.10.12" /> {#loaded-protyle-static}

- 编辑器内容静态加载事件
- 参考: [Issue #9468 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9468)

## `loaded-protyle` <Badge type="danger" text="2.9.0 ~ 2.10.12" /> {#loaded-protyle}

- 编辑器加载事件
- 参考: [Issue #9468 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9468)

## `lock-screen` <Badge type="tip" text="^2.12.0" /> {#lock-screen}

- 锁屏事件
- 参考: [Issue #10006 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/10006)

## `mobile-keyboard-hide` <Badge type="tip" text="^2.11.1" /> {#mobile-keyboard-hide}

- 移动端隐藏悬浮键盘
- 参考: [Issue #9773 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9773)

## `mobile-keyboard-show` <Badge type="tip" text="^2.11.1" /> {#mobile-keyboard-show}

- 移动端显示悬浮键盘
- 参考: [Issue #9773 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9773)

## `open-menu-av` <Badge type="tip" text="^2.9.4" /> {#open-menu-av}

- 属性视图右键菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-blockref` <Badge type="tip" text="^2.9.4" /> {#open-menu-blockref}

- 块引用右键菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-breadcrumbmore` <Badge type="tip" text="^2.9.4" /> {#open-menu-breadcrumbmore}

- 面包屑`更多`菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-content` <Badge type="tip" text="^2.9.4" /> {#open-menu-content}

- 文本划选右键菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-doctree` <Badge type="tip" text="^2.10.9" /> {#open-menu-doctree}

- 文档树右键菜单打开事件
- 参考: [Issue #9351 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9351)

## `open-menu-fileannotationref` <Badge type="tip" text="^2.9.4" /> {#open-menu-fileannotationref}

- 附件引用右键菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-image` <Badge type="tip" text="^2.9.4" /> {#open-menu-image}

- 图片菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-inbox` <Badge type="tip" text="^2.12.0" /> {#open-menu-inbox}

- 云收集箱右键菜单打开事件
- 参考: [Pull Request #9967 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/9967)

## `open-menu-link` <Badge type="tip" text="^2.9.4" /> {#open-menu-link}

- 超链接右键菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-menu-tag` <Badge type="tip" text="^2.9.4" /> {#open-menu-tag}

- 标签右键菜单打开事件
- 参考: [Issue #8617 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/8617)

## `open-noneditableblock` <Badge type="tip" text="^2.9.0" /> {#open-noneditableblock}

- 文本编辑框打开事件
- 参考: [Issue #5066 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/5066)

## `open-siyuan-url-block` <Badge type="tip" text="^2.10.0" /> {#open-siyuan-url-block}

- 打开思源超链接 `siyuan://blocks/` 事件
- 参考: [Pull Request #8927 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/8927)

## `open-siyuan-url-plugin` <Badge type="tip" text="^2.10.0" /> {#open-siyuan-url-plugin}

- 打开思源超链接 `siyuan://plugins/` 事件
- 参考: [Pull Request #8927 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/pull/8927)

## `paste` <Badge type="tip" text="^2.10.12" /> {#paste}

- 剪贴板粘贴事件
- 参考: [Issue #9452 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9452)

## `switch-protyle` <Badge type="tip" text="^2.10.13" /> {#switch-protyle}

- 编辑器切换事件
- 参考: [Issue #9454 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9454)

## `sync-end` <Badge type="tip" text="^2.11.1" /> {#sync-end}

- 同步结束事件
- 参考: [Issue #9798 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9798)

## `sync-fail` <Badge type="tip" text="^2.11.1" /> {#sync-fail}

- 同步失败事件
- 参考: [Issue #9798 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9798)

## `sync-start` <Badge type="tip" text="^2.11.1" /> {#sync-start}

- 同步开始事件
- 参考: [Issue #9798 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/9798)

## `ws-main` <Badge type="tip" text="^2.9.0" /> {#ws-main}

- 编辑事件 & 其他消息事件
- 参考: [Issue #5066 · siyuan-note/siyuan · GitHub](https://github.com/siyuan-note/siyuan/issues/5066)
