import express from "express";

const Constants = {
    AliyunServer: "https://siyuan-sync.b3logfile.com", // 云端服务地址，阿里云负载均衡，用于接口，数据同步文件上传、下载会走七牛云 OSS SiYuanSyncServer
    SiYuanSyncServer: "https://siyuan-data.b3logfile.com/", // 云端数据同步服务地址，七牛云 OSS，用于数据同步文件上传、下载
    BazaarStatServer: "http://bazaar.b3logfile.com", // 集市包统计服务地址，直接对接 Bucket 没有 CDN 缓存
    BazaarOSSServer: "https://oss.b3logfile.com", // 云端对象存储地址，七牛云，仅用于读取集市包
    LiandiServer: "https://ld246.com", // 链滴服务地址，用于分享发布帖子
};


const app = express();

app.get("/api", (req, res) => {
	res.end(`Hello! Serverless`);
});

app.get("/api/item/:slug", (req, res) => {
	const { slug } = req.params;
	res.end(`Item: ${slug}`);
});

export default app;