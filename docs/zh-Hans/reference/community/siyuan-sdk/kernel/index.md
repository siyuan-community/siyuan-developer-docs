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
  - [`asset`](./kernel/api/asset.md): 资源文件操作
    - [`upload`](./kernel/api/asset.md#upload): 🔥 上传资源文件
  - [`attr`](./kernel/api/attr.md): 块属性操作
    - [`getBlockAttrs`](./kernel/api/attr.md#getblockattrs): 🔥 获取块属性
    - [`getBookmarkLabels`](./kernel/api/attr.md#getbookmarklabels): 🛠 获取所有书签
    - [`setBlockAttrs`](./kernel/api/attr.md#setblockattrs): 🔥 设置块属性
  - [`block`](./kernel/api/block.md): 内容块操作
    - [`appendBlock`](./kernel/api/block.md#appendblock): 🔥 在下级块尾部插入块
    - [`deleteBlock`](./kernel/api/block.md#deleteblock): 🔥 删除块
    - [`getBlockBreadcrumb`](./kernel/api/block.md#getblockbreadcrumb): 🛠 获取块面包屑
    - [`getBlockDOM`](./kernel/api/block.md#getblockdom): 🛠 获取块 HTML DOM
    - [`getBlockInfo`](./kernel/api/block.md#getblockinfo): 🛠 获取块信息
    - [`getBlockKramdown`](./kernel/api/block.md#getblockkramdown): 🔥 获取块 [kramdown](https://kramdown.gettalong.org/)
    - [`getChildBlocks`](./kernel/api/block.md#getchildblocks): 🔥 获取下级块
    - [`getDocInfo`](./kernel/api/block.md#getdocinfo): 🛠 获取文档信息
    - [`insertBlock`](./kernel/api/block.md#insertblock): 🔥 插入块
    - [`moveBlock`](./kernel/api/block.md#moveblock): 🔥 移动块
    - [`prependBlock`](./kernel/api/block.md#prependblock): 🔥 在下级块首部插入块
    - [`transferBlockRef`](./kernel/api/block.md#transferblockref): 🔥 转移块引用
    - [`updateBlock`](./kernel/api/block.md#updateblock): 🔥 更新块
  - [`broadcast`](./kernel/api/broadcast.md): 消息广播操作
    - [`channels`](./kernel/api/broadcast.md#channels): 🛠 获取当前所有消息通道的信息
    - [`getChannelInfo`](./kernel/api/broadcast.md#getchannelinfo): 🛠 获取指定消息通道的信息
    - [`postMessage`](./kernel/api/broadcast.md#postmessage): 🛠 向指定消息通道推送消息
  - [`convert`](./kernel/api/convert.md): 文件转换操作
    - [`pandoc`](./kernel/api/convert.md#pandoc): 🔥 使用 [Pandoc](https://www.pandoc.org/) 进行文件转换
  - [`export`](./kernel/api/export.md): 导出操作
    - [`exportMdContent`](./kernel/api/export.md#exportmdcontent): 🔥 获取文档块 Markdown 导出文本
    - [`exportResources`](./kernel/api/export.md#exportresources): 🔥 导出资源文件
  - [`file`](./kernel/api/file.md): 文件操作
    - [`getFile`](./kernel/api/file.md#getfile): 🔥 获取文件
    - [`putFile`](./kernel/api/file.md#putfile): 🔥 写入文件
    - [`readDir`](./kernel/api/file.md#readdir): 🔥 获取文件目录下级内容
    - [`removeFile`](./kernel/api/file.md#removefile): 🔥 删除 文件/目录
    - [`renameFile`](./kernel/api/file.md#renamefile): 🔥 重命名/移动 文件/目录
  - [`filetree`](./kernel/api/filetree.md): 文件树操作
    - [`createDocWithMd`](./kernel/api/filetree.md#createdocwithmd): 🔥 通过 Markdown 创建文档
    - [`getDoc`](./kernel/api/filetree.md#getdoc): 🛠 获取文档内容
    - [`getHPathByID`](./kernel/api/filetree.md#gethpathbyid): 🔥 通过块 ID 获取文档的可读路径
    - [`getHPathByPath`](./kernel/api/filetree.md#gethpathbypath): 🔥 通过文档路径获取文档的可读路径
    - [`listDocsByPath`](./kernel/api/filetree.md#listdocsbypath): 🛠 通过文档路径获取下级文档列表
    - [`moveDocs`](./kernel/api/filetree.md#movedocs): 🔥 移动文档
    - [`removeDoc`](./kernel/api/filetree.md#removedoc): 🔥 删除文档
    - [`renameDoc`](./kernel/api/filetree.md#renamedoc): 🔥 重命名文档
    - [`searchDocs`](./kernel/api/filetree.md#searchdocs): 🛠 搜索文档
  - [`history`](./kernel/api/history.md): 历史操作
    - [`getDocHistoryContent`](./kernel/api/history.md#getdochistorycontent): 🛠 获取历史文档内容
    - [`getHistoryItems`](./kernel/api/history.md#gethistoryitems): 🛠 查询历史项
  - [`inbox`](./kernel/api/inbox.md): 收集箱操作
    - [`getShorthand`](./kernel/api/inbox.md#getshorthand): 🛠 获取收集箱速记内容
  - [`network`](./kernel/api/network.md): 网络操作
    - [`forwardProxy`](./kernel/api/network.md#forwardproxy): 🔥 前置代理
  - [`notebook`](./kernel/api/notebook.md): 笔记本操作
    - [`closeNotebook`](./kernel/api/notebook.md#closenotebook): 🔥 关闭笔记本
    - [`createNotebook`](./kernel/api/notebook.md#createnotebook): 🔥 创建笔记本
    - [`getNotebookConf`](./kernel/api/notebook.md#getnotebookconf): 🔥 获取笔记本配置
    - [`lsNotebooks`](./kernel/api/notebook.md#lsnotebooks): 🔥 列出所有笔记本
    - [`openNotebook`](./kernel/api/notebook.md#opennotebook): 🔥 打开笔记本
    - [`removeNotebook`](./kernel/api/notebook.md#removenotebook): 🔥 删除笔记本
    - [`renameNotebook`](./kernel/api/notebook.md#renamenotebook): 🔥 重命名笔记本
    - [`setNotebookConf`](./kernel/api/notebook.md#setnotebookconf): 🔥 设置笔记本配置
  - [`notification`](./kernel/api/notification.md): 消息通知操作
    - [`pushErrMsg`](./kernel/api/notification.md#pusherrmsg): 🔥 推送错误消息
    - [`pushMsg`](./kernel/api/notification.md#pushmsg): 🔥 推送消息
  - [`query`](./kernel/api/query.md): 内容查询操作
    - [`sql`](./kernel/api/query.md#sql): 🔥 SQL 查询
  - [`repo`](./kernel/api/repo.md): 快照数据仓库操作
    - [`openRepoSnapshotDoc`](./kernel/api/repo.md#openreposnapshotdoc): 🛠 读取快照文件内容
  - [`search`](./kernel/api/search.md): 搜索操作
    - [`fullTextSearchBlock`](./kernel/api/search.md#fulltextsearchblock): 🛠 全文搜索
  - [`snippet`](./kernel/api/snippet.md): 代码片段操作
    - [`getSnippet`](./kernel/api/snippet.md#getsnippet): 🛠 获取代码片段
    - [`setSnippet`](./kernel/api/snippet.md#setsnippet): 🛠 设置代码片段
  - [`storage`](./kernel/api/storage.md): 存储操作
    - [`getRecentDocs`](./kernel/api/storage.md#getrecentdocs): 🛠 获取最近打开的文档
  - [`system`](./kernel/api/system.md): 系统操作
    - [`bootProgress`](./kernel/api/system.md#bootprogress): 🔥 获取内核启动进度
    - [`currentTime`](./kernel/api/system.md#currenttime): 🔥 获取当前时间
    - [`version`](./kernel/api/system.md#version): 🔥 获取内核版本
  - [`template`](./kernel/api/template.md): 模板操作
    - [`render`](./kernel/api/template.md#render): 🔥 渲染模板
    - [`renderSprig`](./kernel/api/template.md#rendersprig): 🔥 渲染 [Sprig](https://masterminds.github.io/sprig/) 模板字符串
- [`ws`](./kernel/ws.md): WebSocket API
  - [`broadcast`](./kernel/ws.md#broadcast): 🛠 消息广播订阅
