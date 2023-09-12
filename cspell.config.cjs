// cSpell Settings
// REF https://cspell.org/configuration/
module.exports = {
    $schema: "https://github.com/streetsidesoftware/cspell/raw/main/packages/cspell-types/cspell.schema.json",
    // Version of the setting file.
    version: "0.0.0",
    // language - current active spelling language
    language: "en",
    // words - list of words to be always considered correct
    words: [
        "afterbegin",
        "backlink",
        "blockicon",
        "blockquote",
        "blockref",
        "breadcrumbmore",
        "contenteditable",
        "docpath",
        "editorcontent",
        "editortitleicon",
        "endregion",
        "epub",
        "fcontent",
        "fileannotationref",
        "filetree",
        "frontends",
        "frostime",
        "fullscreen",
        "hpath",
        "iframe",
        "jsdeliver",
        "katex",
        "mindmap",
        "noneditableblock",
        "ofetch",
        "pandoc",
        "protyle",
        "reponame",
        "setext",
        "siyuan",
        "succ",
        "terwer",
        "topbar",
        "vitepress",
        "webpake",
        "yingyi",
        "zuoez",
        "zuoqiu",
    ],
    ignoreRegExpList: [
        String.raw`\d{14}-[0-9a-z]{7}`, // 块 ID
    ],
    // flagWords - list of words to be always considered incorrect
    // This is useful for offensive words and common spelling errors.
    // For example "hte" should be "the"
    flagWords: [
    ],
    ignorePaths: [
        "./package.json",
        "./pnpm-lock.yaml",

        "./node_modules/**",
        "./temp/**",

        "./docs/.vitepress/cache/**",
        "./docs/.vitepress/dist/**",
    ],
};
