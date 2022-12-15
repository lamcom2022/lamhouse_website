<template>
  <div>
    <Hero />
    <HomeContent />
    <Blog :articles="articles" />
    <!-- <Testimonials /> -->
  </div>

</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
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
    "bullet1",
    "bullet2",
    "bullet3",
    "bullet4",
    "bullet5",
    "bullet6",
  ])
  .find())
</script>