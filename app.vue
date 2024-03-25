<script setup lang="ts">
import { onMounted } from 'vue';
const artObjects: any = ref([])
const p = ref(0)
const selectedObject : Ref<{ title: string, longTitle: string, img: string, webImage: { url : string}, id: string} | null> = ref(null)
const search = ref("")

const getArt = async (p: any, search?: any) => {
  const { data } : any = await useFetch('https://www.rijksmuseum.nl/api/nl/collection', {
    query: { key: 'k0bA6D3z', p, ps: 15, imgonly: true, q: search }
  });
    artObjects.value = data.value.artObjects || []
};

const loadMore = () => {
  p.value += 1
  getArt(p.value, search.value)
};

const searchByMaker = () => {   
  getArt(p.value, search.value)
}

 onMounted(() => {
  getArt(0)
});
</script>

<template>
  <div class="page-content">
    <UiKitHeader />
    <div class="content pt-20">
      <div class="relative fit-content m-auto mb-30">
        <UiKitInput v-model="search" class="mr-10" label="Recherche" placeholder="Search anything...">
          <template v-slot:suffix>
            <div class="search-icon" @click="searchByMaker()">
              <img src="/img/loupe.png" />
            </div>
          </template>
        </UiKitInput>
      </div>
      <div class="h2 text-center text-yeseva">All Works</div>
      <div class="flex flex-wrap justify-space-between">
        <template v-if="artObjects" v-for="(artObject, index) in artObjects" :key="index">
          <UiKitCard :title="artObject.title" :img="artObject.webImage.url" :id="artObject.id"
            @click="selectedObject = artObject" />
        </template>
      </div>
      <UiKitButton label="Load more" color="primary" @click="loadMore()" />
    </div>
    <UiKitModal v-if="selectedObject" :title="selectedObject.title" :longTitle="selectedObject.longTitle"
      :img="selectedObject.webImage.url" :id="selectedObject.id" />
  </div>
</template>