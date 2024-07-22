/**
 * @type {import("lint-staged").Config}
 * @see {@link https://www.npmjs.com/package/lint-staged | lint-staged}
 */
const config = {
    "*.{js,ts,vue,css}": "eslint --fix",
    "*.md": "prettier --ignore-unknown -w",
};

export default config;
