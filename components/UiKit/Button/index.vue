<script setup lang="ts">
import { ButtonStyles } from "./styles";
import { type ButtonProps } from "./types";

const {
  color,
  classNames,
  align,
  onClick,
  size,
  link,
  isTextOnLeft
} = defineProps<ButtonProps>();

const styles = ButtonStyles({
  color: color ?? "primary",
  align: align ?? "mauto",
  size: size ?? "medium",
});

const handleClick = onClick || (() => {});
</script>

<template>
  <UiKitLinkOptional :to="link">
    <button :class="[styles, classNames]" @click="handleClick">
      <span v-if="isTextOnLeft">{{ label }}</span>
      <slot name="icon"></slot>
      <span v-if="!isTextOnLeft">{{ label }}</span>
    </button>
  </UiKitLinkOptional>
</template>
