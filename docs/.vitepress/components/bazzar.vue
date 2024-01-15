
<script setup>
import { ref, computed, onMounted } from 'vue';

const types = [
    { type: 'plugin', name: '插件' },
    { type: 'widget', name: '挂件' },
    { type: 'theme', name: '主题' },
    { type: 'template', name: '模板' },
]
const plugins = ref([]);
const widgets = ref([]);
const themes = ref([]);
const templates = ref([]);
const userRepos = ref([]);

const downloadCounts = ref(null);
const bazaarHash = ref('');
const username = ref('');

let selectedRankType = ref('plugin')

const version = ref(null);

const VERSION = '2.12.2';

const Constants = {
    AliyunServer: "https://siyuan-sync.b3logfile.com", // 云端服务地址，阿里云负载均衡，用于接口，数据同步文件上传、下载会走七牛云 OSS SiYuanSyncServer
    SiYuanSyncServer: "https://siyuan-data.b3logfile.com/", // 云端数据同步服务地址，七牛云 OSS，用于数据同步文件上传、下载
    BazaarStatServer: "http://bazaar.b3logfile.com", // 集市包统计服务地址，直接对接 Bucket 没有 CDN 缓存
    BazaarOSSServer: "https://oss.b3logfile.com", // 云端对象存储地址，七牛云，仅用于读取集市包
    LiandiServer: "https://ld246.com", // 链滴服务地址，用于分享发布帖子
};

const getSiyuanVersions = async () => {
    version.value = await fetch(`${Constants.AliyunServer}/apis/siyuan/version?ver=${VERSION}`, { method: 'GET', mode: 'cors' }).then((res) => res.json());
    bazaarHash.value = version.value.bazaar;
    console.log(version);
}

const getResources = async () => {
    return Promise.all([
        fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/plugins.json`, { mode: 'no-cors' }).then((res) => res.json()),
        fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/templates.json`, { mode: 'no-cors' }).then((res) => res.json()),
        fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/themes.json`, { mode: 'no-cors' }).then((res) => res.json()),
        fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/widgets.json`, { mode: 'no-cors' }).then((res) => res.json()),
    ]).then((arr) => {
        plugins.value = arr[0].repos.map((v) => ({ ...v, type: 'plugin' }));
        templates.value = arr[1].repos.map((v) => ({ ...v, type: 'template' }));
        themes.value = arr[2].repos.map((v) => ({ ...v, type: 'theme' }));
        widgets.value = arr[3].repos.map((v) => ({ ...v, type: 'widget' }));
    });
}

const URLS = {
    DOWNLOAD_COUNTS: `${Constants.BazaarStatServer}/bazaar/index.json`,
};

const getDownloadCounts = async () => {
    const res = await fetch(`${URLS.DOWNLOAD_COUNTS}`, { method: 'GET' }).then((res) => res.json())
    downloadCounts.value = res;
}

const namedUserRepos = computed(() => {
    let result = userRepos.value;
    if (username) {
        result = result.filter((v) => v.username === username);
    }
    if (selectedRankType !== 'all') {
        result = result.filter((v) => v.type === selectedRankType);
    }
    return result.sort((a, b) => b.downloads - a.downloads);
})
const total = computed(() => namedUserRepos.value.reduce((a, i) => (i.downloads || 0) + a, 0));

const getStyle = (type) => {
    return {
        color: 'white',
        backgroundColor: ['red', 'blue', 'orange', 'green'][
            ['theme', 'template', 'plugin', 'widget'].findIndex((v) => v === type)
        ],
        border: '0',
        borderRadius: '4px',
        padding: '2px 4px',
        display: 'inline-block',
    }
}

onMounted(async () => {
    await getDownloadCounts();
    await getSiyuanVersions();
    await getResources();
})

</script>

<template>
    <div class="devtool-plugin-tab" style="padding: 12px">
        <h1>Developer Tools</h1>
        <div style="margin: 12px 0 5px">
            <span>username:</span>
            <input class="b3-input" style="margin: 0 12px;" v-model="username" />
        </div>
        <div>
            <button class="b3-button" style="margin-right: 8px" v-for="t in types" @click="selectedRankType = t.type">{{
                t.name }}</button>
        </div>
        <div style="display: flex; flex-wrap: wrap;">
            <h2 style="margin: 12px 0 5px; width: 100%">Repos</h2>
            <div style="margin: 6px 0; width: 100%">Total Downloads: {{ total }}</div>
            <div style="margin: 6px 0; width: 100%">Total Count: {{ namedUserRepos.length }}</div>
            <div class="user-repo-container">
                <template v-for="p in namedUserRepos">
                    <div class="user-repo" v-if="p.package">
                        <div>
                            <dt>Name:&nbsp</dt>
                            <dd style="display: inline-block"><a :href="p.package.url" target="_blank">{{
                                p.package.displayName['zh_CN'] || p.package.displayName['default'] ||
                                p.package.name }}</a></dd>
                        </div>
                        <div v-if="!username">
                            <dt>Username:&nbsp</dt>
                            <dd style="display: inline-block">{{ p.username }}</dd>
                        </div>
                        <div>
                            <dt>Type:&nbsp</dt>
                            <dd :style="getStyle(p.type)">{{ p.type }}</dd>
                        </div>
                        <div>
                            <dt>Download:&nbsp</dt>
                            <dd style="display: inline-block">{{ p.downloads }}</dd>
                        </div>
                        <div>
                            <dt>Version:&nbsp</dt>
                            <dd style="display: inline-block">{{ p.package.version }}</dd>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <div style="margin: 12px 0 5px">
            <h2>Rank</h2>

            <div id="echarts" ref="echarts" style="width: 100%; height: 400px"></div>
        </div>
    </div>
</template>