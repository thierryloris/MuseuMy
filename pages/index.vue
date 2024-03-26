<script setup lang="ts">
import { onMounted } from "vue";
const artObjects: any = ref([]);
const p = ref(0);
const selectedObject = ref(null);
const search = ref("");

const getArt = async (p: any, search?: any) => {
  const data: any = await $fetch(
    "https://www.rijksmuseum.nl/api/nl/collection",
    {
      query: { key: "k0bA6D3z", p, ps: 15, imgonly: true, q: search },
    }
  );
  if (artObjects.value) {
    const temp = [].concat(artObjects.value, data.artObjects);
    artObjects.value = temp
  } else {
    artObjects.value = data.artObjects || [];
  }
};

const getSelectedArt = async (id: string) => {
  const data: any = await $fetch(
    `https://www.rijksmuseum.nl/api/nl/collection/${id}`,
    {
      query: { key: "k0bA6D3z" },
    }
  );
  selectedObject.value = data.artObject;
};

const loadMore = () => {
  p.value += 1;
  getArt(p.value, search.value);
};

const searchByMaker = () => {
  artObjects.value = null;
  getArt(p.value, search.value);
};

onMounted(() => {
  getArt(0);
});
</script>

<template>
  <div class="page-content">
    <UiKitHeader />
    <div class="mt-header">
      <div class="content pt-20 pb-20">
        <div class="relative fit-content m-auto mb-30">
          <UiKitInput
            v-model="search"
            class="mr-10"
            label="Recherche"
            placeholder="Search anything..."
          >
            <template v-slot:suffix>
              <div class="search-icon" @click="searchByMaker()">
                <img src="/img/loupe.png" />
              </div>
            </template>
          </UiKitInput>
        </div>
        <div class="h2 text-center text-yeseva">All Works</div>
        <div class="flex flex-wrap justify-space-between">
          <template
            v-if="artObjects && artObjects.length"
            v-for="(artObject, index) in artObjects"
            :key="index"
          >
            <UiKitCard
              :title="artObject.title"
              :img="artObject.webImage.url"
              :id="artObject.id"
              @click="getSelectedArt(artObject.objectNumber)"
            />
          </template>
        </div>
        <UiKitButton label="Load more" color="primary" @click="loadMore()" />
      </div>
      <UiKitModal
        v-if="selectedObject"
        :title="selectedObject.title"
        :longTitle="selectedObject.label.description"
        :img="selectedObject.webImage.url"
        :id="selectedObject.objectNumber"
        @modalclose="selectedObject = null"
      />
    </div>
  </div>
</template>
