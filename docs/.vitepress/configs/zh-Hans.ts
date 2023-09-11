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
                        link: '/zh-Hans/guide/plugin/development/event-bus/',
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
                text: '内核',
                // link: '/zh-Hans/reference/api/kernel/',
                items: [
                    { text: '内核 API', link: '/zh-Hans/reference/api/kernel/' },
                    { text: 'SQL表结构', link: '/zh-Hans/reference/api/kernel/sql' }
                ],
            },
            {
                text: '插件 API',
                link: '/zh-Hans/reference/api/plugin/',
                items: [
                    {
                        text: '类型与接口',
                        link: '/zh-Hans/reference/api/plugin/types',
                        items: [
                        ],
                    },
                    {
                        text: '类',
                        items: [
                            {
                                text: 'Plugin',
                                link: '/zh-Hans/reference/api/plugin/class/Plugin',
                            },
                            {
                                text: 'Dialog',
                                link: '/zh-Hans/reference/api/plugin/class/Dialog',
                            },
                            {
                                text: 'Menu',
                                link: '/zh-Hans/reference/api/plugin/class/Menu',
                            },
                            {
                                text: 'EventBus',
                                link: '/zh-Hans/reference/api/plugin/class/EventBus',
                            },
                            {
                                text: 'Setting',
                                link: '/zh-Hans/reference/api/plugin/class/Setting',
                            },
                            {
                                text: 'Lute',
                                link: '/zh-Hans/reference/api/plugin/class/Lute',
                            }
                        ],
                    },
                    {
                        text: '方法',
                        link: '/zh-Hans/reference/api/plugin/method',
                        items: [
                        ],
                    }
                ],
            },
            {
                text: 'DOM 结构',
                // link: '/zh-Hans/reference/api/kernel/',
                items: [
                ],
            },
            {
                text: '社区资源',
                link: '/zh-Hans/reference/community/',
                items: [
                    {
                        text: 'siyuan-sdk',
                        link: '/zh-Hans/reference/community/siyuan-sdk/',
                        items: [
                            {
                                text: '开始',
                                link: '/zh-Hans/reference/community/siyuan-sdk/start',
                            },
                            {
                                text: '思源内核 API',
                                link: '/zh-Hans/reference/community/siyuan-sdk/kernel-api',
                            },
                            {
                                text: '思源文件系统',
                                link: '/zh-Hans/reference/community/siyuan-sdk/file-system',
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
