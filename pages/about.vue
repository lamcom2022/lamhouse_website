<template>

<main
		class="bg-primary lg:max-w-8xl px-2 lg:px-0 pt-8 shrink md:shrink-0 h-[60vh] bg-[url('https://res.cloudinary.com/lamcom/image/upload/v1667199524/mindbeyond/banner-image_c9onlr.png')] bg-no-repeat bg-auto bg-right">
		
		<h1 class="capitalize font-semibold text-[24px] lg:text-5xl text-left leading-snug text-gray-600">			
			<!-- <span class="font-normal text-[24px] bg-clip-text text-white lg:text-3xl uppercase">Health & Mind</span><br /> -->
		<span class="uppercase lg:mx-24 lg:mt-48 md:mt-28 absolute" >About Us</span>
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

  <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid">
     <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:text-left md:text-left">
        <h1 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">Vision</h1>
        <!-- <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
         The Name and Legacy
        </p>         -->
      </div>
   </div>
     <div class="mt-10 max-w-7xl">
        <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
          <div v-for="legacy in legacy" :key="legacy.name" class="relative">
            <dt>
              <!-- <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="legacy.icon" class="h-6 w-6" aria-hidden="true" />
              </div> -->
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ legacy.name }}</p>
            </dt>            
          </div>
        </dl>
      </div> 
   </div>

   
  
  
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline/index.js'
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
const about = [
  {
    name: 'Our Goal is: Every business idea must grow and have an online presence – however big or small!!',    
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'Today technology rules the world! We began our journey, in the year 2012, in the domain of 2D and 3D Animation.',    
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'Success followed us after our debut. Yet, in keeping with changing trends, we quickly expanded our services, to include graphic design, website design and app development in our repertoire of projects.',    
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'It has been 10 years, and the journey has been incredible.',   
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'With every year, our expertise and reputed clientele list grew bigger and bigger, both nationally and internationally. Today we positively state that we have numerous happy and satisfied clients whose visions and ideas we have brought to life.',   
    icon: ArrowCircleRightIcon,
  },
]

const legacy = [
  {
    name: 'We envision a future in which individuals thrive in communities that support mental health, achieve health equity, and promote well-being.',    
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'To be committed to mental health wellness through prevention, intervention, treatment and psycho - education.',    
    icon: ArrowCircleRightIcon,
  },  
]
export default {
  setup() {
    return {
      about,
      legacy,     
    }   
  },
 
}
</script>
