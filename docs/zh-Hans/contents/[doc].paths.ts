import { posts } from "../../.vitepress/components/Forward/DocData";

export default {
    paths() {
        const results = posts.filter((i) => i.locale === "zh").map((item) => ({
            params: {
                doc: item.filenameWithoutLocale,
                ...item,
            },
        }));
        return results;
    },
};
