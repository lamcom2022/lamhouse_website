<template>
  <div>
    
     <ServiceComp :services="services" />
    
  </div>

</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
const { data: color } = ref('white')
const { data: services } = await useAsyncData('services-list', () => queryContent('services')
  .only([
    "title",
    "description",
    "coverimage",
    "author",
    "date",
    "_path",
    "tags",
    "type",
  ])
  .find())
</script>