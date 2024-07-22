# `class Plugin`

## 属性

| Property   | Type               | Description                                                                                       |
| :--------- | :----------------- | :------------------------------------------------------------------------------------------------ |
| `eventBus` | `EventBus`         | EventBus 对象，可以通过调用它的 `on` 方法来接受思源的事件                                         |
| `i18n`     | `IObject`          | Object 对象，结构同在 `i18n` 目录下的 json 文件。                                                 |
| `data`     | `any`              |                                                                                                   |
| `name`     | `string`           |                                                                                                   |
| `app`      | `App`              | 包含 plugins 和 appId 两个属性，plugins是当前所有已运行插件的实例，appId 为部分函数需要传入的参数 |
| `commands` | `ICommandOption[]` |                                                                                                   |
| `setting`  | `Setting`          |                                                                                                   |

## `onload`

- 函数签名

  ```ts
  onload(): void;
  ```

- 说明

  插件初始化函数，思源在初始化的时候会调用该方法。

  ```ts
  // https://github.com/siyuan-note/siyuan/blob/master/app/src/plugin/loader.ts
  try {
      await plugin.onload();
  }
  catch (e) {
      console.error(`plugin ${item.name} onload error:`, e);
  }
  ```

## `onunload`

- 函数签名

  ```ts
  onunload(): void;
  ```

- 说明

  插件的“析构函数”，当插件被禁用的时候，会调用此方法。

## `onLayoutReady`

- 函数签名

  ```ts
  onLayoutReady(): void;
  ```

- 描述

  TODO

## `addTopBar`

- 函数签名

  ```ts
  addTopBar(options: {
      icon: string,
      title: string,
      callback: (event: MouseEvent) => void,
      position?: "right" | "left"
  }): HTMLElement;
  ```

- 描述

  为插件在顶栏添加一个图标

- 参数

  - `icon`：图标，可以是一个定义好的 Symbol 标识符，也可以是一个 svg html
  - `title`：图标文本，当鼠标悬浮到图标上的时候会显示对应 title 的 tooltip
  - `callback`: 鼠标点击的回调函数
  - `position`: 图标显示在顶栏的左侧还是右侧

## `addStatusBar`

- 函数签名

  ```ts
  addStatusBar(options: {
      element: HTMLElement,
      position?: "right" | "left"
  }): HTMLElement;
  ```

- 描述

  TODO

## `openSetting`

- 函数签名

  ```ts
  openSetting(): void;
  ```

- 描述

  TODO

## `loadData`

- 函数签名

  ```ts
  loadData(storageName: string): Promise<any>;
  ```

- 描述

  TODO

## `saveData`

- 函数签名

  ```ts
  saveData(storageName: string, content: any): Promise<void>;
  ```

- 描述

  TODO

## `removeData`

- 函数签名

  ```ts
  removeData(storageName: string): Promise<any>;
  ```

- 描述

  TODO

## `addIcons`

- 函数签名

  ```ts
  addIcons(svg: string): void;
  ```

- 描述

  TODO

## `addTab`

- 函数签名

  ```ts
  addTab(options: {
      type: string,
      destroy?: () => void,
      resize?: () => void,
      update?: () => void,
      init: () => void
  }): () => IModel;
  ```

- 描述

  TODO

## `addDock`

- 函数签名

  ```ts
  addDock(options: {
      config: IPluginDockTab,
      data: any,
      type: string,
      destroy?: () => void,
      resize?: () => void,
      update?: () => void,
      init: () => void
  }): { config: IPluginDockTab, model: IModel };
  ```

- 描述

  TODO

## `addCommand`

- 函数签名

  ```ts
  addCommand(options: ICommandOption): void;
  ```

- 描述

  TODO

## `addFloatLayer`

- 函数签名

  ```ts
  addFloatLayer(options: {
      ids: string[],
      defIds?: string[],
      x?: number,
      y?: number,
      targetElement?: HTMLElement
  }): void;
  ```

- 描述

  TODO
