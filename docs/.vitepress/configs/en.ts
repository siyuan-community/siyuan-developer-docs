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

import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

export const themeConfig: DefaultTheme.Config = {
    // REF https://vitepress.dev/reference/default-theme-config#docfooter
    docFooter: {
        prev: "Prev",
        next: "Next",
    },

    // REF https://vitepress.dev/reference/default-theme-config#lastupdatedtext
    lastUpdatedText: "Last updated",

    // REF https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: "Dark mode",

    // REF https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: "Sidebar",

    // REF https://vitepress.dev/reference/default-theme-config#returntotoplabel
    returnToTopLabel: "Top",

    // REF https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: "Language",
    editLink: {
        pattern: "https://github.com/siyuan-community/siyuan-developer-docs/edit/main/docs/:path",
        text: "Edit this page on GitHub",
    },

    nav: [
        { text: "Homepage", link: "/en/" },
        {
            text: "Guide",
            items: [
                { text: "Icon development", link: "/en/guide/icon/" },
                { text: "Plugin development", link: "/en/guide/plugin/" },
                { text: "Template development", link: "/en/guide/template/" },
                { text: "Theme development", link: "/en/guide/theme/" },
                { text: "Widget development", link: "/en/guide/widget/" },
            ],
        },
        { text: "Reference", link: "/en/reference/" },
        {
            text: "SiYuan Community",
            items: [
                { text: "Organization", link: "https://github.com/siyuan-community" },
            ],
        },
        {
            text: "SiYuan",
            items: [
                { text: "Homepage", link: "https://b3log.org/siyuan/en" },
                { text: "Community", link: "https://liuyun.com/" },
                { text: "Organization", link: "https://github.com/siyuan-note" },
                { text: "Repository", link: "https://github.com/siyuan-note/siyuan" },
            ],
        },
    ],

    sidebar: {
        "/en/guide/icon": [
            {
                text: "Introduction",
                link: "/en/guide/icon/",
            },
            {
                text: "Getting started",
                items: [],
            },
            {
                text: "Development",
                items: [],
            },
            {
                text: "Publish",
                items: [],
            },
        ],
        "/en/guide/plugin": [
            {
                text: "Introduction",
                link: "/en/guide/plugin/",
            },
            {
                text: "Getting started",
                items: [],
            },
            {
                text: "Development",
                items: [
                    {
                        text: "设备环境",
                        items: [],
                    },
                    {
                        text: "用户界面",
                        items: [],
                    },
                    {
                        text: "事件总线",
                        items: [],
                    },
                    {
                        text: "Community Support",
                        // link: '/zh-Hans/guide/plugin/development/community',
                    },
                ],
            },
            {
                text: "Publish",
                items: [],
            },
        ],
        "/en/guide/template": [
            {
                text: "Introduction",
                link: "/en/guide/template/",
            },
            {
                text: "Getting started",
                items: [],
            },
            {
                text: "Development",
                items: [],
            },
            {
                text: "Publish",
                items: [],
            },
        ],
        "/en/guide/theme": [
            {
                text: "Introduction",
                link: "/en/guide/theme/",
            },
            {
                text: "Getting started",
                items: [],
            },
            {
                text: "Development",
                items: [],
            },
            {
                text: "Publish",
                items: [],
            },
        ],
        "/en/guide/widget": [
            {
                text: "Introduction",
                link: "/en/guide/widget/",
            },
            {
                text: "Getting started",
                items: [],
            },
            {
                text: "Development",
                items: [],
            },
            {
                text: "Publish",
                items: [],
            },
        ],

        "/en/reference/": [
            {
                text: "Manifest",
                link: "/en/reference/manifest/",
                items: [
                    { text: "icon.json", link: "/zh-Hans/reference/manifest/icon" },
                    { text: "plugin.json", link: "/zh-Hans/reference/manifest/plugin" },
                    { text: "template.json", link: "/zh-Hans/reference/manifest/template" },
                    { text: "theme.json", link: "/zh-Hans/reference/manifest/theme" },
                    { text: "widget.json", link: "/zh-Hans/reference/manifest/widget" },
                ],
            },
            {
                text: "Kernel",
                // link: '/en/reference/api/kernel/',
                items: [
                    { text: "Kernel API", link: "/en/reference/api/kernel/" },
                    { text: "SQL Table Definition", link: "" },
                ],
            },
            {
                text: "Plugin API",
                link: "/en/reference/api/plugin/",
                items: [
                    {
                        text: "class",
                        items: [],
                    },
                    {
                        text: "inferface",
                        items: [],
                    },
                    {
                        text: "method",
                        items: [],
                    },
                    {
                        text: "type",
                        items: [],
                    },
                ],
            },
            {
                text: "DOM Structure",
                // link: '/zh-Hans/reference/api/kernel/',
                items: [],
            },
        ],
    },
};

export const localeConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
    label: "English",
    lang: "en",
    dir: "/en/",

    title: "SiYuan Developer Docs",
    description: "Unofficial documentation for SiYuan community developers",

    themeConfig,
};

export default {
    themeConfig,
    localeConfig,
};
