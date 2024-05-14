import { createClient } from "@vercel/kv";

const loadData = async () => {
    let version, bazaarHash, plugins, templates, themes, widgets, downloadCounts;

    const Constants = {
        AliyunServer: "/siyuan-sync", // 云端服务地址，阿里云负载均衡，用于接口，数据同步文件上传、下载会走七牛云 OSS SiYuanSyncServer
        SiYuanSyncServer: "/siyuan-data", // 云端数据同步服务地址，七牛云 OSS，用于数据同步文件上传、下载
        BazaarStatServer: "/bazaar", // 集市包统计服务地址，直接对接 Bucket 没有 CDN 缓存
        BazaarOSSServer: "/oss", // 云端对象存储地址，七牛云，仅用于读取集市包
        LiandiServer: "/ld246", // 链滴服务地址，用于分享发布帖子
    };

    const getSiyuanVersions = async () => {
        version = await fetch(`${Constants.AliyunServer}/apis/siyuan/version`, {
            method: "GET",
            mode: "cors",
        }).then((res) => res.json());
        bazaarHash = version.bazaar;
    };

    const getResources = async () => {
        return Promise.all([fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/plugins.json`, { mode: "no-cors" }).then((res) => res.json()), fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/templates.json`, { mode: "no-cors" }).then((res) => res.json()), fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/themes.json`, { mode: "no-cors" }).then((res) => res.json()), fetch(`${Constants.BazaarOSSServer}/bazaar@${bazaarHash}/stage/widgets.json`, { mode: "no-cors" }).then((res) => res.json())]).then((arr) => {
            plugins = arr[0].repos.map((v) => ({ ...v, type: "plugin" }));
            templates = arr[1].repos.map((v) => ({ ...v, type: "template" }));
            themes = arr[2].repos.map((v) => ({ ...v, type: "theme" }));
            widgets = arr[3].repos.map((v) => ({ ...v, type: "widget" }));
        });
    };

    const getUserRepos = () => {
        return [...plugins, ...templates, ...themes, ...widgets].map((p) => {
            const reponame = p?.url.split("@")[0];
            const author = reponame.split("/")[0];
            return {
                ...p,
                username: author,
                type: p.type,
                downloads: downloadCounts[reponame]?.downloads || 0,
                icon: `https://oss.b3logfile.com/package/${p.url}/icon.png`,
            };
        });
    };

    const URLS = {
        DOWNLOAD_COUNTS: `${Constants.BazaarStatServer}/bazaar/index.json`,
    };

    const getDownloadCounts = async () => {
        const res = await fetch(`${URLS.DOWNLOAD_COUNTS}`, { method: "GET" }).then((res) => res.json());
        downloadCounts = res;
    };

    await getDownloadCounts();
    await getSiyuanVersions();
    await getResources();
    return getUserRepos();
};

export default async function handler(request, response) {
    if (!request.url) return response.status(400);

    const date = new Date();
    const day = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;

    const storage = createClient({
        url: process.env.DOC_STORAGE_REST_API_URL || "",
        token: process.env.DOC_STORAGE_REST_API_TOKEN || "",
    });

    const v = await storage.get(day);

    if (!v) {
        const result = await loadData();
        await storage.set(day, result);
    }

    return response.status(200).send(null);
}
