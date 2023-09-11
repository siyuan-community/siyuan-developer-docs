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
  - `attr`: 块属性操作
  - `block`: 内容块操作
  - `broadcast`: 消息广播操作
  - `convert`: 文件转换操作
  - `export`: 导出操作
  - `file`: 文件操作
  - `filetree`: 文件树操作
  - `history`: 历史操作
  - `inbox`: 收集箱操作
  - `network`: 网络操作
  - `notebook`: 笔记本操作
  - `notification`: 消息通知操作
  - `query`: 内容查询操作
  - `repo`: 快照数据仓库操作
  - `search`: 搜索操作
  - `snippet`: 代码片段操作
  - `storage`: 存储操作
  - `system`: 系统操作
  - `template`: 模板操作
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
