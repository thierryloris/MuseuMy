<script setup lang="ts">
import { type InputProps } from "./types";

const {
    label,
    placeholder,
} = defineProps<InputProps>();

const model = defineModel()

</script>

<template>
    <input class="input" type="text" :label="label" v-model="model" :placeholder="placeholder" />
    <slot name="suffix"></slot>
</template>

<style lang="scss" scoped>
.input {
    box-shadow: 0px 4px 4px 0px #B3B3B340;
    border: 0px;
    padding: 14px 35px;
    display: block;
    border-radius: 23px;
}
</style>