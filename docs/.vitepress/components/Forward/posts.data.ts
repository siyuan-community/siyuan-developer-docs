import { createContentLoader } from "vitepress";

export default createContentLoader("members/**/*.md", {
    includeSrc: true, // 包含原始 markdown 源?
    render: true, // 包含渲染的整页 HTML?
    // excerpt: true, // 包含摘录?
});
