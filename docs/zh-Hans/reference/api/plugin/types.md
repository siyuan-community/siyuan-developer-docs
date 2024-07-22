# 类型与接口定义

- 类型与接口定义模块 [siyuan - npm](https://www.npmjs.com/package/siyuan)

## `type IEventBusMap`

```typescript
interface IEventBusMap {
    "click-blockicon": {
        menu: EventMenu;
        protyle: IProtyle;
        blockElements: HTMLElement[];
    };
    "click-editorcontent": {
        protyle: IProtyle;
        event: MouseEvent;
    };
    "click-editortitleicon": {
        menu: EventMenu;
        protyle: IProtyle;
        data: IGetDocInfo;
    };
    "click-flashcard-action": {
        card: ICard;
        type: string;
    };
    "click-pdf": {
        event: MouseEvent;
    };
    "destroy-protyle": {
        protyle: IProtyle;
    };
    "input-search": {
        protyle: Protyle;
        config: ISearchOption;
        searchElement: HTMLInputElement;
    };
    "loaded-protyle-dynamic": {
        protyle: IProtyle;
        position: "afterend" | "beforebegin";
    };
    "loaded-protyle-static": {
        protyle: IProtyle;
    };
    "lock-screen": void;
    "mobile-keyboard-show": void;
    "mobile-keyboard-hide": void;
    "open-menu-av": IMenuBaseDetail & { selectRowElements: HTMLElement[] };
    "open-menu-blockref": IMenuBaseDetail;
    "open-menu-breadcrumbmore": {
        menu: EventMenu;
        protyle: IProtyle;
        data: IGetTreeStat;
    };
    "open-menu-content": IMenuBaseDetail & { range: Range };
    "open-menu-fileannotationref": IMenuBaseDetail;
    "open-menu-image": IMenuBaseDetail;
    "open-menu-link": IMenuBaseDetail;
    "open-menu-tag": IMenuBaseDetail;
    "open-menu-doctree": {
        menu: EventMenu;
        elements: NodeListOf<HTMLElement>;
        type: "doc" | "docs" | "notebook";
    };
    "open-menu-inbox": {
        menu: EventMenu;
        element: HTMLElement;
        ids: string[];
    };
    "open-noneditableblock": {
        protyle: IProtyle;
        toolbar: Toolbar;
    };
    "open-siyuan-url-block": {
        url: string;
        id: string;
        focus: boolean;
        exist: boolean;
    };
    "open-siyuan-url-plugin": {
        url: string;
    };
    "paste": {
        protyle: IProtyle;
        resolve: new<T>(value: PromiseLike<T> | T) => void;
        textHTML: string;
        textPlain: string;
        siyuanHTML: string;
        files: DataTransferItemList | FileList;
    };
    "switch-protyle": {
        protyle: IProtyle;
    };
    "sync-end": IWebSocketData;
    "sync-fail": IWebSocketData;
    "sync-start": IWebSocketData;
    "ws-main": IWebSocketData;
}
```

表示不同的事件名称与事件对应的 `detail` 属性。这些事件将作为 [`EventBus`](./class/EventBus.md) 类的输入参数，以实现思源和插件之间的通信。

详情请参考 [事件总线](./event-bus/)。

---

## `type TCardType`

```typescript
type TCardType = "all" | "doc" | "notebook";
```

| Name         | Explanation        |
| ------------ | ------------------ |
| `"doc"`      | 文档目录下的闪卡   |
| `"notebook"` | 笔记本目录下的闪卡 |
| `"all"`      | 所有闪卡           |

---

## `interface ITab`

```typescript
interface ITab {
    id: string;
    headElement: HTMLElement;
    panelElement: HTMLElement;
    model: IModel;
    title: string;
    icon: string;
    docIcon: string;
    updateTitle: (title: string) => void;
    pin: () => void;
    unpin: () => void;
    setDocIcon: (icon: string) => void;
    close: () => void;
}
```

- `id`: `string`, TODO
- `headElement`: `HTMLElement`, TODO
- `panelElement`: `HTMLElement`, TODO
- `model`: `IModel`, TODO
- `title`: `string`, TODO
- `icon`: `string`, TODO
- `docIcon`: `string`, TODO
- `updateTitle`: `(title: string) => void`, TODO
- `pin`: `() => void`, TODO
- `unpin`: `() => void`, TODO
- `setDocIcon`: `(icon: string) => void`, TODO
- `close`: `() => void`, TODO

---

## `interface IModel`

```typescript
interface IModel {
    element: Element;
    tab: ITab;
    data: any;
    type: string;
}
```

- `element`: `Element`, TODO
- `tab`: `ITab`, TODO
- `data`: `any`, TODO
- `type`: `string`, TODO

---

(以下接口的文档模板省略，您可以按照上面的示例继续生成相应的文档模板)

## `interface IObject`

```typescript
interface IObject {
    [key: string]: string;
}
```

## `interface I18N`

```typescript
interface I18N {
    [key: string]: any;
}
```

## `interface ILuteNode`

```typescript
interface ILuteNode {
    TokensStr: () => string;
    __internal_object__: {
        Parent: {
            Type: number;
        };
        HeadingLevel: string;
    };
}
```

## `interface ISearchOption`

```typescript
interface ISearchOption {
    page?: number;
    group?: number;
    hasReplace?: boolean;
    method?: number;
    hPath?: string;
    idPath?: string[];
    k: string;
    r?: string;
    types?: {
        mathBlock: boolean;
        table: boolean;
        blockquote: boolean;
        superBlock: boolean;
        paragraph: boolean;
        document: boolean;
        heading: boolean;
        list: boolean;
        listItem: boolean;
        codeBlock: boolean;
        htmlBlock: boolean;
        embedBlock: boolean;
    };
}
```

- `page`: `number`, TODO
- `group`: `number`, TODO
- `hasReplace`: `boolean`, TODO
- `method`: `number`, TODO
- `hPath`: `string`, TODO
- `idPath`: `string[]`, TODO
- `k`: `string`, TODO
- `r`: `string`, TODO
- `types`: TODO
  - `mathBlock`: `boolean`, TODO
  - `table`: `boolean`, TODO
  - `blockquote`: `boolean`, TODO
  - `superBlock`: `boolean`, TODO
  - `paragraph`: `boolean`, TODO
  - `document`: `boolean`, TODO
  - `heading`: `boolean`, TODO
  - `list`: `boolean`, TODO
  - `listItem`: `boolean`, TODO
  - `codeBlock`: `boolean`, TODO
  - `htmlBlock`: `boolean`, TODO
  - `embedBlock`: `boolean`, TODO

## `interface IWebSocketData`

```typescript
interface IWebSocketData {
    cmd: string;
    callback?: string;
    data: any;
    msg: string;
    code: number;
    sid: string;
}
```

- `cmd`: `string`, TODO
- `callback`: `string | undefined`, TODO
- `data`: `any`, TODO
- `msg`: `string`, TODO
- `code`: `number`, TODO
- `sid`: `string`, TODO

## `interface IPluginDockTab`

```typescript
interface IPluginDockTab {
    position: "BottomLeft" | "BottomRight" | "LeftBottom" | "LeftTop" | "RightBottom" | "RightTop";
    size: { width: number; height: number };
    icon: string;
    hotkey?: string;
    title: string;
    index?: number;
    show?: boolean;
}
```

- `position`: `"LeftTop" | "LeftBottom" | "RightTop" | "RightBottom" | "BottomLeft" | "BottomRight"`, TODO
- `size`: `{ width: number; height: number }`, TODO
- `icon`: `string`, TODO
- `hotkey`: `string | undefined`, TODO
- `title`: `string`, TODO
- `index`: `number | undefined`, TODO
- `show`: `boolean | undefined`, TODO

## `interface IMenuItemOption`

```typescript
interface IMenuItemOption {
    label?: string;
    click?: (element: HTMLElement) => void;
    type?: "readonly" | "separator" | "submenu";
    accelerator?: string;
    action?: string;
    id?: string;
    submenu?: IMenuItemOption[];
    disabled?: boolean;
    icon?: string;
    iconHTML?: string;
    current?: boolean;
    bind?: (element: HTMLElement) => void;
    index?: number;
    element?: HTMLElement;
}
```

- `label`: `string | undefined`, TODO
- `click`: `(element: HTMLElement) => void | undefined`, TODO
- `type`: `"separator" | "submenu" | "readonly" | undefined`, TODO
- `accelerator`: `string | undefined`, TODO
- `action`: `string | undefined`, TODO
- `id`: `string | undefined`, TODO
- `submenu`: `IMenuItemOption[] | undefined`, TODO (nested list)

- `disabled`: `boolean | undefined`, TODO
- `icon`: `string | undefined`, TODO
- `iconHTML`: `string | undefined`, TODO
- `current`: `boolean | undefined`, TODO
- `bind`: `(element: HTMLElement) => void | undefined`, TODO
- `index`: `number | undefined`, TODO
- `element`: `HTMLElement | undefined`, TODO

## `interface ICommandOption`

```typescript
interface ICommandOption {
    langKey: string;
    langText?: string;
    hotkey: string;
    customHotkey?: string;
    callback?: () => void;
    fileTreeCallback?: (file: any) => void;
    editorCallback?: (protyle: any) => void;
    dockCallback?: (element: HTMLElement) => void;
}
```

- `langKey`: `string`, TODO
- `langText`: `string | undefined`, TODO
- `hotkey`: `string`, TODO
- `customHotkey`: `string | undefined`, TODO
- `callback`: `() => void | undefined`, TODO
- `fileTreeCallback`: `(file: any) => void | undefined`, TODO
- `editorCallback`: `(protyle: any) => void | undefined`, TODO
- `dockCallback`: `(element: HTMLElement) => void | undefined`, TODO

## `interface IProtyleOption`

```typescript
interface IProtyleOption {
    action?: string[];
    mode?: "preview" | "wysiwyg";
    blockId: string;
    key?: string;
    scrollAttr?: {
        rootId: string;
        startId: string;
        endId: string;
        scrollTop: number;
        focusId?: string;
        focusStart?: number;
        focusEnd?: number;
        zoomInId?: string;
    };
    defId?: string;
    render?: {
        background?: boolean;
        title?: boolean;
        gutter?: boolean;
        scroll?: boolean;
        breadcrumb?: boolean;
        breadcrumbDocName?: boolean;
    };
    typewriterMode?: boolean;

    after?: (protyle: Protyle) => void;
}
```

- `action`: `string[] | undefined`, TODO
- `mode`: `"preview" | "wysiwyg" | undefined`, TODO
- `blockId`: `string`, TODO
- `key`: `string | undefined`, TODO
- `scrollAttr`: TODO
  - `rootId`: `string`, TODO
  - `startId`: `string`, TODO
  - `endId`: `string`, TODO
  - `scrollTop`: `number`, TODO
  - `focusId`: `string | undefined`, TODO
  - `focusStart`: `number | undefined`, TODO
  - `focusEnd`: `number | undefined`, TODO
  - `zoomInId`: `string | undefined`, TODO
- `defId`: `string | undefined`, TODO
- `render`: TODO
  - `background`: `boolean | undefined`, TODO
  - `title`: `boolean | undefined`, TODO
  - `gutter`: `boolean | undefined`, TODO
  - `scroll`: `boolean | undefined`, TODO
  - `breadcrumb`: `boolean | undefined`, TODO
  - `breadcrumbDocName`: `boolean | undefined`, TODO
- `typewriterMode`: `boolean | undefined`, TODO
- `after`: `(protyle: Protyle) => void | undefined`, TODO
