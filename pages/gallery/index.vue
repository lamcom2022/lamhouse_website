<template>
<div>
    
     <Gallery />
    
     <Partner />
    
  </div>

</template>

<script setup>
import Partner from '@/components/Partner.vue'
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
module.exports = {
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
      backgroundImage: {
        beetle:
          "url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1778&q=80')",
        fiat:
          "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        van:
          "url('https://images.unsplash.com/photo-1503650923300-dd2f6a007eaf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80')",
        mini:
          "url('https://images.unsplash.com/photo-1557358070-ef6ae6f84629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1566&q=80')",
      },
    },
  },
  variants: {},
  plugins: [],
}
</script>