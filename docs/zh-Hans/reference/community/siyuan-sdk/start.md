---
outline: deep
---

# 开始

## 安装

```bash
# 使用 npm
$ npm install @siyuan-community/siyuan-sdk

# 使用 pnpm
$ pnpm i @siyuan-community/siyuan-sdk

# 使用 yarn
$ yarn add @siyuan-community/siyuan-sdk
```

## 初始化客户端

### 默认配置

```typescript
import { Client } from "@siyuan-community/siyuan-sdk";

/* 初始化客户端 (默认使用 Axios 发起 XHR 请求) */
const client = new Client({
    /**
     * (可选) 思源内核服务地址
     * @default: document.baseURI
     */
    baseURL: "http://localhost:6806/",

    /**
     * (可选) 思源内核服务 token
     * @default: <空>
     */
    token: "0123456789abcdef", // , 默认为空

    /**
     * (可选) Axios 其他请求配置
     * REF: https://axios-http.com/zh/docs/req_config
     * REF: https://www.axios-http.cn/docs/req_config
     */
});
```

- [Axios](https://axios-http.com/zh/) 请求配置文档
  - [请求配置 | Axios Docs](https://axios-http.com/zh/docs/req_config)
  - [请求配置 | Axios 中文文档 | Axios 中文网](https://www.axios-http.cn/docs/req_config)

### 配置为 `XHR` 客户端

```typescript
import { Client } from "@siyuan-community/siyuan-sdk";

/* 初始化为 XHR 客户端 (使用 Axios 发起 XHR 请求) */
const client = new Client(
    {
    /**
     * (可选) 思源内核服务地址
     * @default: document.baseURI
     */
        baseURL: "http://localhost:6806/",

        /**
         * (可选) 思源内核服务 token
         * @default: <空>
         */
        token: "0123456789abcdef", // , 默认为空

    /**
     * (可选) Axios 其他请求配置
     * REF: https://axios-http.com/zh/docs/req_config
     * REF: https://www.axios-http.cn/docs/req_config
     */
    },
    "xhr",
);
```

- [Axios](https://axios-http.com/zh/) 请求配置文档
  - [请求配置 | Axios Docs](https://axios-http.com/zh/docs/req_config)
  - [请求配置 | Axios 中文文档 | Axios 中文网](https://www.axios-http.cn/docs/req_config)

### 配置为 `Fetch` 客户端

```typescript
import { Client } from "@siyuan-community/siyuan-sdk";

/* 初始化为 Fetch 客户端 (使用 ofetch 发起 Fetch 请求) */
const client = new Client(
    {
    /**
     * (可选) 思源内核服务地址
     * @default: document.baseURI
     */
        baseURL: "http://localhost:6806/",

        /**
         * (可选) 思源内核服务 token
         * @default: <空>
         */
        token: "0123456789abcdef", // , 默认为空

    /**
     * (可选) ofetch 其他请求配置
     * REF: https://www.npmjs.com/package/ofetch
     * REF: https://www.jsdocs.io/package/ofetch
     */
    },
    "fetch",
);
```

- [ofetch](https://github.com/unjs/ofetch) 请求配置文档
  - [ofetch - npm](https://www.npmjs.com/package/ofetch)
  - [ofetch - jsDocs.io](https://www.jsdocs.io/package/ofetch)

## 更改配置

### 更改 HTTP 客户端模式

```typescript
client._setClientType("fetch"); // 将客户端模式更改为 Fetch
client._setClientType("xhr"); // 将客户端模式更改为 XHR
```

### 更新客户端全局配置

```typescript
/* 默认更新当前模式的全局配置 */
client._updateOptions({
    token: "abcdef0123456789", // 将思源 API token 更改为 abcdef0123456789
});

/* 更新 XHR 客户端 Axios 的全局配置 */
client._updateOptions(
    {
        timeout: 10_000, // 请求超时时间为 10s
    /* 其他 Axios 请求配置 */
    },
    "xhr",
);

/* 更新 Fetch 客户端 ofetch 的全局配置 */
client._updateOptions(
    {
        retry: 3, // 请求重试次数为 3 次
    /* 其他 ofetch 请求配置 */
    },
    "fetch",
);
```
