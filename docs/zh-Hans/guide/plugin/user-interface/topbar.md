# 顶栏 Topbar

顶栏作为一个常驻的内容展示部分，包含了窗口控制、思源菜单、撤退还原、同步、插件菜单等功能。

思源提供了addTopBar接口，用于在顶栏添加内容。

## 代码示例

将下面的代码粘贴到你的插件的 `index.js` 中，即可查看这部分效果。

```javascript
const { Plugin, Menu, getFrontend } = require("siyuan");

module.exports = class ExamplePlugin extends Plugin {
    onload() {
        const frontEnd = getFrontend();
        this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile";

        const topBarElement = this.addTopBar({
            icon: "iconHelp", // 使用图标库中的图标，可以在工作空间/conf/appearance/icons/index.html中查看内置图标
            title: "Siyuan Example",
            position: "right",
            callback: () => {
                if (this.isMobile) {
                    this.addMenu();
                }
                else {
                    let rect = topBarElement.getBoundingClientRect();
                    // 如果被隐藏，则使用更多按钮
                    if (rect.width === 0) {
                        rect = document.querySelector("#barMore").getBoundingClientRect();
                    }
                    if (rect.width === 0) {
                        rect = document.querySelector("#barPlugins").getBoundingClientRect();
                    }
                    this.addMenu(rect);
                }
            },
        });
    }

    addMenu(rect) {
        const menu = new Menu("topBarSample");
        menu.addItem({
            icon: "iconInfo",
            label: "Console Help",
            click: () => {
                console.log("Help");
            },
        });
        if (this.isMobile) {
            menu.fullscreen();
        }
        else {
            menu.open({
                x: rect.right,
                y: rect.bottom,
                isLeft: true,
            });
        }
    }
};
```

## 效果

![图标](/static/user-interface/topbar-1.png)

![图标](/static/user-interface/topbar-2.png)
