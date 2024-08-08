---
outline: deep
---

# `/api/network`

## `echo` {#echo}

- 🛠 回显请求内容
- `/api/network/echo`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/network/echo/payload.d.ts#content [Types]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/network/echo/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/network/echo/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/network/echo/response.schema.json [JSON Schema (json)]
:::

## `forwardProxy` {#forwardProxy}

- 🔥 前置代理
- `/api/network/forwardProxy`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/network/forwardProxy/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/network/forwardProxy/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/network/forwardProxy/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/network/forwardProxy/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/network/forwardProxy/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/network/forwardProxy/response.schema.json [JSON Schema (json)]
:::
