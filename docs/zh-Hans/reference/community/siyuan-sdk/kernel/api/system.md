---
outline: deep
---

# `/api/system`

## `bootProgress` {#bootProgress}

- 🔥 获取内核启动进度
- `/api/system/bootProgress`

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/bootProgress/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/bootProgress/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/bootProgress/response.schema.json [JSON Schema (json)]
:::

## `currentTime` {#currentTime}

- 🔥 获取当前时间
- `/api/system/currentTime`

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/currentTime/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/currentTime/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/currentTime/response.schema.json [JSON Schema (json)]
:::

## `exit` {#exit}

- 🛠 退出内核
- `/api/system/exit`

---

**请求**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/exit/payload.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/exit/payload.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/exit/payload.schema.json [JSON Schema (json)]
:::

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/exit/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/exit/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/exit/response.schema.json [JSON Schema (json)]
:::

## `getConf` {#getConf}

- 🛠 获取工作空间完整配置
- `/api/system/getConf`

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/getConf/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/getConf/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/getConf/response.schema.json [JSON Schema (json)]
:::

## `logoutAuth` {#logoutAuth}

- 🛠 注销登录状态
- `/api/system/logoutAuth`

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/logoutAuth/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/logoutAuth/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/logoutAuth/response.schema.json [JSON Schema (json)]
:::

## `version` {#version}

- 🔥 获取内核版本
- `/api/system/version`

---

**响应**

::: code-group
<<< @/snippets/siyuan-sdk/types/kernel/api/system/version/response.d.ts#content [Types]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/version/response.schema.json5 [JSON Schema (json5)]
<<< @/snippets/siyuan-sdk/schemas/kernel/api/system/version/response.schema.json [JSON Schema (json)]
:::
