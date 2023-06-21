/**
 * Copyright 2023 Zuoqiu Yingyi
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
    DefaultTheme,
    LocaleSpecificConfig,
} from 'vitepress';

export const themeConfig: DefaultTheme.Config = {
    // REF https://vitepress.dev/reference/default-theme-config#docfooter
    docFooter: {
        prev: 'Prev',
        next: 'Next',
    },

    // REF https://vitepress.dev/reference/default-theme-config#lastupdatedtext
    lastUpdatedText: 'Last updated',

    // REF https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: 'Dark mode',

    // REF https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: 'Sidebar',

    // REF https://vitepress.dev/reference/default-theme-config#returntotoplabel
    returnToTopLabel: 'Top',

    // REF https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: 'Language',
    editLink: {
        pattern: 'https://github.com/siyuan-community/siyuan-developer-docs/edit/main/docs/:path',
        text: 'Edit this page on GitHub',
    },

    nav: [
        { text: 'Homepage', link: '/en/' },
        {
            text: 'Guide',
            items: [
                { text: 'Icon development', link: '/en/guide/icon/' },
                { text: 'Plugin development', link: '/en/guide/plugin/' },
                { text: 'Template development', link: '/en/guide/template/' },
                { text: 'Theme development', link: '/en/guide/theme/' },
                { text: 'Widget development', link: '/en/guide/widget/' },
            ],
        },
        { text: 'Reference', link: '/en/reference/' },
        {
            text: 'SiYuan',
            items: [
                { text: 'Homepage', link: 'https://b3log.org/siyuan/en' },
                { text: 'Community', link: 'https://liuyun.com/' },
                { text: 'Project team', link: 'https://github.com/siyuan-note' },
                { text: 'Source repository', link: 'https://github.com/siyuan-note/siyuan' },
            ],
        },
    ],

    sidebar: {
        '/en/guide/icon': [
            {
                text: 'Introduction',
                link: '/en/guide/icon/'
            },
            {
                text: 'Getting started',
                items: [
                ],
            },
            {
                text: 'Development',
                items: [
                ],
            },
            {
                text: 'Publish',
                items: [
                ],
            },
        ],
        '/en/guide/plugin': [
            {
                text: 'Introduction',
                link: '/en/guide/plugin/'
            },
            {
                text: 'Getting started',
                items: [
                ],
            },
            {
                text: 'Development',
                items: [
                    {
                        text: '设备环境',
                        items: [
                        ],
                    },
                    {
                        text: '用户界面',
                        items: [
                        ],
                    },
                    {
                        text: '事件总线',
                        items: [
                        ],
                    },
                    {
                        text: 'Community Support',
                        // link: '/zh-Hans/guide/plugin/development/community',
                    },
                ],
            },
            {
                text: 'Publish',
                items: [
                ],
            },
        ],
        '/en/guide/template': [
            {
                text: 'Introduction',
                link: '/en/guide/template/'
            },
            {
                text: 'Getting started',
                items: [
                ],
            },
            {
                text: 'Development',
                items: [
                ],
            },
            {
                text: 'Publish',
                items: [
                ],
            },
        ],
        '/en/guide/theme': [
            {
                text: 'Introduction',
                link: '/en/guide/theme/'
            },
            {
                text: 'Getting started',
                items: [
                ],
            },
            {
                text: 'Development',
                items: [
                ],
            },
            {
                text: 'Publish',
                items: [
                ],
            },
        ],
        '/en/guide/widget': [
            {
                text: 'Introduction',
                link: '/en/guide/widget/'
            },
            {
                text: 'Getting started',
                items: [
                ],
            },
            {
                text: 'Development',
                items: [
                ],
            },
            {
                text: 'Publish',
                items: [
                ],
            },
        ],

        '/en/reference/': [
            {
                text: 'Manifest',
                link: '/en/reference/manifest/',
                items: [
                    { text: 'icon.json', link: '/zh-Hans/reference/manifest/icon' },
                    { text: 'plugin.json', link: '/zh-Hans/reference/manifest/plugin' },
                    { text: 'template.json', link: '/zh-Hans/reference/manifest/template' },
                    { text: 'theme.json', link: '/zh-Hans/reference/manifest/theme' },
                    { text: 'widget.json', link: '/zh-Hans/reference/manifest/widget' },
                ],
            },
            {
                text: 'Kernel API',
                link: '/en/reference/api/kernel/',
                items: [
                ],
            },
            {
                text: 'Plugin API',
                link: '/en/reference/api/plugin/',
                items: [
                    {
                        text: 'class',
                        items: [
                        ],
                    },
                    {
                        text: 'inferface',
                        items: [
                        ],
                    },
                    {
                        text: 'method',
                        items: [
                        ],
                    },
                    {
                        text: 'type',
                        items: [
                        ],
                    },
                ],
            },
            {
                text: 'DOM Structure',
                // link: '/zh-Hans/reference/api/kernel/',
                items: [
                ],
            },
        ],
    },
};

export const localeConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
    label: 'English',
    lang: 'en',
    dir: '/en/',

    title: "SiYuan Developer Docs",
    description: "Unofficial documentation for SiYuan community developers",

    themeConfig,
};

export default {
    themeConfig,
    localeConfig,
}
