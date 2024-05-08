---
outline: deep
---

# `/api/broadcast`

## `getChannelInfo` {#getChannelInfo}

- 🛠 获取指定消息通道的信息
- `/api/broadcast/getChannelInfo`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/broadcast/getChannelInfo/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/getChannelInfo/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/getChannelInfo/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/broadcast/getChannelInfo/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/getChannelInfo/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/getChannelInfo/response.schema.json [JSON Schema (json)]
:::

## `getChannels` {#getChannels}

- 🛠 获取当前所有消息通道的信息
- `/api/broadcast/getChannels`

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/broadcast/getChannels/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/getChannels/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/getChannels/response.schema.json [JSON Schema (json)]
:::

## `postMessage` {#postMessage}

- 🛠 向指定消息通道推送消息
- `/api/broadcast/postMessage`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/broadcast/postMessage/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/postMessage/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/postMessage/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/broadcast/postMessage/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/postMessage/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/broadcast/postMessage/response.schema.json [JSON Schema (json)]
:::
