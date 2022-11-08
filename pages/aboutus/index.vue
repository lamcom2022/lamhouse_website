<template>
  <div>
    <Aboutus />
    <AboutWho />
     
   
  </div>

</template>

<script setup>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
}) 
</script>
<script>
export default {
  head: {
    title: 'About us Property Management Consultants, Real estate agents Bangalore',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Beyond Borders is managed by MRS. SWATHI GOWDA, a skilled real estate agent bangalore with excellence in property management in bangalore.Our hands-on approach focuses closely on the day-to-day activities of property management. '
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Real estate agents in bangalore,property management agents in bangalore,property management consultants,Property Tax Services in bangalore,Legal aid services in bangalore,property management services bangalore,Housekeeping services in bangalore,Audit firms in Bangalore,Tax Consultants in Bangalore,Home interiors services in Bangalore,senior citizen care services in Bangalore'
      }
    ],
  }
}
</script>