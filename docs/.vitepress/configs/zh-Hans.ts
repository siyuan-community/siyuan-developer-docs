// Copyright (C) 2023 SiYuan Community
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { postsSidebarWithLocale } from "../components/Forward/DocData";

import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

// REF https://vitepress.dev/reference/default-theme-config
export const themeConfig: DefaultTheme.Config = {
    // REF https://vitepress.dev/reference/default-theme-config#docfooter
    docFooter: {
        prev: "上一节",
        next: "下一节",
    },

    outlineTitle: "目录",

    // REF https://vitepress.dev/reference/default-theme-config#lastupdatedtext
    lastUpdatedText: "更新时间",

    // REF https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: "深色主题",

    // REF https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: "列表",

    // REF https://vitepress.dev/reference/default-theme-config#returntotoplabel
    returnToTopLabel: "回到顶部",

    // REF https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: "切换语言",

    // REF https://vitepress.dev/reference/default-theme-config#editlink
    editLink: {
        pattern: "https://github.com/siyuan-community/siyuan-developer-docs/edit/main/docs/:path",
        text: "在 GitHub 中编辑此页面",
    },

    // REF https://vitepress.dev/reference/default-theme-nav
    nav: [
        { text: "主页", link: "/zh-Hans/" },
        {
            text: "指南",
            items: [
                { text: "图标开发", link: "/zh-Hans/guide/icon/" },
                { text: "插件开发", link: "/zh-Hans/guide/plugin/" },
                { text: "模板开发", link: "/zh-Hans/guide/template/" },
                { text: "主题开发", link: "/zh-Hans/guide/theme/" },
                { text: "挂件开发", link: "/zh-Hans/guide/widget/" },
            ],
        },
        { text: "参考", link: "/zh-Hans/reference/" },
        {
            text: "思源社区",
            items: [
                { text: "组织", link: "https://github.com/siyuan-community" },
            ],
        },
        {
            text: "思源笔记",
            items: [
                { text: "官网", link: "https://b3log.org/siyuan" },
                { text: "社区", link: "https://ld246.com/tags/siyuan" },
                { text: "组织", link: "https://github.com/siyuan-note" },
                { text: "仓库", link: "https://github.com/siyuan-note/siyuan" },
            ],
        },
        {
            text: "集市",
            link: "/zh-Hans/bazaar/",
        },
        {
            text: "关于",
            items: [
                { text: "加入我们", link: "/zh-Hans/about/" },
                { text: "如何贡献", link: "/zh-Hans/about/contribute" },
            ],
        },
    ],

    // REF https://vitepress.dev/reference/default-theme-sidebar
    sidebar: {
        "/zh-Hans/guide/icon": [
            {
                text: "介绍",
                link: "/zh-Hans/guide/icon/",
            },
            {
                text: "开始",
                items: [],
            },
            {
                text: "开发",
                items: [],
            },
            {
                text: "发布",
                items: [],
            },
        ],
        "/zh-Hans/guide/plugin": [
            {
                text: "介绍",
                link: "/zh-Hans/guide/plugin/",
            },
            {
                text: "快速开始",
                items: [
                    { text: "入门", link: "/zh-Hans/guide/plugin/startup" },
                ],
            },
            {
                text: "开发",
                items: [
                    {
                        text: "设备环境",
                        items: [],
                    },
                    {
                        text: "用户界面",
                        link: "/zh-Hans/guide/plugin/user-interface/",
                        items: [
                            { text: "顶栏", link: "/zh-Hans/guide/plugin/user-interface/topbar" },
                        ],
                    },
                    {
                        text: "事件总线",
                        link: "/zh-Hans/reference/api/plugin/event-bus/",
                    },
                    {
                        text: "Svelte组件库",
                        link: "/zh-Hans/guide/plugin/development/svelte-kit",
                    },
                    {
                        text: "社区资源",
                        link: "/zh-Hans/guide/plugin/development/community",
                    },
                ],
            },
            {
                text: "发布",
                items: [],
            },
            {
                text: "其他",
                items: [
                    {
                        text: "5分钟快速开启插件开发",
                        link: "/zh-Hans/guide/plugin/five-minutes-quick-start",
                    },
                ],
            },
        ],
        "/zh-Hans/guide/template": [
            {
                text: "介绍",
                link: "/zh-Hans/guide/template/",
            },
            {
                text: "快速开始",
                items: [],
            },
            {
                text: "开发",
                items: [],
            },
            {
                text: "发布",
                items: [],
            },
        ],
        "/zh-Hans/guide/theme": [
            {
                text: "介绍",
                link: "/zh-Hans/guide/theme/",
            },
            {
                text: "快速开始",
                items: [],
            },
            {
                text: "开发",
                items: [],
            },
            {
                text: "发布",
                items: [],
            },
        ],
        "/zh-Hans/guide/widget": [
            {
                text: "5分钟上手挂件开发",
                link: "/zh-Hans/guide/widget/",
            },
        ],

        "/zh-Hans/reference/": [
            {
                text: "社区集市",
                link: "/zh-Hans/reference/bazaar/",
                items: [
                    { text: "图标 icon", link: "/zh-Hans/reference/bazaar/icon" },
                    { text: "插件 plugin", link: "/zh-Hans/reference/bazaar/plugin" },
                    { text: "模板 template", link: "/zh-Hans/reference/bazaar/template" },
                    { text: "主题 theme", link: "/zh-Hans/reference/bazaar/theme" },
                    { text: "挂件 widget", link: "/zh-Hans/reference/bazaar/widget" },
                ],
            },
            {
                text: "数据库",
                // link: "/zh-Hans/reference/database/",
                items: [
                    { text: "表与字段", link: "/zh-Hans/reference/database/table" },
                ],
            },
            {
                text: "内容块",
                // link: "/zh-Hans/reference/block/",
                items: [
                    { text: "块类型", link: "/zh-Hans/reference/block/type" },
                    { text: "块属性", link: "/zh-Hans/reference/block/attribute" },
                ],
            },
            {
                text: "模板",
                link: "/zh-Hans/reference/template/",
                items: [
                    {
                        text: "思源内置模板函数",
                        link: "/zh-Hans/reference/template/siyuan",
                    },
                    {
                        text: "Sprig 模板函数",
                        link: "/zh-Hans/reference/template/sprig/",
                        collapsed: true,
                        items: [
                            { text: "字符串", link: "/zh-Hans/reference/template/sprig/strings" },
                            { text: "字符串切片", link: "/zh-Hans/reference/template/sprig/string-slice" },
                            { text: "整数", link: "/zh-Hans/reference/template/sprig/math" },
                            { text: "整数切片", link: "/zh-Hans/reference/template/sprig/integer-slice" },
                            { text: "浮点数", link: "/zh-Hans/reference/template/sprig/mathf" },
                            { text: "日期", link: "/zh-Hans/reference/template/sprig/date" },
                            { text: "默认值", link: "/zh-Hans/reference/template/sprig/defaults" },
                            { text: "编码", link: "/zh-Hans/reference/template/sprig/encoding" },
                            { text: "列表", link: "/zh-Hans/reference/template/sprig/lists" },
                            { text: "字典", link: "/zh-Hans/reference/template/sprig/dicts" },
                            { text: "类型转换", link: "/zh-Hans/reference/template/sprig/conversion" },
                            { text: "路径与文件路径", link: "/zh-Hans/reference/template/sprig/paths" },
                            { text: "流控制", link: "/zh-Hans/reference/template/sprig/flow-control" },
                            { text: "UUID", link: "/zh-Hans/reference/template/sprig/uuid" },
                            { text: "操作系统", link: "/zh-Hans/reference/template/sprig/os" },
                            { text: "语义化版本号", link: "/zh-Hans/reference/template/sprig/semver" },
                            { text: "反射", link: "/zh-Hans/reference/template/sprig/reflection" },
                            { text: "密码学与安全", link: "/zh-Hans/reference/template/sprig/crypto" },
                            { text: "网络", link: "/zh-Hans/reference/template/sprig/network" },
                        ],
                    },
                ],
            },
            {
                text: "内核 API",
                link: "/zh-Hans/reference/api/kernel/",
                items: [],
            },
            {
                text: "插件 API",
                link: "/zh-Hans/reference/api/plugin/",
                items: [
                    {
                        text: "类型与接口",
                        link: "/zh-Hans/reference/api/plugin/types",
                        items: [],
                    },
                    {
                        text: "事件总线",
                        link: "/zh-Hans/reference/api/plugin/event-bus/",
                    },
                    {
                        text: "类",
                        // link: "/zh-Hans/reference/api/plugin/class/",
                        items: [
                            {
                                text: "Plugin",
                                link: "/zh-Hans/reference/api/plugin/class/Plugin",
                            },
                            {
                                text: "Dialog",
                                link: "/zh-Hans/reference/api/plugin/class/Dialog",
                            },
                            {
                                text: "Menu",
                                link: "/zh-Hans/reference/api/plugin/class/Menu",
                            },
                            {
                                text: "EventBus",
                                link: "/zh-Hans/reference/api/plugin/class/EventBus",
                            },
                            {
                                text: "Setting",
                                link: "/zh-Hans/reference/api/plugin/class/Setting",
                            },
                            {
                                text: "Lute",
                                link: "/zh-Hans/reference/api/plugin/class/Lute",
                            },
                        ],
                    },
                    {
                        text: "方法",
                        link: "/zh-Hans/reference/api/plugin/method",
                        items: [],
                    },
                ],
            },
            {
                text: "DOM 结构",
                // link: "/zh-Hans/reference/dom/",
                items: [],
            },
            {
                text: "社区资源",
                link: "/zh-Hans/reference/community/",
                items: [
                    {
                        text: "思源笔记社区版",
                        link: "/zh-Hans/reference/community/siyuan-CE/",
                        items: [
                            {
                                text: "新特性",
                                link: "/zh-Hans/reference/community/siyuan-CE/feature",
                            },
                        ],
                    },
                    {
                        text: "siyuan-sdk",
                        link: "/zh-Hans/reference/community/siyuan-sdk/",
                        items: [
                            {
                                text: "开始",
                                link: "/zh-Hans/reference/community/siyuan-sdk/start",
                            },
                            {
                                text: "思源内核 API",
                                link: "/zh-Hans/reference/community/siyuan-sdk/kernel/",
                                items: [
                                    {
                                        text: "api",
                                        // link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/",
                                        collapsed: true,
                                        items: [
                                            { text: "asset", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/asset" },
                                            { text: "attr", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/attr" },
                                            { text: "block", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/block" },
                                            { text: "broadcast", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/broadcast" },
                                            { text: "convert", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/convert" },
                                            { text: "export", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/export" },
                                            { text: "file", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/file" },
                                            { text: "filetree", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/filetree" },
                                            { text: "history", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/history" },
                                            { text: "inbox", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/inbox" },
                                            { text: "network", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/network" },
                                            { text: "notebook", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/notebook" },
                                            { text: "notification", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/notification" },
                                            { text: "query", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/query" },
                                            { text: "repo", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/repo" },
                                            { text: "search", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/search" },
                                            { text: "snippet", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/snippet" },
                                            { text: "sqlite", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/sqlite" },
                                            { text: "storage", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/storage" },
                                            { text: "system", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/system" },
                                            { text: "template", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/api/template" },
                                        ],
                                    },
                                    { text: "ws", link: "/zh-Hans/reference/community/siyuan-sdk/kernel/ws" },
                                ],
                            },
                            {
                                text: "思源文件系统",
                                link: "/zh-Hans/reference/community/siyuan-sdk/file-system",
                            },
                        ],
                    },
                ],
            },
        ],
        "/zh-Hans/contents/": [
            ...postsSidebarWithLocale["zh-Hans"],
        ],
    },
};

export const localeConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
    label: "简体中文",
    lang: "zh-Hans", // 设置 `<html>` 标签 lang 属性
    dir: "/zh-Hans/",

    title: "思源社区文档",
    description: "思源社区的非官方文档",

    themeConfig,
};

export default {
    themeConfig,
    localeConfig,
};
