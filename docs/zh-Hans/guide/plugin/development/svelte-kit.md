---
outline: deep
---

# Svelte组件库

思源插件开发往往会涉及到UI，为了确保整体风格的一致，我们建议使用思源内置的元素及样式。
同时，思源开发社区也倡导使用Svelte，并推出了基于svelte的插件模板。

因此，我们也实现了基于思源的svelte组件库，点击前往: [Svelte-kit](https://svelte-kit.siyuan-note.club/)。此链接为组件库的Storybook站，即在线查看组件库及使用方法的网站。

![Storybook](/static/development/storybook.png)

## 安装使用

在你的工程中安装svelte-kit

```bash
pnpm install siyuan-kit-svelte
```

并在你的代码中应用他

```svelte
<script lang="ts">
import { Button } from 'siyuan-kit-svelte';

const value = 123;
</script>

<div><Button label={value}></Button></div>
```

## 组件库内容

组件库包括了基本的表单元素以及其他常用的高级组件，更多的组件正在实现中

### 原子组件

- [按钮Button](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-button--docs)
- [开关Switch](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-switch--docs)
- [输入Input(文字、数字)](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-input--docs)
- [文本域Textarea](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-textarea--docs)
- [滑块Slider](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-slider--docs)
- [选择Select](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-select--docs)
- [图标Icon](https://svelte-kit.siyuan-note.club/?path=/docs/BaseComponent-icon--docs)

## 高级组件

- [树型结构Tree](https://svelte-kit.siyuan-note.club/?path=/docs/HighLevel-tree--docs)
- [侧边Dock](https://svelte-kit.siyuan-note.club/?path=/docs/HighLevel-dock--docs)（插槽：标题、按钮组、内容）
- [Dialog](https://svelte-kit.siyuan-note.club/?path=/story/highlevel-dialog--docs)

### 业务组件

- Setting
- Protyle

### 布局组件

- flex容器
