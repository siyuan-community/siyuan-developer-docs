# 5分钟上手挂件开发

## 挂件是什么

挂件是以可调整大小的html网页块儿形式展示在笔记正文里面的元素，可以通过快捷指令快速插入到笔记中，实现一些交互，记录，同时可以引入第三方js，以及调用本地思源的API来实现更多功能，例如实现与思源笔记数据的交互。

## 挂件文件内容

### 语法：HTML

HTML（HyperText Markup Language）是一种用于创建网页的标记语言。它由一系列的标签（tag）组成，这些标签用于描述网页的结构和内容。HTML标记语言使用尖括号（<>）将标签包围起来，标签通常成对出现，分为开始标签和结束标签。

HTML通过使用不同的标签来定义网页的结构，包括标题、段落、链接、图像、表格等元素。标签可以包含属性，用于提供关于元素的额外信息，如颜色、大小、链接目标等。

HTML是构建网页的基础，它与CSS（层叠样式表）和JavaScript等技术一起使用，可以实现丰富的网页交互和样式效果。通过编写HTML代码，开发人员可以创建具有文本、图像、链接和多媒体等内容的网页，并将其发布到互联网上供用户访问。
当创建网页时，使用HTML可以定义页面的结构和内容。下面是一些常用的HTML标签和它们的作用：

1. `<html>`：定义HTML文档的根元素。
2. `<head>`：定义文档的头部，包含了一些元数据和链接引用。
3. `<title>`：定义网页的标题，显示在浏览器的标题栏或标签页上。
4. `<body>`：定义文档的主体部分，包含了网页的实际内容。
5. `<h1>`到`<h6>`：定义标题，从大到小依次递减，用于显示不同级别的标题。
6. `<p>`：定义段落，用于显示一段文本。
7. `<a>`：定义超链接，用于创建指向其他页面或资源的链接。
8. `<img>`：定义图像，用于显示图片。
9. `<ul>`和`<li>`：定义无序列表，用于显示项目列表。
10. `<ol>`和`<li>`：定义有序列表，用于显示按顺序排列的项目列表。
11. `<table>`、`<tr>`和`<td>`：定义表格，用于显示数据表格。
12. `<div>`：定义文档中的一个区块，用于组织和样式化内容。
13. `<span>`：定义文档中的一个内联元素，用于样式化文本的一部分。

以下是一个简单的HTML示例，展示了如何使用上述标签来创建一个网页：

```html
<!doctype html>
<html>
    <head>
        <title>我的网页</title>
    </head>
    <body>
        <h1>欢迎来到我的网页</h1>
        <p>这是一个示例网页，用于演示HTML标记语言的基本用法。</p>

        <h2>链接示例</h2>
        <a href="https://www.example.com">点击这里</a>访问示例网站。

        <h2>图像示例</h2>
        <img
            src="image.jpg"
            alt="示例图片"
        />

        <h2>列表示例</h2>
        <ul>
            <li>项目1</li>
            <li>项目2</li>
            <li>项目3</li>
        </ul>

        <h2>表格示例</h2>
        <table>
            <tr>
                <td>姓名</td>
                <td>年龄</td>
            </tr>
            <tr>
                <td>张三</td>
                <td>25</td>
            </tr>
            <tr>
                <td>李四</td>
                <td>30</td>
            </tr>
        </table>
    </body>
</html>
```

在上面的示例中，`<!DOCTYPE html>`声明了文档类型为HTML5，`<html>`标签是根元素，包含了整个HTML文档。`<head>`标签内部定义了文档的头部信息，包括标题等。`<body>`标签内部是文档的主体部分，包含了网页的实际内容。

这只是一个简单的示例，HTML标记语言非常丰富，还有更多的标签和属性可用于创建更复杂和交互性的网页。开发人员可以根据需要使用不同的标签和属性来实现所需的效果。

### 核心文件

#### index.html

index.html是挂件插入时会首先加载的界面，入口文件，通常作为主界面出现。

#### widget.json

挂件在集市里的信息，俗称商品描述，不能缺少，否则无法上架（如果你打算上架集市），
该文件内容的描述可见。

## 开发步骤

### UI

可以通过不同的框架进行开发，例如vue和其他的模板语言，但最后都要编译为HTML。

### 后端

后端的交互通过js实现，引入js或者自行编写js，思源允许在html内执行js。

### 数据的存储

目前挂件没有专属的很好的储存数据的API，以下是一个储存数据的思路。

#### 获取数据唯一性标识

```javascript
// 获取当前挂件的块id
const id = window.frameElement.parentElement.parentElement.getAttribute("data-node-id");
```

这里获取到的`id`是当前挂件所在的块id，可以用来给数据加上唯一性标识，并和它所在的块儿联系起来。
示意图：
![](/static/widget/Pasted%20image%2020231204153852.png)
如图，成功让挂件在自己的界面输出了自己所在的块id。

#### 储存数据

获得了可以作为数据唯一键对值的id，下一步就是想办法储存数据，我们可以借助官方给出的API文档中的写入文件的API来进行数据存储。
[思源后台写入文件API](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md#%E5%86%99%E5%85%A5%E6%96%87%E4%BB%B6)

##### 写入文件的API

- `/api/file/putFile`
- 参数为 HTTP Multipart 表单
  - `path`：工作空间路径下的文件路径
  - `isDir`：是否为创建文件夹，为 `true` 时仅创建文件夹，忽略 `file`
  - `modTime`：最近访问和修改时间，Unix time
  - `file`：上传的文件
  - 返回值
  ```json
  {
      "code": 0,
      "msg": "",
      "data": null
  }
  ```

##### 将数据写入文件的示例

```javascript
// 写入文件内容
function putFileContent(path, content) {
    const formData = new FormData();
    formData.append("path", path);
    formData.append("file", new Blob([content]));
    return fetch("/api/file/putFile", {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            if (response.ok) {
                console.log("File saved successfully");
            }
            else {
                throw new Error("Failed to save file");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}
```

这个函数接受两个参数，path和content，其中path就是数据文件的路径，而content则是数据的内容，每次调用这个函数，都会将content的内容通过api接口追加到指定数据文件里面。

##### 数据的储存格式

我个人比较推荐json的键对值储存方式，下面的这个示例也是用的json格式储存数据。

```javascript
function saveIdCityMap(id, city) {
    const idCityMap = getIdCityMap();
    idCityMap[id] = city;
    // 将 idCityMap 写入文件
    putFileContent("/data/widgets/Simple-weather-forecast/data/data.json", JSON.stringify(idCityMap));
}
```

`saveIdCityMap`函数接受两个参数：`id`和`city`，的目的是将`id`和`city`的映射保存到一个文件中。 `getIdCityMap`函数用来获取一个名为`idCityMap`的对象，这个对象包含了已经存在的ID和城市的映射，具体定义看下面的[实例](#执行数据读取后的操作)。将新的`id`和`city`映射添加到`idCityMap`对象中，将更新后的`idCityMap`对象转换成JSON格式的字符串，并将其写入名为`data.json`的文件中（假设`putFileContent`函数可以成功执行）。

#### 读取数据

我们同样可以直接使用后端API来获取数据
[后端获取文件API](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md#%E8%8E%B7%E5%8F%96%E6%96%87%E4%BB%B6)

##### 获取文件

- `/api/file/getFile`
- 参数
  ```json
  {
      "path": "/data/20210808180117-6v0mkxr/20200923234011-ieuun1p.sy"
  }
  ```
  - `path`：工作空间路径下的文件路径
- 返回值
  - 响应状态码 `200`: 文件内容
  - 响应状态码 `202`: 异常信息
    ```json
    {
        "code": 404,
        "msg": "",
        "data": null
    }
    ```

##### 获取数据函数实例

通过这个API我们来构建读取数据的函数，同样是解析json的格式：

```javascript
// 获取文件内容
function getFileContent(path) {
    return fetch("/api/file/getFile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            path,
        }),
    })
        .then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error("Failed to get file content");
            }
        })
        .catch((error) => {
            console.error(error);
        });
}
```

这时候我们就可以在其他地方通过调用这个函数，通过判断返回结果，来判断执行我们需要的响应。

##### 执行数据读取后的操作

```javascript
getIdCityMap()
    .then((idCityMap) => {
        const idCityMapJ = {};

        // 使用正则表达式提取键值对中的键和值
        const regex = /"([^"]+)":"([^"]+)"/g;
        let match;
        // eslint-disable-next-line no-cond-assign
        while ((match = regex.exec(idCityMap)) !== null) {
            const key = match[1];
            const value = match[2];
            idCityMapJ[key] = value;
        }

        const city = idCityMapJ[id];
        console.log(city); // 检查 city 变量的值是否正确获取到

        if (city) {
            // 执行自定义函数
            loadWeatherWidget(city);
        }
        else {
            // 执行自定义函数
            showInputBox();
        }
    })
    .catch((error) => {
        console.log("获取 idCityMap 出错:", error);
    });
```

这里通过寻找有没有id对应的city，来返回结果，可以自定义在两种情况下进行什么自定义操作。

### 与插件联通

一些插件提供了可供前台调用的插件API，我们可以通过调用这些API来实现更多功能，例如[运行javascript](https://github.com/frostime/sy-run-js)插件就为我们开放了几乎所有的api端口：
![](/static/widget/Pasted%20image%2020231204161953.png)
当然，我们也可以在外部编写js，通过该插件提供的接口，将代码片段传入，来运行我们的js脚本：
详情请见[添加 run-js-code 的 api](https://github.com/frostime/sy-run-js/commit/d002c4a5e70b929cfd19e5113208cc447f5e77df)
![](/static/widget/Pasted%20image%2020231204162145.png)

## 发布到集市

### 注册github并发布版本

集市的挂件系统通过对github仓库的发布版本进行定时抓取来更新插件，实际抓取的是package.zip这个压缩包，这个压缩包里面应该至少有index.html，widget.json，README.md（英文说明），README_zh_CN.md（中文说明）这四个文件，如果你的挂件还需要引用外部资源（js，png，svg等等），可以用相对路径进行引用，然后一块儿压缩到package.zip里面，通过release来发布这个package.zip，一定要用版本号作为tag，否则不予索引，例如下图，版本号是0.0.2
![|500](/static/widget/Pasted%20image%2020231204162525.png)

### 第一次发布

第一次发布首先要占坑，也就是署名索引，需要到集市仓库地址的[挂件索引](https://github.com/siyuan-note/bazaar/blob/main/widgets.json)位置，点击编辑，在最后一行添加你的`github用户名/挂件仓库名`，然后可能会提示你需要fork本仓库才能编辑，fork即可，写完直接commit，然后creat pull request，等待开发者审核收录即可，可以在[pull request](https://github.com/siyuan-note/bazaar/pulls)查看收录情况
**例如**
将末尾：
![|500](/static/widget/Pasted%20image%2020231204162655.png)
修改为：
![](/static/widget/Pasted%20image%2020231204163237.png)

### 后续版本更新

后续修改完挂件代码后，只需要更改widget里面的version为更高的版本，然后打包成package.zip，在github上发布release，tag和更新的version统一即可，集市会隔一段时间自动收录
