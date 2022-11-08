<template>
  <div>
    <Hero />
    <Blog :articles="articles" />    
   
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
  ])
  .find())
</script>

<script>
export default {
  head: {
    title: 'International Property Management, Real estate agents Bangalore',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Beyond Borders is managed by MRS. SWATHI GOWDA, a skilled real estate agent Bangalore with excellence in property management in Bangalore. Our hands-on approach focuses closely on the day-to-day activities of property management. '
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Real estate agents in Bangalore, property management agents in Bangalore, property management consultants, Property Tax Services in Bangalore, Legal aid services in Bangalore, property management services Bangalore, Housekeeping services in Bangalore, Audit firms in Bangalore,Tax Consultants in Bangalore,Home interiors services in Bangalore,senior citizen care services in Bangalore'
      }
    ],
  }
}
</script>


