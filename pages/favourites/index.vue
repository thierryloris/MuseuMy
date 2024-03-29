<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../../stores/index";

const { AllFavourites } = storeToRefs(useCounterStore());

</script>

<template>
  <div class="page-content">
    <UiKitHeader :favourite="AllFavourites.length" />
    <div class="mt-header">
      <div class="content pt-20 pb-20">
        <div class="h2 text-center mb-30 text-yeseva">Your favourites</div>
        <div class="flex flex-wrap justify-space-between">
          <template
            v-if="AllFavourites && AllFavourites.length"
            v-for="(artObject, index) in AllFavourites"
            :key="index"
          >
            <UiKitCard
              :title="artObject.title"
              :img="artObject.webImage.url"
              :id="artObject.id"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
