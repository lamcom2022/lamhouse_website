<template>
    <hero />

    <div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
            <div class="relative max-w-lg mx-auto lg:max-w-7xl">                
                <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                    Our Team
                </h2>
                <p class="text-base font-medium text-primary-900 mt-5">
                    We are an enthusiastic team of passionate designers, coders, animators and developers,
                    with years of knowledge and skill behind us. We work hard every day to ensure your dreams and wishes
                    turn into reality in front of you, with your inputs and to your satisfaction. We are here to meet and exceed
                    your every expectation and requirement. <br />
                    After all – we believe that ‘every business must grow and be present online – however small or large”!
                </p>
            </div>
    </div>
<div class="max-w-7xl mx-auto">
     <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                    Our Strength Include
                </h2>
     <div class="mt-10 max-w-7xl">
       
        <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
          <div v-for="team in team" :key="team.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="team.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ team.name }}</p>
            </dt>            
          </div>
        </dl>
      </div> 
</div>

    <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid lg:grid-cols-3 md:flex md:flex-col py-10">
        <div class="mx-auto px-2 lg:px-2 lg:py-10 md:py-10">
            <img class="w-full rounded" src="https://res.cloudinary.com/lamcom/image/upload/v1662614663/lamhouse/muthu_oh9y2y.jpg">
            <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
                <p class="text-white text-center font-bold pt-10 text-2xl">Muthuraman A</p>
                <p class="text-white text-center font-normal text-xl">CEO, Founder</p>
            </div>
        </div>
        <div class="mx-auto px-2 lg:px-2 lg:py-10 md:py-10">
            <img class="w-full rounded-t" src="https://res.cloudinary.com/lamcom/image/upload/v1662786421/lamhouse/ravi_ynbww9.jpg">
            <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
                <p class="text-white text-center font-bold pt-10 text-2xl">Ravinther R</p>
                <p class="text-white text-center font-normal text-xl">Design, Developer</p>
            </div>
        </div>
        <div class="mx-auto px-2 lg:px-2 lg:py-10 md:py-10">
            <img class="w-full rounded" src="https://res.cloudinary.com/lamcom/image/upload/v1662786765/lamhouse/sripathy_kxethl.jpg">
            <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
                <p class="text-white text-center font-bold pt-10 text-2xl">Sreepathy R</p>
                <p class="text-white text-center font-normal text-xl">Head, Digital Marketing</p>
            </div>
        </div>
    </div>
</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline/index.js'
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})

const team = [
  {
    name: 'We take end to end responsibility of your project/ product (from discussion to design to deliverables)',    
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'We provide personalised attention to every customer (your need and desire is our focus)',    
    icon: ArrowCircleRightIcon,
  }, 
  {
    name: 'We have effective partnership models with a host of qualified artists and partner studios',    
    icon: ArrowCircleRightIcon,
  },  
  {
    name: 'Fair and Accurate Billing',    
    icon: ArrowCircleRightIcon,
  },
   {
    name: 'We impart professional advice and solutions as required',    
    icon: ArrowCircleRightIcon,
  },    
]
export default {
     setup() {
    return {
      team,
          
    }   
  },
}
</script>
<style scoped>

</style>