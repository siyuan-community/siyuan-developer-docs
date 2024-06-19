import antfu from "@antfu/eslint-config";

export default antfu({
    ignores: [
        "./temp",
        "**/*.md",
    ],
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: true,
        arrowParens: true,
        quoteProps: "as-needed",
    },
    yaml: {
        overrides: {
            "yaml/indent": ["error", 2],
        },
    },
    vue: {
        overrides: {
            "vue/html-self-closing": [
                "warn",
                {
                    html: {
                        void: "always",
                    },
                },
            ],
        },
    },
});
