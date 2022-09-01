<template>
<main
		class="mx-auto bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 ... lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-12">
		<h1 class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white">			
			
			<span class="font-extrabold bg-clip-text text-primary-500 uppercase">About</span>
		</h1>
		
		<div class="text-center p-10 flex items-center justify-center space-x-4">
			<NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm  ring-2 ring-primary-500 hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300">
				Contact us</NuxtLink>
			<!--<div class="relative group">
				<div
					class="absolute -inset-0.5 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
				</div>
				<button @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
					class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
					<span class="flex items-center space-x-5">
						<span class="pr-6 font-medium text-white">Contact us</span>
					</span>
				</button>
			</div>

			<NuxtLink
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
			</NuxtLink>-->
		</div>
	</main>
  <div class="grid grid-cols-2 gap-4 mt-16 my-20 max-w-7xl mx-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <img src="https://res.cloudinary.com/lamcom/image/upload/v1662041293/lamhouse/about-people-768x845_xqwaiz.jpg">
     <div class="box-content bg-primary-600 mt-2 w-32 h-32 rounded-lg">
     <p class="text-center p-10 text-white font-semibold text-xl ">Muthuraman <br /> CEO, Founder</p>
     </div>
      </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
         Welcome to Lamhouse
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          LAM House symbolises Brilliance, Reliability and Integrity
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
          <div v-for="about in about" :key="about.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="about.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ about.name }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ about.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

  </div>
  
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, ArrowDownIcon } from '@heroicons/vue/outline/index.js'
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
const about = [
  {
    name: 'Our Goal is: Every business idea must grow and have an online presence – however big or small!!',    
    icon: GlobeAltIcon,
  },
  {
    name: 'Today technology rules the world! We began our journey, in the year 2012, in the domain of 2D and 3D Animation.',    
    icon: ScaleIcon,
  },
  {
    name: 'Success followed us after our debut. Yet, in keeping with changing trends, we quickly expanded our services, to include graphic design, website design and app development in our repertoire of projects.',    
    icon: LightningBoltIcon,
  },
  {
    name: 'It has been 10 years, and the journey has been incredible.',   
    icon: AnnotationIcon,
  },
  {
    name: 'With every year, our expertise and reputed clientele list grew bigger and bigger, both nationally and internationally. Today we positively state that we have numerous happy and satisfied clients whose visions and ideas we have brought to life.',   
    icon: AnnotationIcon,
  },
]

export default {
  setup() {
    return {
      about,
    }
  },
}
</script>
