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

    outlineTitle: '目录',

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
            text: '思源社区',
            items: [
                { text: '组织', link: 'https://github.com/siyuan-community' },
            ],
        },
        {
            text: '思源笔记',
            items: [
                { text: '官网', link: 'https://b3log.org/siyuan' },
                { text: '社区', link: 'https://ld246.com/domain/siyuan' },
                { text: '组织', link: 'https://github.com/siyuan-note' },
                { text: '仓库', link: 'https://github.com/siyuan-note/siyuan' },
            ],
        },
        {
            text: '关于我们', link: '/zh-Hans/about/',
        }
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
                    { text: '入门', link: '/zh-Hans/guide/plugin/startup' },
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
                        link: '/zh-Hans/guide/plugin/user-interface/',
                        items: [
                            { text: '顶栏', link: '/zh-Hans/guide/plugin/user-interface/topbar' }
                        ],
                    },
                    {
                        text: '事件总线',
                        link: '/zh-Hans/reference/api/plugin/event-bus/',
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
            {
                text: '其他',
                items: [
                    {
                        text: '5分钟快速开启插件开发',
                        link: '/zh-Hans/guide/plugin/five-minutes-quick-start'
                    },
                ]
            }
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
                base: '/zh-Hans/reference/manifest/',
                link: './',
                items: [
                    { text: 'icon.json', link: './icon' },
                    { text: 'plugin.json', link: './plugin' },
                    { text: 'template.json', link: './template' },
                    { text: 'theme.json', link: './theme' },
                    { text: 'widget.json', link: './widget' },
                ],
            },
            {
                text: '数据库',
                base: '/zh-Hans/reference/database/',
                // link: './',
                items: [
                    { text: '表与字段', link: './table' },
                ],
            },
            {
                text: '内容块',
                base: '/zh-Hans/reference/block/',
                // link: './',
                items: [
                    { text: '块类型', link: './type' },
                    { text: '块属性', link: './attribute' },
                ],
            },
            {
                text: '内核 API',
                base: '/zh-Hans/reference/api/kernel/',
                link: './',
                items: [
                ],
            },
            {
                text: '插件 API',
                base: '/zh-Hans/reference/api/plugin/',
                link: './',
                items: [
                    {
                        text: '类型与接口',
                        link: './types',
                        items: [
                        ],
                    },
                    {
                        text: '事件总线',
                        link: './event-bus/',
                    },
                    {
                        text: '类',
                        base: './class/',
                        items: [
                            {
                                text: 'Plugin',
                                link: './Plugin',
                            },
                            {
                                text: 'Dialog',
                                link: './Dialog',
                            },
                            {
                                text: 'Menu',
                                link: './Menu',
                            },
                            {
                                text: 'EventBus',
                                link: './EventBus',
                            },
                            {
                                text: 'Setting',
                                link: './Setting',
                            },
                            {
                                text: 'Lute',
                                link: './Lute',
                            },
                        ],
                    },
                    {
                        text: '方法',
                        link: './method',
                        items: [
                        ],
                    },
                ],
            },
            {
                text: 'DOM 结构',
                base: '/zh-Hans/reference/dom/',
                // link: './',
                items: [
                ],
            },
            {
                text: '社区资源',
                base: '/zh-Hans/reference/community/',
                link: './',
                items: [
                    {
                        text: 'siyuan-sdk',
                        base: '/zh-Hans/reference/community/siyuan-sdk/',
                        link: './',
                        items: [
                            {
                                text: '开始',
                                link: './start',
                            },
                            {
                                text: '思源内核 API',
                                base: '/zh-Hans/reference/community/siyuan-sdk/kernel/',
                                link: './',
                                items: [
                                    {
                                        text: 'api',
                                        base: '/zh-Hans/reference/community/siyuan-sdk/kernel/api/',
                                        collapsed: true,
                                        items: [
                                            { text: 'asset', link: './asset' },
                                            { text: 'attr', link: './attr' },
                                            { text: 'block', link: './block' },
                                            { text: 'broadcast', link: './broadcast' },
                                            { text: 'convert', link: './convert' },
                                            { text: 'export', link: './export' },
                                            { text: 'file', link: './file' },
                                            { text: 'filetree', link: './filetree' },
                                            { text: 'history', link: './history' },
                                            { text: 'inbox', link: './inbox' },
                                            { text: 'network', link: './network' },
                                            { text: 'notebook', link: './notebook' },
                                            { text: 'notification', link: './notification' },
                                            { text: 'query', link: './query' },
                                            { text: 'repo', link: './repo' },
                                            { text: 'search', link: './search' },
                                            { text: 'snippet', link: './snippet' },
                                            { text: 'storage', link: './storage' },
                                            { text: 'system', link: './system' },
                                            { text: 'template', link: './template' },
                                        ],
                                    },
                                    { text: 'ws', link: './ws' },
                                ],
                            },
                            {
                                text: '思源文件系统',
                                link: './file-system',
                            },
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
