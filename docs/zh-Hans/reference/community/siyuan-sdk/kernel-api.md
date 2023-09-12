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
  - `asset`: 资源文件操作
    - `upload`: 🔥 上传资源文件
  - `attr`: 块属性操作
    - `getBlockAttrs`: 🔥 获取块属性
    - `getBookmarkLabels`: 🛠 获取所有书签
    - `setBlockAttrs`: 🔥 设置块属性
  - `block`: 内容块操作
    - `appendBlock`: 🔥 在下级块尾部插入块
    - `deleteBlock`: 🔥 删除块
    - `getBlockBreadcrumb`: 🛠 获取块面包屑
    - `getBlockDOM`: 🛠 获取块 HTML DOM
    - `getBlockInfo`: 🛠 获取块信息
    - `getBlockKramdown`: 🔥 获取块 [kramdown](https://kramdown.gettalong.org/)
    - `getChildBlocks`: 🔥 获取下级块
    - `getDocInfo`: 🛠 获取文档信息
    - `insertBlock`: 🔥 插入块
    - `moveBlock`: 🔥 移动块
    - `prependBlock`: 🔥 在下级块首部插入块
    - `transferBlockRef`: 🔥 转移块引用
    - `updateBlock`: 🔥 更新块
  - `broadcast`: 消息广播操作
    - `channels`: 🛠 获取当前所有消息通道的信息
    - `getChannelInfo`: 🛠 获取指定消息通道的信息
    - `postMessage`: 🛠 向指定消息通道推送消息
  - `convert`: 文件转换操作
    - `pandoc`: 🔥 使用 [Pandoc](https://www.pandoc.org/) 进行文件转换
  - `export`: 导出操作
    - `exportMdContent`: 🔥 获取文档块 Markdown 导出文本
    - `exportResources`: 🔥 导出资源文件
  - `file`: 文件操作
    - `getFile`: 🔥 获取文件
    - `putFile`: 🔥 写入文件
    - `readDir`: 🔥 获取文件目录下级内容
    - `removeFile`: 🔥 删除 文件/目录
    - `renameFile`: 🔥 重命名/移动 文件/目录
  - `filetree`: 文件树操作
    - `createDocWithMd`: 🔥 通过 Markdown 创建文档
    - `getDoc`: 🛠 获取文档内容
    - `getHPathByID`: 🔥 通过块 ID 获取文档的可读路径
    - `getHPathByPath`: 🔥 通过文档路径获取文档的可读路径
    - `listDocsByPath`: 🛠 通过文档路径获取下级文档列表
    - `moveDocs`: 🔥 移动文档
    - `removeDoc`: 🔥 删除文档
    - `renameDoc`: 🔥 重命名文档
    - `searchDocs`: 🛠 搜索文档
  - `history`: 历史操作
    - `getDocHistoryContent`: 🛠 获取历史文档内容
    - `getHistoryItems`: 🛠 查询历史项
  - `inbox`: 收集箱操作
    - `getShorthand`: 🛠 获取收集箱速记内容
  - `network`: 网络操作
    - `forwardProxy`: 🔥 前置代理
  - `notebook`: 笔记本操作
    - `closeNotebook`: 🔥 关闭笔记本
    - `createNotebook`: 🔥 创建笔记本
    - `getNotebookConf`: 🔥 获取笔记本配置
    - `lsNotebooks`: 🔥 列出所有笔记本
    - `openNotebook`: 🔥 打开笔记本
    - `removeNotebook`: 🔥 删除笔记本
    - `renameNotebook`: 🔥 重命名笔记本
    - `setNotebookConf`: 🔥 设置笔记本配置
  - `notification`: 消息通知操作
    - `pushErrMsg`: 🔥 推送错误消息
    - `pushMsg`: 🔥 推送消息
  - `query`: 内容查询操作
    - `sql`: 🔥 SQL 查询
  - `repo`: 快照数据仓库操作
    - `openRepoSnapshotDoc`: 🛠 读取快照文件内容
  - `search`: 搜索操作
  - `snippet`: 代码片段操作
    - `getSnippet`: 🛠 获取代码片段
    - `setSnippet`: 🛠 设置代码片段
  - `storage`: 存储操作
    - `getRecentDocs`: 🛠 获取最近打开的文档
  - `system`: 系统操作
    - `bootProgress`: 🔥 获取内核启动进度
    - `currentTime`: 🔥 获取当前时间
    - `version`: 🔥 获取内核版本
  - `template`: 模板操作
    - `render`: 🔥 渲染模板
    - `renderSprig`: 🔥 渲染 [Sprig](https://masterminds.github.io/sprig/) 模板字符串
- `ws`: WebSocket API
  - `broadcast`: 🛠 消息广播订阅

### `api`

#### `asset`

#### `attr`

#### `block`

#### `broadcast`

#### `convert`

#### `export`

#### `file`

#### `filetree`

#### `history`

#### `inbox`

#### `network`

#### `notebook`

#### `notification`

#### `query`

#### `repo`

#### `search`

#### `snippet`

#### `storage`

#### `system`

#### `template`

### `ws`

#### `broadcast`
