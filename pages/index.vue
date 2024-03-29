<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/index";
import type { apiResponse, artObject } from "../types/index";

const artObjects = ref<any[]>([]);
const p = ref(0);
const selectedObject = ref<any>(null);
const search = ref("");
const { AllFavourites } = storeToRefs(useCounterStore());
const { addFavourite } = useCounterStore();


//GET all the artObjects from the api
const getArt = async (page: number, searchTerm?: string) => {
  const data: apiResponse = await $fetch(
    "https://www.rijksmuseum.nl/api/nl/collection",
    {
      query: { key: "k0bA6D3z", p: page, ps: 15, imgonly: true, q: searchTerm },
    }
  );

  //Pagination management
  artObjects.value =
    page === 0
      ? data.artObjects || []
      : [...artObjects.value, ...data.artObjects];
};

//GET one artObject from the api
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
  artObjects.value = [];
  getArt(p.value, search.value);
};

onMounted(() => {
  getArt(0);
});
</script>

<template>
  <div class="page-content">
    <UiKitHeader :favourite="AllFavourites.length" />
    <div class="mt-header">
      <div class="content pt-20 pb-20">
        <div class="relative fit-content m-auto mb-30">
          <UiKitInput
            v-model="search"
            label="Recherche"
            placeholder="Search anything..."
          >
            <template v-slot:suffix>
              <div class="search-icon" @click="searchByMaker()">
                <font-awesome-icon class="lightgrey" :icon="['fas', 'magnifying-glass']" />
              </div>
            </template>
          </UiKitInput>
        </div>
        <div class="h2 text-center mb-30 text-yeseva">All Works</div>
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
        <div class="m-12">
          <UiKitButton label="Load more" color="primary" @click="loadMore()" />
        </div>
      </div>
      <UiKitModal
        v-if="selectedObject"
        :title="selectedObject.title"
        :longTitle="selectedObject.label.description"
        :img="selectedObject.webImage.url"
        :id="selectedObject.objectNumber"
        @modalclose="selectedObject = null"
        @addtofavourite="addFavourite(selectedObject)"
      />
    </div>
  </div>
</template>
