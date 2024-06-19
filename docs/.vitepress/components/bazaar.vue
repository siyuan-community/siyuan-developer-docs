<!--
 Copyright (C) 2024 SiYuan Community

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<script setup>
import { computed, onMounted, ref } from "vue";

const types = [
    { type: "all", name: "全部" },
    { type: "plugin", name: "插件" },
    { type: "widget", name: "挂件" },
    { type: "theme", name: "主题" },
    { type: "template", name: "模板" },
];
const plugins = ref([]);
const widgets = ref([]);
const themes = ref([]);
const templates = ref([]);
const userRepos = ref([]);

const downloadCounts = ref(null);
const bazaarHash = ref("");
const username = ref("");

const selectedRankType = ref("all");

const version = ref(null);

const Constants = {
    AliyunServer: "/siyuan-sync", // 云端服务地址，阿里云负载均衡，用于接口，数据同步文件上传、下载会走七牛云 OSS SiYuanSyncServer
    SiYuanSyncServer: "/siyuan-data", // 云端数据同步服务地址，七牛云 OSS，用于数据同步文件上传、下载
    BazaarStatServer: "/bazaar", // 集市包统计服务地址，直接对接 Bucket 没有 CDN 缓存
    BazaarOSSServer: "/oss", // 云端对象存储地址，七牛云，仅用于读取集市包
    LiandiServer: "/ld246", // 链滴服务地址，用于分享发布帖子
};

async function getSiyuanVersions() {
    version.value = await fetch(
        `${Constants.AliyunServer}/apis/siyuan/version`,
        {
            method: "GET",
            mode: "cors",
        },
    ).then(res => res.json());
    bazaarHash.value = version.value.bazaar;
}

async function getResources() {
    return Promise.all(
        [
            "plugins",
            "templates",
            "themes",
            "widgets",
        ]
            .map(name => `${Constants.BazaarOSSServer}/bazaar@${bazaarHash.value}/stage/${name}.json`)
            .map(url => fetch(url, { mode: "no-cors" }).then(res => res.json())),
    ).then((arr) => {
        plugins.value = arr[0].repos.map(v => ({ ...v, type: "plugin" }));
        templates.value = arr[1].repos.map(v => ({ ...v, type: "template" }));
        themes.value = arr[2].repos.map(v => ({ ...v, type: "theme" }));
        widgets.value = arr[3].repos.map(v => ({ ...v, type: "widget" }));
    });
}

function getUserRepos() {
    return [
        ...plugins.value,
        ...templates.value,
        ...themes.value,
        ...widgets.value,
    ].map((p) => {
        const reponame = p?.url.split("@")[0];
        const author = reponame.split("/")[0];
        return {
            ...p,
            username: author,
            type: p.type,
            downloads: downloadCounts.value[reponame]?.downloads || 0,
            icon: `https://oss.b3logfile.com/package/${p.url}/icon.png`,
        };
    });
}

const URLS = {
    DOWNLOAD_COUNTS: `${Constants.BazaarStatServer}/bazaar/index.json`,
};

async function getDownloadCounts() {
    const res = await fetch(`${URLS.DOWNLOAD_COUNTS}`, { method: "GET" }).then(res => res.json());
    downloadCounts.value = res;
}

const namedUserRepos = computed(() => {
    let result = userRepos.value;
    if (username.value) {
        result = result.filter(v => v.username === username.value);
    }
    if (selectedRankType.value !== "all") {
        result = result.filter(v => v.type === selectedRankType.value);
    }
    return result.sort((a, b) => b.downloads - a.downloads);
});
const total = computed(() => namedUserRepos.value.reduce((a, i) => (i.downloads || 0) + a, 0));

function getStyle(type) {
    return {
        backgroundColor: [
            "red",
            "blue",
            "orange",
            "green",
        ][[
            "theme",
            "template",
            "plugin",
            "widget",
        ].findIndex(v => v === type)],
    };
}

onMounted(async () => {
    await getDownloadCounts();
    await getSiyuanVersions();
    await getResources();
    userRepos.value = getUserRepos();
});
</script>

<template>
    <div
        class="devtool-plugin-tab"
        style="padding: 12px"
    >
        <div class="center">
            <button
                v-for="(t, i) in types"
                :key="i"
                class="b3-button"
                style="margin-right: 8px"
                @click="selectedRankType = t.type"
            >
                {{ t.name }}
            </button>
        </div>
        <div class="center">
            <span style="margin: 6px 0; width: 100%">Total Downloads: {{ total }}</span>
            <span style="margin: 6px 12px; width: 100%"> Total Count: {{ namedUserRepos.length }} </span>
        </div>
        <div>
            <div class="user-repo-container">
                <template
                    v-for="(p, i) in namedUserRepos"
                    :key="i"
                >
                    <div
                        v-if="p.package"
                        class="user-repo fn__flex"
                    >
                        <div class="fn__flex-1">
                            <div>
                                <dt>Name:&nbsp;</dt>
                                <dd style="display: inline-block">
                                    <a
                                        :href="p.package.url"
                                        target="_blank"
                                    >{{ (p?.package?.displayName || {}).zh_CN || (p?.package?.displayName || {}).default || p?.package?.name }}</a>
                                </dd>
                            </div>
                            <div>
                                <dt>Username:&nbsp;</dt>
                                <dd style="display: inline-block">
                                    {{ p.username }}
                                </dd>
                            </div>
                            <div>
                                <dt>Type:&nbsp;</dt>
                                <dd :style="getStyle(p.type)">
                                    {{ p.type }}
                                </dd>
                            </div>
                            <div>
                                <dt>Download:&nbsp;</dt>
                                <dd style="display: inline-block">
                                    {{ p.downloads }}
                                </dd>
                            </div>
                            <div>
                                <dt>Version:&nbsp;</dt>
                                <dd style="display: inline-block">
                                    {{ p.package.version }}
                                </dd>
                            </div>
                        </div>
                        <img
                            class="user-repo-icon"
                            :src="p.icon"
                            :alt="p.package.name"
                            loading="lazy"
                        />
                    </div>
                </template>
            </div>
        </div>
        <!-- <div style="margin: 12px 0 5px">
            <h2>Rank</h2>
            <div id="echarts" ref="echarts" style="width: 100%; height: 400px"></div>
        </div> -->
    </div>
</template>

<style scoped>
.devtool-plugin-tab {
    font-size: 12px;
    line-height: 1.4;
}
.b3-button {
    padding: 4px 6px;
    margin-bottom: 8px;
    border-radius: 4px;
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
}
.type {
    color: white;
    border: 0px;
    border-radius: 4px;
    padding: 2px 4px;
    display: inline-block;
    margin-left: 4px;
    line-height: 1;
}
.center {
    text-align: center;
}
.fn__flex {
    display: flex;
}

.fn__flex-1 {
    flex: 1;
}

dd {
    display: inline-block;
    margin-left: 4px;
}
dd a {
    text-decoration: underline;
    color: var(--vp-code-link-color);
}
dt {
    font-weight: bold;
    display: inline-block;
}
.user-repo-container {
    margin: 0 -8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}
.user-repo {
    margin: 12px 6px 0;
    width: 320px;
    border: 1px solid var(--vp-input-border-color);
    background-color: var(--vp-input-switch-bg-color);
    border-radius: 4px;
    padding: 12px;
}
.user-repo-icon {
    height: 80px;
    width: 80px;
}
</style>
