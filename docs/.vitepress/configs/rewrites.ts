// Copyright (C) 2024 SiYuan Community
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const locales = [
    "en",
    "zh",
];

const localeMap = {
    en: "en",
    zh: "zh-Hans",
};

const rewrites = {};

// 处理成员文章
locales.forEach((locale) => {
    const path = `members/:member/{:doc}?{-:version(${locale})}${locale === "zh" ? "?" : ""}.md`;
    rewrites[path] = `${localeMap[locale]}/contents/:doc.md`;

    rewrites[`members/index${locale === "zh" ? "" : `-${locale}`}.md`] = `${localeMap[locale]}/contents/index.md`;
});

interface SidebarItem {
    text: string;
    link: string;
    order?: number;
    locale?: string;
    lastModified?: Date | string;
}

function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function getSidebar(folder: string): SidebarItem[] {
    // 使用 '../..' 形式计算目录路径
    const directoryPath = path.join(__dirname, "..", "..", folder);

    function readDirRecursive(dir: string): SidebarItem[] {
        let results: SidebarItem[] = [];
        const list = fs.readdirSync(dir);

        list.forEach((file) => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);

            if (stat && stat.isDirectory()) {
                // 如果是文件夹，递归
                results = results.concat(readDirRecursive(filePath));
            }
            else if (file.endsWith(".md")) {
                // 如果是 .md 文件，处理它
                const fileContent = fs.readFileSync(filePath, "utf-8");
                const { data } = matter(fileContent);

                // 提取语言代码和文件名
                const baseName = path.basename(file, ".md");
                const localeMatch = baseName.match(new RegExp(`-(${locales.join("|")})$`));
                const locale = data.locale || (localeMatch ? localeMatch[1] : "zh"); // 默认使用 'zh' 如果没有匹配

                // 验证 locale 是否在 locales 数组中
                const finalLocale = locales.includes(locale) ? locale : "zh"; // 默认使用 'zh'

                const finalPath = `/${localeMap[finalLocale]}/contents/${baseName.replace(new RegExp(`-(${locales.join("|")})$`), "")}`;

                // 去掉 locale 部分，并替换 '-' 为 ' '，然后将第一个字母大写
                const text = baseName
                    .replace(new RegExp(`-(${locales.join("|")})$`), "") // 去掉 locale 部分
                    .replace(/-/g, " ") // 替换 '-' 为 ' '
                    .toLowerCase(); // 转换为小写字母
                const capitalizedText = capitalizeFirstLetter(text);

                const isIntro = finalPath.includes("contents/index");
                results.push({
                    text: data.title || capitalizedText,
                    order: data.order,
                    link: isIntro ? finalPath.replace("index", "") : finalPath,
                    locale: finalLocale,
                    lastModified: stat.mtime,
                });
            }
        });

        return results;
    }

    const files = readDirRecursive(directoryPath);

    // 按修改时间排序
    return files.sort((a, b) => {
        if (a.order && b.order && a.order !== b.order) {
            return b.order - a.order;
        }
        if (!a.order && b.order) {
            return 1;
        }
        if (a.order && !b.order) {
            return -1;
        }
        // @ts-expect-error last
        return new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime();
    });
}

type LocaleValues = typeof localeMap[keyof typeof localeMap];
const contentsSidebar: {
    [key: LocaleValues]: SidebarItem[];
} = {};

const temp = getSidebar("members");

locales.forEach((locale) => {
    contentsSidebar[localeMap[locale]] = temp.filter((i) => i.locale === locale).map((i) => ({
        text: i.text,
        link: i.link,
    }));
});

export {
    contentsSidebar,
};

export default rewrites;
