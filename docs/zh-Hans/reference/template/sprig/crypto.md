---
outline: deep
---

# 密码学与安全函数

Sprig 提供了一些高级密码学功能。

## `sha1sum`

`sha1sum` 函数接收一个字符串，并计算其 SHA1 摘要。

```
sha1sum "Hello world!"
```

## `sha256sum`

`sha256sum` 函数接收一个字符串，并计算其 SHA256 摘要。

```
sha256sum "Hello world!"
```

以上内容将以 “ASCII Armored” 格式计算 SHA256 摘要，可安全打印。

## `adler32sum`

`adler32sum` 函数接收一个字符串，并计算其 Adler-32 校验和。

```
adler32sum "Hello world!"
```

## `bcrypt`

`bcrypt` 函数接收一个字符串，并生成其 `bcrypt` 哈希值。

```
bcrypt "myPassword"
```

## `htpasswd`

`htpasswd` 函数接受 `username` 和 `password`，并生成密码的 `bcrypt` 哈希值。结果可用于 [Apache HTTP Server](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html#basic) 上的基本认证。

```
htpasswd "myUser" "myPassword"
```

注意，在模板中直接存储密码是不安全的。

## `randBytes`

`randBytes` 函数接受一个计数 `N` 并生成一个密码学安全（使用 `crypto/rand`）的长度为 `N` 的随机字节序列。该序列以 base64 编码的字符串形式返回。

```
randBytes 24
```

## `derivePassword`

`derivePassword` 函数可用于根据某些共享的“主密码”约束派生特定密码。此算法已[明确定义](https://masterpassword.app/masterpassword-algorithm.pdf)。

```
derivePassword 1 "long" "password" "user" "example.com"
```

注意，将部分直接存储在模板中被视为不安全。

## `genPrivateKey`

`genPrivateKey` 函数生成一个以 PEM 块形式编码的新私钥。

它使用以下值之一作为第一个参数：

- `ecdsa`：生成椭圆曲线 DSA 密钥（P256）
- `dsa`：生成 DSA 密钥（L2048N256）
- `rsa`：生成 RSA 4096 密钥
- `ed25519`：生成 Ed25519 密钥

## `buildCustomCert`

`buildCustomCert` 函数允许自定义证书。

它接受以下字符串参数：

- base64 编码的 PEM 格式证书
- base64 编码的 PEM 格式私钥

它返回具有以下属性的证书对象：

- `Cert`：PEM 编码的证书
- `Key`：PEM 编码的私钥

示例：

```
$ca := buildCustomCert "base64-encoded-ca-crt" "base64-encoded-ca-key"
```

请注意，返回的对象可以传递给 `genSignedCert` 函数，以使用此 CA 签署证书。

## `genCA`

`genCA` 函数使用 2048 位 RSA 私钥生成一个新的自签名 x509 证书颁发机构。

它接受以下参数：

- 主体的通用名称（cn）
- 证书有效期（以天为单位）

它返回具有以下属性的对象：

- `Cert`：PEM 编码的证书
- `Key`：PEM 编码的私钥

示例：

```
$ca := genCA "foo-ca" 365
```

请注意，返回的对象可以传递给 `genSignedCert` 函数，以使用此 CA 签署证书。

## `genCAWithKey`

`genCAWithKey` 函数使用给定的私钥生成一个新的自签名 x509 证书颁发机构。

它接受以下参数：

- 主体的通用名称（cn）
- 证书有效期（以天为单位）
- 私钥（PEM 编码）；不支持 DSA 密钥

它返回具有以下属性的对象：

- `Cert`：PEM 编码的证书
- `Key`：PEM 编码的私钥

示例：

```
$ca := genCAWithKey "foo-ca" 365 (genPrivateKey "rsa")
```

请注意，返回的对象可以传递给 `genSignedCert` 函数，以使用此 CA 签署证书。

## `genSelfSignedCert`

`genSelfSignedCert` 函数使用 2048 位 RSA 私钥生成一个新的自签名 x509 证书。

它接受以下参数：

- 主体的通用名称（cn）
- 可选的 IP 列表；可以为 nil
- 可选的替代 DNS 名称列表；可以为 nil
- 证书有效期（以天为单位）

它返回具有以下属性的对象：

- `Cert`：PEM 编码的证书
- `Key`：PEM 编码的私钥

示例：

```
$cert := genSelfSignedCert "foo.com" (list "10.0.0.1" "10.0.0.2") (list "bar.com" "bat.com") 365
```

## `genSelfSignedCertWithKey`

`genSelfSignedCertWithKey` 函数使用给定的私钥生成一个新的自签名 x509 证书。

它接受以下参数：

- 主体的通用名称（cn）
- 可选的 IP 列表；可以为 nil
- 可选的替代 DNS 名称列表；可以为 nil
- 证书有效期（以天为单位）
- 私钥（PEM 编码）；不支持 DSA 密钥

它返回具有以下属性的对象：

- `Cert`：PEM 编码的证书
- `Key`：PEM 编码的私钥

示例：

```
$cert := genSelfSignedCertWithKey "foo.com" (list "10.0.0.1" "10.0.0.2") (list "bar.com" "bat.com") 365 (genPrivateKey "ecdsa")
```

## `genSignedCert`

`genSignedCert` 函数使用指定的 CA 的 2048 位 RSA 私钥生成一个新的 x509 证书。

它接受以下参数：

- 主体的通用名称（cn）
- 可选的 IP 列表；可以为 nil
- 可选的替代 DNS 名称列表；可以为 nil
- 证书有效期（以天为单位）
- CA（参见 `genCA`）

示例：

```
$ca := genCA "foo-ca" 365
$cert := genSignedCert "foo.com" (list "10.0.0.1" "10.0.0.2") (list "bar.com" "bat.com") 365 $ca
```

## `genSignedCertWithKey`

`genSignedCertWithKey` 函数使用指定的 CA 和给定的私钥生成一个新的 x509 证书。

它接受以下参数：

- 主体的通用名称（cn）
- 可选的 IP 列表；可以为 nil
- 可选的替代 DNS 名称列表；可以为 nil
- 证书有效期（以天为单位）
- CA（参见 `genCA`）
- 私钥（PEM 编码）；不支持 DSA 密钥

示例：

```
$ca := genCA "foo-ca" 365
$cert := genSignedCert "foo.com" (list "10.0.0.1" "10.0.0.2") (list "bar.com" "bat.com") 365 $ca (genPrivateKey "ed25519")
```

## `encryptAES`

`encryptAES` 函数使用 AES-256 CBC 加密文本，并返回一个 base64 编码的字符串。

```
encryptAES "secretkey" "plaintext"
```

## `decryptAES`

`decryptAES` 函数接收一个由 AES-256 CBC 算法编码的 base64 字符串，并返回解码后的文本。

```
"30tEfhuJSVRhpG97XCuWgz2okj7L8vQ1s6V9zVUPeDQ=" | decryptAES "secretkey"
```
