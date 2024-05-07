---
outline: deep
---

# 块类型

| 类型名称                                  | 主类型 <br/> `data-type` | 次类型 <br/> `data-subtype` | 图标               | 备注                                                                              |
| :---------------------------------------- | :----------------------- | --------------------------- | :----------------- | --------------------------------------------------------------------------------- |
| [属性表](#NodeAttributeView)              | `NodeAttributeView`      |                             | `#iconDatabase`    | 叶子块                                                                            |
| [音频块](#NodeAudio)                      | `NodeAudio`              |                             | `#iconRecord`      | 叶子块                                                                            |
| [嵌入块](#NodeBlockQueryEmbed)            | `NodeBlockQueryEmbed`    |                             | `#iconSQL`         | 叶子块                                                                            |
| [引述块](#NodeBlockquote)                 | `NodeBlockquote`         |                             | `#iconQuote`       | 容器块                                                                            |
| [代码块](#NodeCodeBlock)                  | `NodeCodeBlock`          |                             | `#iconCode`        | 叶子块                                                                            |
| ├─ [乐谱](#NodeCodeBlock-abc)             | `NodeCodeBlock`          | `abc`                       |                    | [abcjs](https://paulrosen.github.io/abcjs/)                                       |
| ├─ [ECharts 图表](#NodeCodeBlock-echarts) | `NodeCodeBlock`          | `echarts`                   |                    | [ECharts](https://echarts.apache.org/zh/index.html)                               |
| ├─ [流程图](#NodeCodeBlock-flowchart)     | `NodeCodeBlock`          | `flowchart`                 |                    | [Graphviz](https://graphviz.org)                                                  |
| ├─ [状态转移图](#NodeCodeBlock-graphviz)  | `NodeCodeBlock`          | `graphviz`                  |                    | [flowchart.js](https://flowchart.js.org/)                                         |
| ├─ [Mermaid 图](#NodeCodeBlock-mermaid)   | `NodeCodeBlock`          | `mermaid`                   |                    | [Mermaid](https://mermaid.js.org/)                                                |
| ├─ [脑图](#NodeCodeBlock-mindmap)         | `NodeCodeBlock`          | `mindmap`                   |                    | [ECharts 树图](https://echarts.apache.org/examples/zh/index.html#chart-type-tree) |
| └─ [UML 图](#NodeCodeBlock-plantuml)      | `NodeCodeBlock`          | `plantuml`                  |                    | [PlantUML](https://plantuml.com)                                                  |
| [文档块](#NodeDocument)                   | `NodeDocument`           |                             | `#iconFile`        | 容器块                                                                            |
| [HTML 块](#NodeHTMLBlock)                 | `NodeHTMLBlock`          |                             | `#iconHTML5`       | 叶子块                                                                            |
| [标题块](#NodeHeading)                    | `NodeHeading`            |                             | `#iconHeadings`    | 叶子块                                                                            |
| ├─ [一级标题](#NodeHeading-h1)            | `NodeHeading`            | `h1`                        | `#iconH1`          | ↑                                                                                 |
| ├─ [二级标题](#NodeHeading-h2)            | `NodeHeading`            | `h2`                        | `#iconH2`          | ↑                                                                                 |
| ├─ [三级标题](#NodeHeading-h3)            | `NodeHeading`            | `h3`                        | `#iconH3`          | ↑                                                                                 |
| ├─ [四级标题](#NodeHeading-h4)            | `NodeHeading`            | `h4`                        | `#iconH4`          | ↑                                                                                 |
| ├─ [五级标题](#NodeHeading-h5)            | `NodeHeading`            | `h5`                        | `#iconH5`          | ↑                                                                                 |
| └─ [六级标题](#NodeHeading-h6)            | `NodeHeading`            | `h6`                        | `#iconH6`          | ↑                                                                                 |
| [IFrame 块](#NodeIFrame)                  | `NodeIFrame`             |                             | `#iconLanguage`    | 叶子块                                                                            |
| [列表块](#NodeList)                       | `NodeList`               |                             |                    | 容器块                                                                            |
| ├─ [有序列表](#NodeList-o)                | `NodeList`               | `o`                         | `#iconList`        | ↑                                                                                 |
| ├─ [无序列表](#NodeList-t)                | `NodeList`               | `t`                         | `#iconOrderedList` | ↑                                                                                 |
| └─ [任务列表](#NodeList-u)                | `NodeList`               | `u`                         | `#iconCheck`       | ↑                                                                                 |
| [列表项](#NodeListItem)                   | `NodeListItem`           |                             | `#iconListItem`    | 容器块                                                                            |
| ├─ [有序列表项](#NodeListItem-o)          | `NodeListItem`           | `o`                         |                    | ↑                                                                                 |
| ├─ [无序列表项](#NodeListItem-t)          | `NodeListItem`           | `t`                         |                    | ↑                                                                                 |
| └─ [任务列表项](#NodeListItem-u)          | `NodeListItem`           | `u`                         |                    | ↑                                                                                 |
| [公式块](#NodeMathBlock)                  | `NodeMathBlock`          |                             | `#iconMath`        | 叶子块                                                                            |
| [段落块](#NodeParagraph)                  | `NodeParagraph`          |                             | `#iconParagraph`   | 叶子块                                                                            |
| [超级块](#NodeSuperBlock)                 | `NodeSuperBlock`         |                             | `#iconSuper`       | 容器块                                                                            |
| [表格块](#NodeTable)                      | `NodeTable`              |                             | `#iconTable`       | 叶子块                                                                            |
| [分割线](#NodeThematicBreak)              | `NodeThematicBreak`      |                             | `#iconLine`        | 叶子块                                                                            |
| [视频块](#NodeVideo)                      | `NodeVideo`              |                             | `#iconVideo`       | 叶子块                                                                            |
| [挂件块](#NodeWidget)                     | `NodeWidget`             |                             | `#iconBoth`        | 叶子块                                                                            |

## 属性表 {#NodeAttributeView}

## 音频块 {#NodeAudio}

## 嵌入块 {#NodeBlockQueryEmbed}

## 引述块 {#NodeBlockquote}

## 代码块 {#NodeCodeBlock}

### 乐谱 {#NodeCodeBlock-abc}

### ECharts 图表 {#NodeCodeBlock-echarts}

### 流程图 {#NodeCodeBlock-flowchart}

### 状态转移图 {#NodeCodeBlock-graphviz}

### Mermaid 图 {#NodeCodeBlock-mermaid}

### 脑图 {#NodeCodeBlock-mindmap}

### UML 图 {#NodeCodeBlock-plantuml}

## 文档块 {#NodeDocument}

## HTML 块 {#NodeHTMLBlock}

## 标题块 {#NodeHeading}

### 一级标题 {#NodeHeading-h1}

### 二级标题 {#NodeHeading-h2}

### 三级标题 {#NodeHeading-h3}

### 四级标题 {#NodeHeading-h4}

### 五级标题 {#NodeHeading-h5}

### 六级标题 {#NodeHeading-h6}

## IFrame 块 {#NodeIFrame}

## 列表块 {#NodeList}

### 有序列表 {#NodeList-o}

### 无序列表 {#NodeList-t}

### 任务列表 {#NodeList-u}

## 列表项 {#NodeListItem}

### 有序列表项 {#NodeListItem-o}

### 无序列表项 {#NodeListItem-t}

### 任务列表项 {#NodeListItem-u}

## 公式块 {#NodeMathBlock}

## 段落块 {#NodeParagraph}

## 超级块 {#NodeSuperBlock}

## 表格块 {#NodeTable}

## 分割线 {#NodeThematicBreak}

## 视频块 {#NodeVideo}

## 挂件块 {#NodeWidget}
