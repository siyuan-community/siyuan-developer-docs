# 类型于接口

## `type TEventBus`

```ts
type TEventBus = "ws-main" |
    "click-blockicon" | "click-editorcontent" | "click-pdf" | "click-editortitleicon" |
    "open-noneditableblock" |
    "open-menu-blockref" | "open-menu-fileannotationref" | "open-menu-tag" | "open-menu-link" | "open-menu-image" |
    "open-menu-av" | "open-menu-content" |
    "open-menu-breadcrumbmore" |
    "input-search" |
    "loaded-protyle"
```

表示不同的事件名称。这些事件将作为 [`EventBus`](./class/EventBus.md) 类的输入参数，以实现思源和插件之间的通信。


详细解释见[事件总线](../../../guide/plugin/development/event-bus/index.md)。


---

## `type TCardType`

```ts
type TCardType = "doc" | "notebook" | "all"
```


| Name                  | Explanation               |
|-----------------------|---------------------------|
| `"doc"`               | TODO |
| `"notebook"`          | TODO |
| `"all"`               | TODO |



---

## `interface ITab`

```ts
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



* `id`: `string`, TODO
* `headElement`: `HTMLElement`, TODO
* `panelElement`: `HTMLElement`, TODO
* `model`: `IModel`, TODO
* `title`: `string`, TODO
* `icon`: `string`, TODO
* `docIcon`: `string`, TODO
* `updateTitle`: `(title: string) => void`, TODO
* `pin`: `() => void`, TODO
* `unpin`: `() => void`, TODO
* `setDocIcon`: `(icon: string) => void`, TODO
* `close`: `() => void`, TODO

---

## `interface IModel`

```ts
interface IModel {
    element: Element;
    tab: ITab;
    data: any;
    type: string;
}
```



* `element`: `Element`, TODO
* `tab`: `ITab`, TODO
* `data`: `any`, TODO
* `type`: `string`, TODO

---

(以下接口的文档模板省略，您可以按照上面的示例继续生成相应的文档模板)

## `interface IObject`

```ts
interface IObject {
    [key: string]: string;
}
```

## `interface I18N`

```ts
interface I18N {
    [key: string]: any;
}
```

## `interface ILuteNode`

```ts
interface ILuteNode {
    TokensStr: () => string;
    __internal_object__: {
        Parent: {
            Type: number,
        },
        HeadingLevel: string,
    };
}
```

## `interface ISearchOption`

```ts
interface ISearchOption {
    page?: number
    group?: number,
    hasReplace?: boolean,
    method?: number
    hPath?: string
    idPath?: string[]
    k: string
    r?: string
    types?: {
        mathBlock: boolean
        table: boolean
        blockquote: boolean
        superBlock: boolean
        paragraph: boolean
        document: boolean
        heading: boolean
        list: boolean
        listItem: boolean
        codeBlock: boolean
        htmlBlock: boolean
        embedBlock: boolean
    }
}
```

* `page`: `number`, TODO
* `group`: `number`, TODO
* `hasReplace`: `boolean`, TODO
* `method`: `number`, TODO
* `hPath`: `string`, TODO
* `idPath`: `string[]`, TODO
* `k`: `string`, TODO
* `r`: `string`, TODO
* `types`: TODO
    * `mathBlock`: `boolean`, TODO
    * `table`: `boolean`, TODO
    * `blockquote`: `boolean`, TODO
    * `superBlock`: `boolean`, TODO
    * `paragraph`: `boolean`, TODO
    * `document`: `boolean`, TODO
    * `heading`: `boolean`, TODO
    * `list`: `boolean`, TODO
    * `listItem`: `boolean`, TODO
    * `codeBlock`: `boolean`, TODO
    * `htmlBlock`: `boolean`, TODO
    * `embedBlock`: `boolean`, TODO

## `interface IWebSocketData`

```ts
interface IWebSocketData {
    cmd: string
    callback?: string
    data: any
    msg: string
    code: number
    sid: string
}
```

* `cmd`: `string`, TODO
* `callback`: `string | undefined`, TODO
* `data`: `any`, TODO
* `msg`: `string`, TODO
* `code`: `number`, TODO
* `sid`: `string`, TODO

## `interface IPluginDockTab`

```ts
interface IPluginDockTab {
    position: "LeftTop" | "LeftBottom" | "RightTop" | "RightBottom" | "BottomLeft" | "BottomRight",
    size: { width: number, height: number },
    icon: string,
    hotkey?: string,
    title: string,
    index?: number,
    show?: boolean
}
```

* `position`: `"LeftTop" | "LeftBottom" | "RightTop" | "RightBottom" | "BottomLeft" | "BottomRight"`, TODO
* `size`: `{ width: number; height: number }`, TODO
* `icon`: `string`, TODO
* `hotkey`: `string | undefined`, TODO
* `title`: `string`, TODO
* `index`: `number | undefined`, TODO
* `show`: `boolean | undefined`, TODO


## `interface IMenuItemOption`

```ts
interface IMenuItemOption {
    label?: string,
    click?: (element: HTMLElement) => void,
    type?: "separator" | "submenu" | "readonly",
    accelerator?: string,
    action?: string,
    id?: string,
    submenu?: IMenuItemOption[]
    disabled?: boolean
    icon?: string
    iconHTML?: string
    current?: boolean
    bind?: (element: HTMLElement) => void
    index?: number
    element?: HTMLElement
}
```

* `label`: `string | undefined`, TODO
* `click`: `(element: HTMLElement) => void | undefined`, TODO
* `type`: `"separator" | "submenu" | "readonly" | undefined`, TODO
* `accelerator`: `string | undefined`, TODO
* `action`: `string | undefined`, TODO
* `id`: `string | undefined`, TODO
* `submenu`: `IMenuItemOption[] | undefined`, TODO (nested list)

* `disabled`: `boolean | undefined`, TODO
* `icon`: `string | undefined`, TODO
* `iconHTML`: `string | undefined`, TODO
* `current`: `boolean | undefined`, TODO
* `bind`: `(element: HTMLElement) => void | undefined`, TODO
* `index`: `number | undefined`, TODO
* `element`: `HTMLElement | undefined`, TODO

## `interface ICommandOption`

```ts
interface ICommandOption {
    langKey: string,
    langText?: string,
    hotkey: string,
    customHotkey?: string,
    callback?: () => void
    fileTreeCallback?: (file: any) => void
    editorCallback?: (protyle: any) => void
    dockCallback?: (element: HTMLElement) => void
}
```

* `langKey`: `string`, TODO
* `langText`: `string | undefined`, TODO
* `hotkey`: `string`, TODO
* `customHotkey`: `string | undefined`, TODO
* `callback`: `() => void | undefined`, TODO
* `fileTreeCallback`: `(file: any) => void | undefined`, TODO
* `editorCallback`: `(protyle: any) => void | undefined`, TODO
* `dockCallback`: `(element: HTMLElement) => void | undefined`, TODO

## `interface IProtyleOption`

```ts
interface IProtyleOption {
    action?: string[],
    mode?: "preview" | "wysiwyg",
    blockId: string
    key?: string
    scrollAttr?: {
        rootId: string,
        startId: string,
        endId: string
        scrollTop: number,
        focusId?: string,
        focusStart?: number
        focusEnd?: number
        zoomInId?: string
    }
    defId?: string
    render?: {
        background?: boolean
        title?: boolean
        gutter?: boolean
        scroll?: boolean
        breadcrumb?: boolean
        breadcrumbDocName?: boolean
    }
    typewriterMode?: boolean;

    after?(protyle: Protyle): void;
}
```

* `action`: `string[] | undefined`, TODO
* `mode`: `"preview" | "wysiwyg" | undefined`, TODO
* `blockId`: `string`, TODO
* `key`: `string | undefined`, TODO
* `scrollAttr`: TODO
    * `rootId`: `string`, TODO
    * `startId`: `string`, TODO
    * `endId`: `string`, TODO
    * `scrollTop`: `number`, TODO
    * `focusId`: `string | undefined`, TODO
    * `focusStart`: `number | undefined`, TODO
    * `focusEnd`: `number | undefined`, TODO
    * `zoomInId`: `string | undefined`, TODO
* `defId`: `string | undefined`, TODO
* `render`: TODO
    * `background`: `boolean | undefined`, TODO
    * `title`: `boolean | undefined`, TODO
    * `gutter`: `boolean | undefined`, TODO
    * `scroll`: `boolean | undefined`, TODO
    * `breadcrumb`: `boolean | undefined`, TODO
    * `breadcrumbDocName`: `boolean | undefined`, TODO
* `typewriterMode`: `boolean | undefined`, TODO
* `after`: `(protyle: Protyle) => void | undefined`, TODO
