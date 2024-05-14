/**
 * Copyright (C) 2023 SiYuan Community
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import fs from "node:fs";

function copy() {
    const targets = [
        {
            src: "./node_modules/@siyuan-community/siyuan-sdk/dist/schemas/",
            dest: "./docs/public/schemas/",
        },
        {
            src: "./node_modules/@siyuan-community/siyuan-sdk/dist/schemas/",
            dest: "./docs/snippets/siyuan-sdk/schemas/",
        },
        {
            src: "./node_modules/@siyuan-community/siyuan-sdk/dist/types/",
            dest: "./docs/snippets/siyuan-sdk/types/",
        },
    ];

    for (const target of targets) {
        fs.cpSync(target.src, target.dest, {
            recursive: true,
        });
    }
}

copy();
