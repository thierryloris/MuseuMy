<script setup lang="ts">
import { type HeaderProps } from "./types";

const { favourite } = defineProps<HeaderProps>();
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
        <font-awesome-icon class="icon-svg" :icon="['fas', 'heart']" />
        <NuxtLink class="decoration-none black" to="/favourites">
          <span class="counter regular-text">{{ favourite }}</span>
        </NuxtLink>
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
    .icon-svg {
      height: 30px;
      color: lightgrey;
    }
    .counter {
      position: absolute;
      top: 5px;
      right: 11px;
    }
  }
}
</style>
