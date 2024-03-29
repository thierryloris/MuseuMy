<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Museumy',
  meta: [
    { name: 'description', content: 'Museumy' }
  ],
})
</script>