<script setup lang="ts">
import { onMounted } from "vue";
import { useCounterStore } from '../../../stores/index'

const { addFavourite } = useCounterStore()
const route = useRoute();
const { AllFavourites } = storeToRefs(useCounterStore())
const selectedObject = ref<any>(null);


const getSelectedArt = async () => {
  const data: any = await $fetch(
    `https://www.rijksmuseum.nl/api/nl/collection/${route.params.id}`,
    {
      query: { key: "k0bA6D3z" },
    }
  );
  selectedObject.value = data.artObject;
};

onMounted(() => {
  getSelectedArt();
});
</script>
<template>
  <div class="page-content">
    <UiKitHeader :favourite="AllFavourites.length" />
    <div class="mt-header">
      <div class="content pt-20">
        <NuxtLink class="decoration-none black" to="/">
          <UiKitBackButton />
        </NuxtLink>
        <template v-if="selectedObject">
          <UiKitObjectContent
            :title="selectedObject.title"
            :description="selectedObject.label.description"
            :img="selectedObject.webImage.url"
            :categories="selectedObject.materials"
          />
          <div class="flex justify-space-between pb-20">
            <UiKitButton @click="addFavourite(selectedObject)" label="Add to favorite" color="primary" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>