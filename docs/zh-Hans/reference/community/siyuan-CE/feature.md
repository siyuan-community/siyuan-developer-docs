---
outline: deep
---

# 社区版新特性

## `WebDAV` 服务 <Badge type="tip" text="^2.10.15" />

- 该功能默认开启
- 内核提供 `WebDAV` 服务，可通过 `WebDAV` 客户端访问工作空间目录
- 服务路径: `http(s)://hostname:port/webdav/`
- 文件目录: 当前工作空间目录
- 鉴权方案: [HTTP Basic 验证方案](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Authentication#basic_验证方案)
  - 用户: `<任意值>`
  - 密码: `<访问鉴权码>`

## 访问远程思源笔记服务 <Badge type="tip" text="^2.10.16" />

- 该功能默认关闭
- 桌面端命令行参数
  - `--remote`
    - 指定远程的思源笔记服务的源地址
    - 设置该参数后，桌面端将不再启动本地的思源笔记服务, 而是通过指定的远程地址访问思源笔记服务
    - 示例: `--remote=https://your.domain.name:12345`
    - 无默认值

## 单独配置 Electron 网络代理 <Badge type="tip" text="^2.11.4" />

- 该功能默认关闭
- 桌面端命令行参数
  - `--proxy`
    - 指定所使用的网络代理服务地址
    - 设置该参数后，桌面端将不再使用用户所指定的网络代理服务地址，而是使用该参数指定的网络代理服务地址
    - 配合 `--remote` 参数使用
      - 以避免本地 Electron 的网络代理服务地址被远程思源笔记内核服务的网络代理服务地址覆盖
    - 示例: `--proxy=socks5://username:password@localhost:1080`
    - 在设置了 `--remote` 时默认使用系统代理

## 内核 `SSL/TLS` 安全服务 <Badge type="tip" text="^2.10.16" />

- 该功能默认关闭
- 内核支持启用 [SSL](https://developer.mozilla.org/zh-CN/docs/Glossary/SSL)/[TLS](https://developer.mozilla.org/zh-CN/docs/Glossary/TLS) 安全服务，可通过 `https` 与 `wss` 协议访问思源笔记服务
- 桌面端命令行参数
  - `--tls-kernel`
    - 启用内核 SSL/TLS 安全服务
    - 示例: `--tls-kernel`
    - 无默认值
  - `--tls-cert-file`
    - 指定 SSL/TLS 全链证书文件路径
    - 文件编码格式: `PEM`
    - 示例: `--tls-cert-file=/path/to/fullchain.pem`
    - 默认值: `<思源工作空间>/conf/tls/siyuan.pem.cer`
  - `--tls-key-file`
    - 指定 SSL/TLS 私钥文件路径
    - 文件编码格式: `PEM`
    - 示例: `--tls-key-file=/path/to/privkey.pem`
    - 默认值: `<思源工作空间>/conf/tls/siyuan.pem.key`
  - `--hostname`
    - 指定 SSL/TLS 证书的主机名, 桌面端使用该主机名访问本地的思源笔记服务
    - 示例: `--hostname=siyuan.localhost`
    - 默认值: `127.0.0.1`
  - `--ignore-certificate-errors`
    - 忽略 SSL/TLS 证书错误
    - 如果使用系统不信任的自签名可能需要设置该参数以绕过证书校验
    - 详情请参考: [支持的命令行开关 --ignore-certificate-errors | Electron](https://www.electronjs.org/zh/docs/latest/api/command-line-switches#--ignore-certificate-errors)
    - 示例: `--ignore-certificate-errors`
    - 无默认值
- 内核命令行参数
  - `--tls-kernel`
    - 启用内核 SSL/TLS 安全服务
    - 示例: `--tls-kernel true`
    - 默认值: `false`
  - `--tls-cert-file`
    - 指定 SSL/TLS 全链证书文件路径
    - 文件编码格式: `PEM`
    - 示例: `--tls-cert-file /path/to/fullchain.pem`
    - 默认值: `<思源工作空间>/conf/tls/siyuan.pem.cer`
  - `--tls-key-file`
    - 指定 SSL/TLS 私钥文件路径
    - 文件编码格式: `PEM`
    - 示例: `--tls-key-file /path/to/privkey.pem`
    - 默认值: `<思源工作空间>/conf/tls/siyuan.pem.key`
