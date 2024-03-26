<script setup lang="ts">
import { onMounted } from "vue";

const route = useRoute();
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
    <UiKitHeader />
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
            <UiKitButton label="Add to favorite" color="primary" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
