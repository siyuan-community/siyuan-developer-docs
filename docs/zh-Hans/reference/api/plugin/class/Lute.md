# `Lute`

> [!TIP]
> Lute 是由 go 语言项目 [88250/lute](https://github.com/88250/lute) 通过 [GopherJS](https://github.com/gopherjs/gopherjs) 转换为 JavaScript 代码生成的。其在思源中通过引入 js 文件的方式直接挂载到全局对象下，所以在[siyuan](https://github.com/siyuan-note/siyuan)项目中只有 TypeScript 类定义(`declare`)，没有实际的源代码。

下面是根据给定的 TypeScript 类定义生成的说明文档模板：

## 属性

| Property           | Type     | Description |
| :----------------- | :------- | :---------- |
| `WalkStop`         | `number` | #TODO       |
| `WalkSkipChildren` | `number` | #TODO       |
| `WalkContinue`     | `number` | #TODO       |
| `Version`          | `string` | #TODO       |
| `Caret`            | `string` | #TODO       |

## 静态方法: `New`

- 函数签名

  ```ts
  public static New(): Lute;
  ```

- 描述

  New 创建一个新的 Lute 引擎。

  默认启用的解析选项：

  - GFM 支持
  - 脚注
  - 标题自定义 ID
  - Emoji 别名替换，比如 :heart: 替换为 ❤️
  - YAML Front Matter

  默认启用的渲染选项：

  - 软换行转硬换行
  - 代码块语法高亮
  - 中西文间插入空格
  - 修正术语拼写
  - 标题自定义 ID

## 静态方法: `EChartsMindmapStr`

- 函数签名

  ```ts
  public static EChartsMindmapStr(text: string): string;
  ```

- 描述

  #TODO

## 静态方法: `NewNodeID`

- 函数签名

  ```ts
  public static NewNodeID(): string;
  ```

- 描述

  #TODO

## 静态方法: `Sanitize`

- 函数签名

  ```ts
  public static Sanitize(html: string): string;
  ```

- 描述

  #TODO

## 静态方法: `EscapeHTMLStr`

- 函数签名

  ```ts
  public static EscapeHTMLStr(str: string): string;
  ```

- 描述

  #TODO

## 静态方法: `UnEscapeHTMLStr`

- 函数签名

  ```ts
  public static UnEscapeHTMLStr(str: string): string;
  ```

- 描述

  #TODO

## 静态方法: `GetHeadingID`

- 函数签名

  ```ts
  public static GetHeadingID(node: ILuteNode): string;
  ```

- 描述

  #TODO

## 静态方法: `BlockDOM2Content`

- 函数签名

  ```ts
  public static BlockDOM2Content(html: string): string;
  ```

- 描述

  #TODO

## 构造函数

- 函数签名

  ```ts
  private constructor();
  ```

- 描述

  #TODO

## 方法: `BlockDOM2Content`

- 函数签名

  ```ts
  public BlockDOM2Content(text: string): string;
  ```

- 描述

  #TODO

## 方法: `BlockDOM2EscapeMarkerContent`

- 函数签名

  ```ts
  public BlockDOM2EscapeMarkerContent(text: string): string;
  ```

- 描述

  #TODO

## 方法: `SetTextMark`

- 函数签名

  ```ts
  public SetTextMark(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetHeadingID`

- 函数签名

  ```ts
  public SetHeadingID(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetProtyleMarkNetImg`

- 函数签名

  ```ts
  public SetProtyleMarkNetImg(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetSpellcheck`

- 函数签名

  ```ts
  public SetSpellcheck(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetFileAnnotationRef`

- 函数签名

  ```ts
  public SetFileAnnotationRef(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetSetext`

- 函数签名

  ```ts
  public SetSetext(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetYamlFrontMatter`

- 函数签名

  ```ts
  public SetYamlFrontMatter(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetChineseParagraphBeginningSpace`

- 函数签名

  ```ts
  public SetChineseParagraphBeginningSpace(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetRenderListStyle`

- 函数签名

  ```ts
  public SetRenderListStyle(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetImgPathAllowSpace`

- 函数签名

  ```ts
  public SetImgPathAllowSpace(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetKramdownIAL`

- 函数签名

  ```ts
  public SetKramdownIAL(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `BlockDOM2Md`

- 函数签名

  ```ts
  public BlockDOM2Md(html: string): string;
  ```

- 描述

  #TODO

## 方法: `BlockDOM2StdMd`

- 函数签名

  ```ts
  public BlockDOM2StdMd(html: string): string;
  ```

- 描述

  #TODO

## 方法: `SetGitConflict`

- 函数签名

  ```ts
  public SetGitConflict(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetSuperBlock`

- 函数签名

  ```ts
  public SetSuperBlock(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetTag`

- 函数签名

  ```ts
  public SetTag(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetMark`

- 函数签名

  ```ts
  public SetMark(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetSub`

- 函数签名

  ```ts
  public SetSub(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetSup`

- 函数签名

  ```ts
  public SetSup(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetBlockRef`

- 函数签名

  ```ts
  public SetBlockRef(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetSanitize`

- 函数签名

  ```ts
  public SetSanitize(enable: boolean): void;
  ```

- 描述

  SetSanitize 设置为 true 时表示对输出进行 XSS 过滤。该方法定义在`lute.go`文件中。

  > [!WARNING]
  > 根据官方描述，Lute 目前的实现存在一些漏洞，请不要依赖它来防御 XSS 攻击。

## 方法: `SetHeadingAnchor`

- 函数签名

  ```ts
  public SetHeadingAnchor(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetImageLazyLoading`

- 函数签名

  ```ts
  public SetImageLazyLoading(imagePath: string): void;
  ```

- 描述

  #TODO

## 方法: `SetInlineMathAllowDigitAfterOpenMarker`

- 函数签名

  ```ts
  public SetInlineMathAllowDigitAfterOpenMarker(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetToC`

- 函数签名

  ```ts
  public SetToC(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetIndentCodeBlock`

- 函数签名

  ```ts
  public SetIndentCodeBlock(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetParagraphBeginningSpace`

- 函数签名

  ```ts
  public SetParagraphBeginningSpace(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetFootnotes`

- 函数签名

  ```ts
  public SetFootnotes(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetLinkRef`

- 函数签名

  ```ts
  public SetLinkRef(enable: boolean): void;
  ```

- 描述

  #TODO

## 方法: `SetEmojiSite`

- 函数签名

  ```ts
  public SetEmojiSite(emojiSite: string): void;
  ```

- 描述

  #TODO

## 方法: `PutEmojis`

- 函数签名

  ```ts
  public PutEmojis(emojis: IObject): void;
  ```

- 描述

  #TODO

## 方法: `SpinBlockDOM`

- 函数签名

  ```ts
  public SpinBlockDOM(html: string): string;
  ```

- 描述

  用于转换和修正块，该方法返回值为思源块 html 文本，参数`html`可以是原来的块 html 文本，也可以是 Markdown 文本，因为其工作流程为：参数`html`转换为 Markdown 文本，转换为抽象语法树，生成返回值。

  从调用情况看，该方法多用于在以下情况下生成正确的块 html 文本：通过`/`菜单新建块、在编辑器中输入 Markdown 标记文本（如在行首输入`#`）、在编辑器中输入回车等。

## 方法: `Md2BlockDOM`

- 函数签名

  ```ts
  public Md2BlockDOM(html: string): string;
  ```

- 描述

  #TODO

## 方法: `SetProtyleWYSIWYG`

- 函数签名

  ```ts
  public SetProtyleWYSIWYG(wysiwyg: boolean): void;
  ```

- 描述

  #TODO

## 方法: `MarkdownStr`

- 函数签名

  ```ts
  public MarkdownStr(name: string, md: string): string;
  ```

- 描述

  #TODO

## 方法: `IsValidLinkDest`

- 函数签名

  ```ts
  public IsValidLinkDest(text: string): boolean;
  ```

- 描述

  IsValidLinkDest 判断 text 是否为合法的链接地址。

## 方法: `BlockDOM2InlineBlockDOM`

- 函数签名

  ```ts
  public BlockDOM2InlineBlockDOM(html: string): string;
  ```

- 描述

  #TODO

## 方法: `BlockDOM2HTML`

- 函数签名

  ```ts
  public BlockDOM2HTML(html: string): string;
  ```

- 描述

  #TODO
