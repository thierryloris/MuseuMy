<script setup lang="ts">
import { type TagProps } from "./types";

const {
    label,
} = defineProps<TagProps>();

const titleStatus: any = ref(false)

</script>

<template>
    <div class="tag regular-text capitalize m-5">{{ label }}</div>
</template>

<style lang="scss" scoped>
.tag {
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
}
</style>