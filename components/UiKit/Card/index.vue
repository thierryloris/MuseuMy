<script setup lang="ts">
import { type CardProps } from "./types";

const { title, img } = defineProps<CardProps>();

const titleStatus: any = ref(false);
</script>

<template>
  <div
    @mouseover="titleStatus = true"
    @mouseleave="titleStatus = false"
    class="card pointer relative col-4 m-12"
  >
    <div class="card__image__container">
      <img :src="img" />
    </div>
    <div :class="titleStatus ? '--hover' : ''" class="card__title regular-text">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss">
.card {
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .card__title {
    position: absolute;
    bottom: 3px;
    text-align: center;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    background: #00000061;
    color: white;
    display: none;

    &.--hover {
      display: block;
    }
  }
}

@media screen and (max-width: 425px) {
  .card {
    img {
      height: 150px;
    }
  }
}
</style>
