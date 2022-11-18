<template>
  <div>
    <HomeHero />
    <HomeBody :articles="articles" />    
   
  </div>

</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "home",
})
const { data: color } = ref('white')
const { data: articles } = await useAsyncData('articles-list', () => queryContent('articles')
  .only([
    "title",
    "description",
    "link",
    "coverimage",
    "author",
    "date",
    "_path",
    "tags",
    "type",
  ])
  .find())
</script>