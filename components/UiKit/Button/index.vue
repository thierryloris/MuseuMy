<script setup lang="ts">
import { ButtonStyles } from "./styles";
import { type ButtonProps } from "./types";

const {
  color,
  classNames,
  align,
} = defineProps<ButtonProps>();

const styles = ButtonStyles({
  color: color ?? "primary",
  align: align ?? "mauto",
});

</script>

<template>
    <button class="button pointer" :class="[styles, classNames]">
      <span>{{ label }}</span>
    </button>
</template>

<style scoped lang="scss">
.button {
    padding: 10px 40px;
    border-radius: 20px;
    display: block;
    border: 0px;
}
</style>