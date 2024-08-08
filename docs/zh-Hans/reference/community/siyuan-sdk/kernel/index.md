---
outline: deep
---

# 思源内核 API

## 概述

思源内核 API 分为公开的 API 与未公开的 API。

公开的 API 列表可在 [siyuan/API_zh_CN.md](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md) 中查看，这些 API 较稳定，不会轻易修改，修改时也会尽可能保持向后兼容。

未公开的 API 列表可在 [siyuan/kernel/api/router.go](https://github.com/siyuan-note/siyuan/blob/master/kernel/api/router.go) 中查看，这些 API 不稳定，可能会随时修改，修改时也不会保持向后兼容。

本工具包封装了思源内核的全部公开 API 与部分未公开 API，在本页面中公开的 API 使用 🔥 标记，未公开的 API 使用 🛠 标记。

## 索引

- `api`: HTTP API
  - [`asset`](./api/asset.md): 资源文件操作
    - [`upload`](./api/asset.md#upload): 🔥 上传资源文件
  - [`attr`](./api/attr.md): 块属性操作
    - [`getBlockAttrs`](./api/attr.md#getBlockAttrs): 🔥 获取块属性
    - [`getBookmarkLabels`](./api/attr.md#getBookmarkLabels): 🛠 获取所有书签
    - [`setBlockAttrs`](./api/attr.md#setBlockAttrs): 🔥 设置块属性
  - [`block`](./api/block.md): 内容块操作
    - [`appendBlock`](./api/block.md#appendBlock): 🔥 在下级块尾部插入块
    - [`deleteBlock`](./api/block.md#deleteBlock): 🔥 删除块
    - [`foldBlock`](./api/block.md#foldBlock): 🔥 折叠块
    - [`getBlockBreadcrumb`](./api/block.md#getBlockBreadcrumb): 🛠 获取块面包屑
    - [`getBlockDOM`](./api/block.md#getBlockDOM): 🛠 获取块 HTML DOM
    - [`getBlockInfo`](./api/block.md#getBlockInfo): 🛠 获取块信息
    - [`getBlockKramdown`](./api/block.md#getBlockKramdown): 🔥 获取块 [kramdown](https://kramdown.gettalong.org/)
    - [`getChildBlocks`](./api/block.md#getChildBlocks): 🔥 获取下级块
    - [`getDocInfo`](./api/block.md#getDocInfo): 🛠 获取文档信息
    - [`insertBlock`](./api/block.md#insertBlock): 🔥 插入块
    - [`moveBlock`](./api/block.md#moveBlock): 🔥 移动块
    - [`prependBlock`](./api/block.md#prependBlock): 🔥 在下级块首部插入块
    - [`transferBlockRef`](./api/block.md#transferBlockRef): 🔥 转移块引用
    - [`unfoldBlock`](./api/block.md#unfoldBlock): 🔥 展开块
    - [`updateBlock`](./api/block.md#updateBlock): 🔥 更新块
  - [`broadcast`](./api/broadcast.md): 消息广播操作
    - [`getChannelInfo`](./api/broadcast.md#getChannelInfo): 🛠 获取指定消息通道的信息
    - [`getChannels`](./api/broadcast.md#getChannels): 🛠 获取当前所有消息通道的信息
    - [`postMessage`](./api/broadcast.md#postMessage): 🛠 向指定消息通道推送消息
  - [`convert`](./api/convert.md): 文件转换操作
    - [`pandoc`](./api/convert.md#pandoc): 🔥 使用 [Pandoc](https://www.pandoc.org/) 进行文件转换
  - [`export`](./api/export.md): 导出操作
    - [`exportHTML`](./api/export.md#exportHTML): 🛠 获取文档块 HTML 导出文本
    - [`exportMdContent`](./api/export.md#exportMdContent): 🔥 获取文档块 Markdown 导出文本
    - [`exportResources`](./api/export.md#exportResources): 🔥 导出资源文件
  - [`file`](./api/file.md): 文件操作
    - [`getFile`](./api/file.md#getFile): 🔥 获取文件
    - [`putFile`](./api/file.md#putFile): 🔥 写入文件
    - [`readDir`](./api/file.md#readDir): 🔥 获取文件目录下级内容
    - [`removeFile`](./api/file.md#removeFile): 🔥 删除 文件/目录
    - [`renameFile`](./api/file.md#renameFile): 🔥 重命名/移动 文件/目录
  - [`filetree`](./api/filetree.md): 文件树操作
    - [`createDailyNote`](./api/filetree.md#createDailyNote): 🛠 创建每日笔记 (Daily Note)
    - [`createDocWithMd`](./api/filetree.md#createDocWithMd): 🔥 通过 Markdown 创建文档
    - [`getDoc`](./api/filetree.md#getDoc): 🛠 获取文档内容
    - [`getHPathByID`](./api/filetree.md#getHPathByID): 🔥 通过块 ID 获取文档的可读路径
    - [`getHPathByPath`](./api/filetree.md#getHPathByPath): 🔥 通过文档路径获取文档的可读路径
    - [`listDocsByPath`](./api/filetree.md#listDocsByPath): 🛠 通过文档路径获取下级文档列表
    - [`getIDsByHPath`](./api/filetree.md#getIDsByHPath): 🔥 通过人类可读路径获取文档 ID 列表
    - [`moveDocs`](./api/filetree.md#moveDocs): 🔥 移动文档
    - [`removeDoc`](./api/filetree.md#removeDoc): 🔥 删除文档
    - [`renameDoc`](./api/filetree.md#renameDoc): 🔥 重命名文档
    - [`searchDocs`](./api/filetree.md#searchDocs): 🛠 搜索文档
  - [`history`](./api/history.md): 历史操作
    - [`getDocHistoryContent`](./api/history.md#getDocHistoryContent): 🛠 获取历史文档内容
    - [`getHistoryItems`](./api/history.md#getHistoryItems): 🛠 查询历史项
  - [`inbox`](./api/inbox.md): 收集箱操作
    - [`getShorthand`](./api/inbox.md#getShorthand): 🛠 获取收集箱速记内容
  - [`network`](./api/network.md): 网络操作
    - [`echo`](./api/network.md#echo): 🛠 回显请求内容
    - [`forwardProxy`](./api/network.md#forwardProxy): 🔥 前置代理
  - [`notebook`](./api/notebook.md): 笔记本操作
    - [`closeNotebook`](./api/notebook.md#closeNotebook): 🔥 关闭笔记本
    - [`createNotebook`](./api/notebook.md#createNotebook): 🔥 创建笔记本
    - [`getNotebookConf`](./api/notebook.md#getNotebookConf): 🔥 获取笔记本配置
    - [`lsNotebooks`](./api/notebook.md#lsNotebooks): 🔥 列出所有笔记本
    - [`openNotebook`](./api/notebook.md#openNotebook): 🔥 打开笔记本
    - [`removeNotebook`](./api/notebook.md#removeNotebook): 🔥 删除笔记本
    - [`renameNotebook`](./api/notebook.md#renameNotebook): 🔥 重命名笔记本
    - [`setNotebookConf`](./api/notebook.md#setNotebookConf): 🔥 设置笔记本配置
  - [`notification`](./api/notification.md): 消息通知操作
    - [`pushErrMsg`](./api/notification.md#pushErrMsg): 🔥 推送错误消息
    - [`pushMsg`](./api/notification.md#pushMsg): 🔥 推送消息
  - [`query`](./api/query.md): 内容查询操作
    - [`sql`](./api/query.md#sql): 🔥 SQL 查询
  - [`repo`](./api/repo.md): 快照数据仓库操作
    - [`openRepoSnapshotDoc`](./api/repo.md#openRepoSnapshotDoc): 🛠 读取快照文件内容
  - [`search`](./api/search.md): 搜索操作
    - [`fullTextSearchBlock`](./api/search.md#fullTextSearchBlock): 🛠 全文搜索
  - [`snippet`](./api/snippet.md): 代码片段操作
    - [`getSnippet`](./api/snippet.md#getSnippet): 🛠 获取代码片段
    - [`setSnippet`](./api/snippet.md#setSnippet): 🛠 设置代码片段
  - [`sqlite`](./api/sqlite.md): 代码片段操作
    - [`flushTransaction`](./api/sqlite.md#flushTransaction): 🛠 等待业务数据持久化完成
  - [`storage`](./api/storage.md): 存储操作
    - [`getLocalStorage`](./api/storage.md#getLocalStorage): 🛠 获取持久化的本地存储数据
    - [`getRecentDocs`](./api/storage.md#getRecentDocs): 🛠 获取最近打开的文档
    - [`setLocalStorage`](./api/storage.md#setLocalStorage): 🛠 持久化本地存储数据
  - [`system`](./api/system.md): 系统操作
    - [`bootProgress`](./api/system.md#bootProgress): 🔥 获取内核启动进度
    - [`currentTime`](./api/system.md#currentTime): 🔥 获取当前时间
    - [`exit`](./api/system.md#exit): 🛠 退出内核
    - [`getConf`](./api/system.md#getConf): 🛠 获取工作空间完整配置
    - [`logoutAuth`](./api/system.md#logoutAuth): 🛠 注销登录状态
    - [`version`](./api/system.md#version): 🔥 获取内核版本
  - [`template`](./api/template.md): 模板操作
    - [`render`](./api/template.md#render): 🔥 渲染模板
    - [`renderSprig`](./api/template.md#renderSprig): 🔥 渲染 [Sprig](https://masterminds.github.io/sprig/) 模板字符串
- [`ws`](./ws.md): WebSocket API
  - [`broadcast`](./ws.md#broadcast): 🛠 消息广播订阅
