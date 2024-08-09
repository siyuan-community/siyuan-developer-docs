<!--
 Copyright (C) 2024 SiYuan Community

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<script setup lang="ts">
import { useData } from "vitepress";

const data = useData();

const { lang } = data;

const text = lang.value === "zh-Hans" ? "联系我们" : "Contact US";
</script>

<template>
    <BaseLink
        :href="`/${lang}/about/#contactUS`"
    >
        {{ text }}
    </BaseLink>
</template>

<style lang="scss" scoped>

</style>
