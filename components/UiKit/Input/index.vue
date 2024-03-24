<script setup lang="ts">
import { type InputProps } from "./types";

const {
    label,
    placeholder,
} = defineProps<InputProps>();

const model = defineModel()

</script>

<template>
    <input type="text" :label="label" v-model="model"  :placeholder="placeholder" />
</template>