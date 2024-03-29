<script setup lang="ts">
import { onMounted } from "vue";
import { useCounterStore } from '../../../stores/index'

const { increment } = useCounterStore()
const route = useRoute();
const { favourite } = storeToRefs(useCounterStore())
const selectedObject = ref(null);
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
    <UiKitHeader :favourite="favourite" />
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
            <UiKitButton @click="increment()" label="Add to favorite" color="primary" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
