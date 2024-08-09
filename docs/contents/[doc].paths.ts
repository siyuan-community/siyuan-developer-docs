import { posts } from "../.vitepress/components/Forward/DocData";

export default {
    paths() {
        const results = posts.map((item) => ({
            params: {
                doc: item.filename,
                ...item,
            },
        }));
        return results;
    },
};
