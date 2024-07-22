---
outline: deep
---

# SiYuan SDK

[![NPM](https://nodei.co/npm/@siyuan-community/siyuan-sdk.png?stars=true&downloads=true&downloadRank=true)](https://www.npmjs.com/package/@siyuan-community/siyuan-sdk)

| 作者                                              | GitHub 仓库                                                                                                                                                                                                                                                                                                               | npm                                                                                                                                                                                                                                                                         | 语言环境                       |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [Zuoqiu-Yingyi](https://github.com/Zuoqiu-Yingyi) | [siyuan-community/siyuan-sdk](https://github.com/siyuan-community/siyuan-sdk)<br/> [![GitHub 最新发行版本 (最新一次发行/预发行)](https://img.shields.io/github/v/release/siyuan-community/siyuan-sdk?include_prereleases&style=flat-square)](https://github.com/Zuoqiu-Yingyi/siyuan-plugin-custom-fonts/releases/latest) | [@siyuan-community/siyuan-sdk](https://www.npmjs.com/package/@siyuan-community/siyuan-sdk)<br/> [![NPM 版本](https://img.shields.io/npm/v/%40siyuan-community/siyuan-sdk?style=flat-square)](https://www.npmjs.com/package/@siyuan-community/siyuan-sdk?activeTab=versions) | `JavaScript`<br/> `TypeScript` |

## 介绍

这是一个简单易用的 [思源笔记](https://github.com/siyuan-note/siyuan) 开发工具包 (SDK)，可以帮助开发者更快的开发插件与挂件。

- **100%** 的测试覆盖率
- 封装了思源内核**全部**公开的 API
- 封装了思源内核部分未公开的 API
- 提供对应 API 的完整 [JSON Schema](https://json-schema.org/) 定义
- 同时支持 [XHR](https://developer.mozilla.org/zh-CN/docs/Glossary/XMLHttpRequest) 与 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
  - 使用 [Axios](https://github.com/axios/axios) 发起 XHR 请求
  - 使用 [ofetch](https://github.com/unjs/ofetch) 发起 Fetch 请求

## 导航

- [开始](./start.md)
- [思源内核 API](./kernel/)
- [思源文件系统](./file-system.md)
