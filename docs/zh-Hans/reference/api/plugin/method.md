# 插件方法

## `fetchPost`

- 函数签名

  ```ts
  export function fetchPost(url: string, data?: any, callback?: (response: IWebSocketData) => void, headers?: IObject): void;
  ```

- 描述

  #TODO

- 参数

  - `url`: `string`
  - `data`: `any` (可选)
  - `callback`: `(response: IWebSocketData) => void` (可选)
  - `headers`: `IObject` (可选)

- 返回值

  `void`

## `fetchSyncPost`

- 函数签名

  ```ts
  export function fetchSyncPost(url: string, data?: any): Promise<IWebSocketData>;
  ```

- 描述

  #TODO

- 参数

  - `url`: `string`
  - `data`: `any` (可选)

- 返回值

  `Promise<IWebSocketData>`

## `fetchGet`

- 函数签名

  ```ts
  export function fetchGet(url: string, callback: (response: IWebSocketData) => void): void;
  ```

- 描述

  #TODO

- 参数

  - `url`: `string`
  - `callback`: `(response: IWebSocketData) => void`

- 返回值

  `void`

## `openTab`

- 函数签名

  ```ts
  export function openTab(options: {
      app: App;
      doc?: {
          id: string; // 块 id
          action?: string[]; // cb-get-all：获取所有内容；cb-get-focus：打开后光标定位在 id 所在的块；cb-get-hl: 打开后 id 块高亮
          zoomIn?: boolean; // 是否缩放
      };
      pdf?: {
          path: string;
          page?: number; // pdf 页码
          id?: string; // File Annotation id
      };
      asset?: {
          path: string;
      };
      search?: ISearchOption;
      card?: {
          type: TCardType;
          id?: string; //  cardType 为 all 时不传，否则传文档或笔记本 id
          title?: string; //  cardType 为 all 时不传，否则传文档或笔记本名称
      };
      custom?: {
          title: string;
          icon: string;
          data?: any;
          fn?: () => IModel;
      };
      position?: "bottom" | "right";
      keepCursor?: boolean; // 是否跳转到新 tab 上
      removeCurrentTab?: boolean; // 在当前页签打开时需移除原有页签
      afterOpen?: () => void; // 打开后回调
  }): ITab;
  ```

- 描述

  #TODO

- 参数

  - `options`:
    - `app`: `App`
    - `doc`: `{ id: string, action?: string[], zoomIn?: boolean }` (可选)
    - `pdf`: `{ path: string, page?: number, id?: string }` (可选)
    - `asset`: `{ path: string }` (可选)
    - `search`: `ISearchOption` (可选)
    - `card`: `{ type: TCardType, id?: string, title?: string }` (可选)
    - `custom`: `{ title: string, icon: string, data?: any, fn?: () => IModel }` (可选)
    - `position`: `"right" | "bottom"`
    - `keepCursor`: `boolean` (可选)
    - `removeCurrentTab`: `boolean` (可选)
    - `afterOpen`: `() => void` (可选)

- 返回值

  `ITab`

## `getFrontend`

- 函数签名

  ```ts
  export function getFrontend(): "browser-desktop" | "browser-mobile" | "desktop-window" | "desktop" | "mobile";
  ```

- 描述

  #TODO

- 返回值

  `"desktop" | "desktop-window" | "mobile" | "browser-desktop" | "browser-mobile"`

## `getBackend`

- 函数签名

  ```ts
  export function getBackend(): "android" | "darwin" | "docker" | "ios" | "linux" | "windows";
  ```

- 描述

  #TODO

- 返回值

  `"windows" | "linux" | "darwin" | "docker" | "android" | "ios"`

## `adaptHotkey`

- 函数签名

  ```ts
  export function adaptHotkey(hotkey: string): string;
  ```

- 描述

  #TODO

- 参数

  - `hotkey`: `string`

- 返回值

  `string`

## `confirm`

- 函数签名

  ```ts
  export function confirm(title: string, text: string, confirmCallback?: () => void, cancelCallback?: () => void): void;
  ```

- 描述

  #TODO

- 参数

  - `title`: `string`
  - `text`: `string`
  - `confirmCallback`: `() => void` (可选)
  - `cancelCallback`: `() => void` (可选)

- 返回值

  `void`

## `showMessage`

- 函数签名

  ```ts
  export function showMessage(text: string, timeout?: number, type?: "error" | "info", id?: string): void;
  ```

- 描述

  #TODO

- 参数

  - `text`: `string`
  - `timeout`: `number` (可选) - ms. 0: manual close；-1: always show; 6000: default
  - `type`: `"info" | "error"` (可选)
  - `id`: `string` (可选)

- 返回值

  `void`
