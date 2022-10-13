<template>
    <main
    class="
      mx-auto
      bg-gradient-to-r
      from-primary-800
      via-primary-900
      to-primary-800
      ...
      lg:max-w-8xl
      px-5
      lg:px-0
      pt-14
      lg:pt-12
    "
  >
    <h1
      class="
        capitalize
        font-semibold
        text-[38px]
        lg:text-7xl
        text-center
        leading-snug
        text-white
      "
    >
      <span class="font-extrabold bg-clip-text text-primary-500 uppercase"
        >Championship</span>
    </h1>

    <div class="text-center p-10 flex items-center justify-center space-x-4">
      <NuxtLink
        to="#"
        @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
        class="
          px-5
          py-2
          text-sm
          ring-2 ring-primary-500
          hover:bg-primary-700
          ring-inset
          text-white
          rounded-full
          transition-all
          duration-300
        "
      >
        Contact us</NuxtLink
      >
    </div>
  </main>
</template>

<script>
export default {
    
}
</script>