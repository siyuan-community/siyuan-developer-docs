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

// https://vitepress.dev/guide/custom-theme
import "./style.css";

import { injectSpeedInsights } from "@vercel/speed-insights";
import Theme from "vitepress/theme";
import { h } from "vue";

// @ts-expect-error 类型 “ImportMeta” 上不存在属性 “glob”
const modules = import.meta.glob("./../components/**/*.vue", { eager: true });

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout);
    },
    enhanceApp(ctx) {
        for (const path in modules) {
            const mod = modules[path];
            const paths = path.split("/");
            const moduleName = paths[paths.length - 1].replace(".vue", "");
            ctx.app.component(moduleName, mod.default);
        }
        injectSpeedInsights();
        Theme.enhanceApp(ctx);
        // ...
    },
};
