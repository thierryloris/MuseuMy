<script setup lang="ts">
import { type ModalProps } from "./types";

const { title, description, img, categories } = defineProps<ModalProps>();
</script>
<template>
  <div class="p-20">
    <div class="page__content flex">
      <NuxtImg class="m-12" :src="img" />
      <div class="object__content m-12">
        <div class="title h2 m-12 text-yeseva">{{ title }}</div>
        <div class="description m-12 regular-text ellipsis text-justify">
          {{ description }}
        </div>
        <template v-if="categories">
          <div class="title h2 m-12 text-yeseva">Categories</div>
          <div class="flex">
            <div v-for="category in categories">
              <UiKitTag :label="category" />
            </div>
          </div>
        </template>
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

@media screen and (max-width: 568px) {
  .page__content {
    display: block;
    text-align: center;
    img {
      max-width: 65%;
    }
  }
}
</style>
