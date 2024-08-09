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

interface SidebarItem {
    title: string;
    member: string;
    text: string;
    filename: string;
    filenameWithoutLocale: string;
    filePath: string;
    link: string;
    order?: number;
    locale?: string;
    lastModified?: Date | string;
}

function getTitleFromContent(content) {
    // 使用正则表达式匹配第一行非空白内容
    const firstLine = content.trim().split("\n").find((line) => line.trim() !== "");
    return firstLine ? firstLine.replace(/^#\s*/, "").trim() : "Untitled";
}

function getSidebar(folder: string): SidebarItem[] {
    // 使用 '../..' 形式计算目录路径
    const directoryPath = path.join(__dirname, "../../../", folder);

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
                const { data, content } = matter(fileContent);

                // 提取语言代码和文件名
                const baseName = path.basename(file, ".md");
                const localeMatch = baseName.match(new RegExp(`-(${locales.join("|")})$`));
                const locale = data.locale || (localeMatch ? localeMatch[1] : "zh"); // 默认使用 'zh' 如果没有匹配

                // 验证 locale 是否在 locales 数组中
                const finalLocale = locales.includes(locale) ? locale : "zh"; // 默认使用 'zh'

                const finalPath = `/${localeMap[finalLocale]}/contents/${baseName.replace(new RegExp(`-(${locales.join("|")})$`), "")}`;

                const firstLineOfContent = getTitleFromContent(content);
                const memberInPath = filePath.replace(`${directoryPath}/`, "")
                    .replace(`${file}`, "")
                    .replace("/", "");
                const member = memberInPath;

                const isIntro = finalPath.includes("contents/index");
                results.push({
                    text: data.title || firstLineOfContent,
                    title: data.title || firstLineOfContent,
                    filename: baseName,
                    filePath: `/members/${filePath.replace(`${directoryPath}/`, "")}`,
                    member,
                    order: data.order,
                    link: isIntro ? finalPath.replace("index", "") : finalPath,
                    filenameWithoutLocale: baseName.replace(new RegExp(`-(${locales.join("|")})$`), ""),
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

export const posts = getSidebar("members");

export const postsSidebar = posts.map((i) => ({
    text: i.text,
    link: i.filename === "index" ? "/" : `/${i.filename}`,
}));

type LocaleValues = typeof localeMap[keyof typeof localeMap];
const postsSidebarWithLocale: {
    [key: LocaleValues]: Array<{
        text: string;
        link: string;
    }>;
} = {};

locales.forEach((locale) => {
    postsSidebarWithLocale[localeMap[locale]] = posts.filter((i) => i.locale === locale).map((i) => ({
        text: i.text,
        link: i.link,
    }));
});

export {
    postsSidebarWithLocale,
};
