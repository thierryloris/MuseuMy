<script setup lang="ts">
import { type HeaderProps } from "./types";

const { favourite } = defineProps<HeaderProps>();

const titleStatus: any = ref(false);
</script>

<template>
  <div class="header-container relative">
    <div class="header flex justify-space-between p-20">
      <NuxtLink class="decoration-none black" to="/">
        <div class="header__icon">
          <UiKitLogo />
        </div>
      </NuxtLink>
      <div class="header__favourites">
        <img src="/img/favourite.png" />
        <span class="counter regular-text">{{ favourite }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  z-index: 10;
  position: fixed;
  box-shadow: 0px 4px 4px 0px rgba(234, 234, 234, 0.3490196078);
  width: 100%;
  background: white;
  top: 0px;
  .header__favourites {
    position: relative;
    .counter {
      position: absolute;
      top: 6px;
      right: 12px;
      color: black;
    }
  }
}
</style>
