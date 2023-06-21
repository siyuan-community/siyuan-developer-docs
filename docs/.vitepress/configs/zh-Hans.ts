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

// REF https://vitepress.dev/reference/default-theme-config
export const themeConfig: DefaultTheme.Config = {
    // REF https://vitepress.dev/reference/default-theme-config#docfooter
    docFooter: {
        prev: '上一节',
        next: '下一节',
    },

    // REF https://vitepress.dev/reference/default-theme-config#lastupdatedtext
    lastUpdatedText: '更新时间',

    // REF https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: '深色主题',

    // REF https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: '列表',

    // REF https://vitepress.dev/reference/default-theme-config#returntotoplabel
    returnToTopLabel: '回到顶部',

    // REF https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: '切换语言',

    // REF https://vitepress.dev/reference/default-theme-config#editlink
    editLink: {
        pattern: 'https://github.com/siyuan-community/siyuan-developer-docs/edit/main/docs/:path',
        text: '在 GitHub 中编辑此页面',
    },

    // REF https://vitepress.dev/reference/default-theme-nav
    nav: [
        { text: '主页', link: '/zh-Hans/' },
        {
            text: '指南',
            items: [
                { text: '图标开发', link: '/zh-Hans/guide/icon/' },
                { text: '插件开发', link: '/zh-Hans/guide/plugin/' },
                { text: '模板开发', link: '/zh-Hans/guide/template/' },
                { text: '主题开发', link: '/zh-Hans/guide/theme/' },
                { text: '挂件开发', link: '/zh-Hans/guide/widget/' },
            ],
        },
        { text: '参考', link: '/zh-Hans/reference/' },
        {
            text: '思源笔记',
            items: [
                { text: '官网', link: 'https://b3log.org/siyuan' },
                { text: '社区', link: 'https://ld246.com/domain/siyuan' },
                { text: '项目组', link: 'https://github.com/siyuan-note' },
                { text: '源码仓库', link: 'https://github.com/siyuan-note/siyuan' },
            ],
        },
    ],

    // REF https://vitepress.dev/reference/default-theme-sidebar
    sidebar: {
        '/zh-Hans/guide/icon': [
            {
                text: '介绍',
                link: '/zh-Hans/guide/icon/'
            },
            {
                text: '开始',
                items: [
                ],
            },
            {
                text: '开发',
                items: [
                ],
            },
            {
                text: '发布',
                items: [
                ],
            },
        ],
        '/zh-Hans/guide/plugin': [
            {
                text: '介绍',
                link: '/zh-Hans/guide/plugin/'
            },
            {
                text: '快速开始',
                items: [
                    {text: '入门', link: '/zh-Hans/guide/plugin/startup'},
                ],
            },
            {
                text: '开发',
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
                        text: '社区资源',
                        link: '/zh-Hans/guide/plugin/development/community',
                    },
                ],
            },
            {
                text: '发布',
                items: [
                ],
            },
        ],
        '/zh-Hans/guide/template': [
            {
                text: '介绍',
                link: '/zh-Hans/guide/template/'
            },
            {
                text: '快速开始',
                items: [
                ],
            },
            {
                text: '开发',
                items: [
                ],
            },
            {
                text: '发布',
                items: [
                ],
            },
        ],
        '/zh-Hans/guide/theme': [
            {
                text: '介绍',
                link: '/zh-Hans/guide/theme/'
            },
            {
                text: '快速开始',
                items: [
                ],
            },
            {
                text: '开发',
                items: [
                ],
            },
            {
                text: '发布',
                items: [
                ],
            },
        ],
        '/zh-Hans/guide/widget': [
            {
                text: '介绍',
                link: '/zh-Hans/guide/widget/'
            },
            {
                text: '快速开始',
                items: [
                ],
            },
            {
                text: '开发',
                items: [
                ],
            },
            {
                text: '发布',
                items: [
                ],
            },
        ],

        '/zh-Hans/reference/': [
            {
                text: '清单文件',
                link: '/zh-Hans/reference/manifest/',
                items: [
                    { text: 'icon.json', link: '/zh-Hans/reference/manifest/icon' },
                    { text: 'plugin.json', link: '/zh-Hans/reference/manifest/plugin' },
                    { text: 'template.json', link: '/zh-Hans/reference/manifest/template' },
                    { text: 'theme.json', link: '/zh-Hans/reference/manifest/theme' },
                    { text: 'widget.json', link: '/zh-Hans/reference/manifest/widget' },
                ],
            },
            {
                text: '内核 API',
                link: '/zh-Hans/reference/api/kernel/',
                items: [
                ],
            },
            {
                text: '插件 API',
                link: '/zh-Hans/reference/api/plugin/',
                items: [
                    {
                        text: '类',
                        items: [
                        ],
                    },
                    {
                        text: '接口',
                        items: [
                        ],
                    },
                    {
                        text: '方法',
                        items: [
                        ],
                    },
                    {
                        text: '类型',
                        items: [
                        ],
                    },
                ],
            },
        ],
    },
};

export const localeConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
    label: '简体中文',
    lang: 'zh-Hans', // 设置 `<html>` 标签 lang 属性
    dir: '/zh-Hans/',

    title: '思源开发者文档',
    description: '思源社区开发者的非官方文档',

    themeConfig,
};

export default {
    themeConfig,
    localeConfig,
}
