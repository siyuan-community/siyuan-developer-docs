<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
    member: string;
    filename?: string;
}>();

const docContainerRef = ref();
onMounted(() => {
    const doms = docContainerRef.value.querySelectorAll("[src]");

    doms.forEach((dom) => {
        const originSrc = dom.getAttribute("src");

        dom.setAttribute("src", import.meta.env.DEV ? `/members/${props.member}/assets${originSrc.split("assets").pop()}` : `/assets${originSrc.split("assets").pop()}`);
    });
});
</script>

<template>
    <div
        ref="docContainerRef"
    >
        <slot />
    </div>
</template>

<style lang="scss" scoped>

</style>
