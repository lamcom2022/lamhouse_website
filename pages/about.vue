<template>
<hero />
<!-- <main
		class="mx-auto bg-secondary lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-12">
		<h1 class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white">			
			
			<span class="font-extrabold bg-clip-text text-primary-500 uppercase">Why us</span>
		</h1>
		
		<div class="text-center p-10 flex items-center justify-center space-x-4">
			<NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm  ring-2 ring-primary hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300">
				Contact us</NuxtLink>			
		</div>
	</main> -->
  <!-- <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid lg:grid-cols-2 md:flex md:flex-col">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <img src="https://res.cloudinary.com/lamcom/image/upload/v1662614663/lamhouse/muthu_oh9y2y.jpg">
     <div class="box-content bg-primary-600 mt-2 w-full h-32 rounded-lg">
     <p class="text-center p-10 text-white font-semibold text-xl ">Muthuraman <br /> CEO, Founder</p>
     </div>
      </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center md:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
         Welcome to Mind & Beyond
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto md:mx-auto">
          We take care of your mind!!
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
          </div>
        </dl>
      </div>      
    </div>
  </div> -->

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
