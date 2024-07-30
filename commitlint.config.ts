// REF: https://commitlint.js.org/reference/configuration.html

import {
    RuleConfigSeverity,
    type UserConfig,
} from "@commitlint/types";

const Configuration = {
    extends: [
        "@commitlint/config-conventional",
    ],
    rules: {
        "header-max-length": [
            RuleConfigSeverity.Warning,
            "always",
            72,
        ],
    },
} satisfies UserConfig;

export default Configuration;
