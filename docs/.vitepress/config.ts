import { defineConfig } from "vitepress";

import { postsSidebar } from "./components/Forward/DocData";
import en from "./configs/en";
import zh_Hans from "./configs/zh-Hans";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base: '/siyuan-developer-docs/',

    title: "SiYuan Community Docs",
    description: "Unofficial documentation for SiYuan Community",

    lastUpdated: true,

    // REF https://vitepress.dev/reference/site-config#markdown
    markdown: {
        lineNumbers: true,
        math: true,
    },

    head: [
        [
            "link",
            { rel: "icon", type: "image/x-icon", href: "/static/favicon.ico" },
        ],
    ],

    // REF https://vitepress.dev/reference/default-theme-config
    themeConfig: {
        // REF https://vitepress.dev/reference/default-theme-config#logo
        logo: {
            light: "/static/logo/siyuan.svg",
            dark: "/static/logo/siyuan-dark.svg",
            alt: "SiYuan logo",
        },

        outline: {
            level: "deep",
        },

        nav: [
            { text: "简体中文", link: "/zh-Hans/" },
            { text: "English", link: "/en/" },
            {
                text: "SiYuan",
                items: [
                    { text: "Homepage", link: "https://b3log.org/siyuan/en" },
                    { text: "Community", link: "https://liuyun.com/" },
                    { text: "Project team", link: "https://github.com/siyuan-note" },
                    { text: "Source repository", link: "https://github.com/siyuan-note/siyuan" },
                ],
            },
        ],

        sidebar: {
            "/contents/": {
                base: "/contents",
                items: postsSidebar,
            },
        },

        // REF https://vitepress.dev/reference/default-theme-config#sociallinks
        socialLinks: [
            { icon: "github", link: "https://github.com/siyuan-community/siyuan-developer-docs" },
        ],

        footer: {
            message: "Released under the <a href=\"https://github.com/siyuan-community/siyuan-developer-docs/blob/main/LICENSE\" target=\"_black\">AGPL-3.0</a> License.",
            copyright: "Copyright © 2023-present <a href=\"https://github.com/siyuan-community\" target=\"_black\">SiYuan Community</a>",
        },

        // REF https://vitepress.dev/reference/default-theme-search
        search: {
            provider: "local",
            options: {
                locales: {
                    "zh-Hans": {
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                displayDetails: "显示详情列表",
                                backButtonTitle: "返回",
                                footer: {
                                    selectText: "确认",
                                    navigateText: "切换",
                                    closeText: "关闭",
                                },
                            },
                        },
                    },
                },
            },
        },
    },

    // REF https://vitepress.dev/guide/i18n
    locales: {
        "en": en.localeConfig,
        "zh-Hans": zh_Hans.localeConfig,
    },

    vite: {
        server: {
            proxy: {
                "^/siyuan-sync/.*": {
                    target: "https://siyuan-sync.b3logfile.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/siyuan-sync/, ""),
                },
                "^/siyuan-data/.*": {
                    target: "https://siyuan-data.b3logfile.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/siyuan-data/, ""),
                },
                "^/bazaar/.*": {
                    target: "http://bazaar.b3logfile.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/bazaar/, ""),
                },
                "^/oss/.*": {
                    target: "https://oss.b3logfile.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/oss/, ""),
                },
                "^/ld246/.*": {
                    target: "https://ld246.com",
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/ld246/, ""),
                },
            },
        },
    },
});
