---
outline: deep
---

# `/api/filetree`

## `createDailyNote` {#createDailyNote}

- 🛠 创建每日笔记 (Daily Note)
- `/api/filetree/createDailyNote`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/createDailyNote/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDailyNote/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDailyNote/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/createDailyNote/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDailyNote/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDailyNote/response.schema.json [JSON Schema (json)]
:::

## `createDocWithMd` {#createDocWithMd}

- 🔥 通过 Markdown 创建文档
- `/api/filetree/createDocWithMd`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/createDocWithMd/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDocWithMd/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDocWithMd/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/createDocWithMd/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDocWithMd/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/createDocWithMd/response.schema.json [JSON Schema (json)]
:::

## `getDoc` {#getDoc}

- 🛠 获取文档内容
- `/api/filetree/getDoc`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getDoc/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getDoc/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getDoc/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getDoc/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getDoc/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getDoc/response.schema.json [JSON Schema (json)]
:::

## `getHPathByID` {#getHPathByID}

- 🔥 通过块 ID 获取文档的可读路径
- `/api/filetree/getHPathByID`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getHPathByID/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByID/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByID/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getHPathByID/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByID/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByID/response.schema.json [JSON Schema (json)]
:::

## `getHPathByPath` {#getHPathByPath}

- 🔥 通过文档路径获取文档的可读路径
- `/api/filetree/getHPathByPath`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getHPathByPath/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByPath/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByPath/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getHPathByPath/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByPath/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getHPathByPath/response.schema.json [JSON Schema (json)]
:::

## `listDocsByPath` {#listDocsByPath}

- 🛠 通过文档路径获取下级文档列表
- `/api/filetree/listDocsByPath`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/listDocsByPath/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/listDocsByPath/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/listDocsByPath/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/listDocsByPath/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/listDocsByPath/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/listDocsByPath/response.schema.json [JSON Schema (json)]
:::

## `getIDsByHPath` {#getIDsByHPath}

- 🔥 通过文档路径获取下级文档列表
- `/api/filetree/getIDsByHPath`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getIDsByHPath/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getIDsByHPath/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getIDsByHPath/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/getIDsByHPath/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getIDsByHPath/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/getIDsByHPath/response.schema.json [JSON Schema (json)]
:::

## `moveDocs` {#moveDocs}

- 🔥 移动文档
- `/api/filetree/moveDocs`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/moveDocs/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/moveDocs/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/moveDocs/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/moveDocs/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/moveDocs/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/moveDocs/response.schema.json [JSON Schema (json)]
:::

## `removeDoc` {#removeDoc}

- 🔥 删除文档
- `/api/filetree/removeDoc`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/removeDoc/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/removeDoc/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/removeDoc/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/removeDoc/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/removeDoc/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/removeDoc/response.schema.json [JSON Schema (json)]
:::

## `renameDoc` {#renameDoc}

- 🔥 重命名文档
- `/api/filetree/renameDoc`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/renameDoc/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/renameDoc/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/renameDoc/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/renameDoc/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/renameDoc/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/renameDoc/response.schema.json [JSON Schema (json)]
:::

## `searchDocs` {#searchDocs}

- 🛠 搜索文档
- `/api/filetree/searchDocs`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/searchDocs/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/searchDocs/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/searchDocs/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/filetree/searchDocs/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/searchDocs/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/filetree/searchDocs/response.schema.json [JSON Schema (json)]
:::
