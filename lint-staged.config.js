/**
 * @type {import("lint-staged").Config}
 * @see {@link https://www.npmjs.com/package/lint-staged | lint-staged}
 */
const config = {
    "*": "cspell",
    "*.{js,ts,vue,css}": "eslint --max-warnings 0 --no-warn-ignored --fix",
    "*.md": "prettier --ignore-unknown -w",
};

export default config;
