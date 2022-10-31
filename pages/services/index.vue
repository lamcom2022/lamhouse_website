<template>
  <main
		class="bg-primary lg:max-w-8xl px-2 lg:px-0 pt-8 shrink md:shrink-0 h-[60vh] bg-[url('https://res.cloudinary.com/lamcom/image/upload/v1667199524/mindbeyond/banner-image_c9onlr.png')] bg-no-repeat bg-auto bg-right">
		
		<h1 class="capitalize font-semibold text-[24px] lg:text-5xl text-left leading-snug text-gray-600">			
			<!-- <span class="font-normal text-[24px] bg-clip-text text-white lg:text-3xl uppercase">Health & Mind</span><br /> -->
		<span class="uppercase lg:mx-24 lg:mt-48 md:mt-28 absolute" >Services</span>
		</h1>
		<!-- <p class="mt-10 text-small text-center text-white font-normal lg:text-3xl ">
			"The sole journey is the journey within " 
		</p> -->
		<div class="text-center p-10 flex items-center justify-center space-x-4">
			<!-- <a href="/form"><div
				class="px-5 py-2 text-sm  ring-2 ring-primary hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300">
				Contact us</div></a> -->
			<div class="relative group">
				<div
					class="absolute -inset-0.5 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
				</div>
				<!-- <button @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
					class="relative px-7 py-28 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
					<span class="flex items-center space-x-5">
						<span class="pr-6 font-medium text-white">Contact us</span>
					</span>
				</button> -->
			</div>

			<!-- <NuxtLink
				to="#"
				class="text-sm group overflow-hidden relative bg-gray-50 ring-1 hover:ring-transparent ring-gray-300 rounded-full transition-all duration-300"
			>
				<div
					class="absolute h-full w-0 group-hover:w-full transition-all duration-500 bg-primary-700"
				></div>
				<span
					class="block px-6 py-3 transition-all duration-500 group-hover:text-white relative"
					>Take Tour</span
				>
			</NuxtLink> -->
		</div>
	</main>
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