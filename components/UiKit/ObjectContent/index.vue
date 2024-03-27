<script setup lang="ts">
import { type ModalProps } from "./types";

const { title, description, img, categories } = defineProps<ModalProps>();
</script>
<template>
  <div class="p-20">
    <div class="page__content flex">
      <img class="m-12" :src="img" />
      <div class="object__content m-12">
        <div class="title h2 m-12">{{ title }}</div>
        <div class="description m-12 regular-text ellipsis">{{ description }}</div>
        <div v-if="categories" class="flex">
            <div class="" v-for="category in categories">
               <UiKitTag :label="category" />
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page__content img {
  max-width: 40%;
  max-height: 350px;
  object-fit: cover;
}

@media screen and (max-width: 768px) {
  .page__content {
    display: block;
    text-align: center
  }
}
</style>
