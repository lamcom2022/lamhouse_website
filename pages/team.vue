<template>
 <main
		class="grid lg:grid-cols-2 md:grid-cols-1 bg-primary">
		<div class="bg-primary md:py-16 flex flex-col">
			<span class="uppercase font-semibold text-[24px] lg:text-5xl text-center mt-16" >Team</span>
			</div>
		<div class="bg-primary mx-auto mt-16 flex flex-col">
			<img src="https://res.cloudinary.com/lamcom/image/upload/v1667199524/mindbeyond/banner-image_c9onlr.png">
		</div>
		
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

  <!-- <div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
    <div class="relative max-w-lg mx-auto lg:max-w-7xl">
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
        Our Team
      </h2>
      <div class="mt-10 max-w-7xl">

        <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
          <div v-for="team in team" :key="team.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <component :is="founderData.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ founderData.name }}</p>
            </dt>
          </div>
        </dl>
      </div>
    </div> 
   </div> -->

   <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid lg:grid-cols-3 md:flex md:flex-col py-10">
    <div class="mx-auto lg:px-2 md:px-4 lg:py-10 md:py-10">
      <img class="w-full rounded"
        src="https://res.cloudinary.com/lamcom/image/upload/v1665325147/mindbeyond/MindBeyond_Founder_lyjat9.jpg">
      <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
        <p class="text-primary text-center font-bold pt-10 text-2xl">Akshaya Ashokan</p>
        <p class="text-primary text-center font-normal text-xl">CEO, Founder</p>
      </div>
    </div>
    <!-- <div class="mx-auto px-2 lg:px-2 lg:py-10 md:py-10">
            <img class="w-full rounded-t" src="https://res.cloudinary.com/lamcom/image/upload/v1662786421/lamhouse/ravi_ynbww9.jpg">
            <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
                <p class="text-white text-center font-bold pt-10 text-2xl">Ravinther R</p>
                <p class="text-white text-center font-normal text-xl">Design, Developer</p>
            </div>
        </div>
        <div class="mx-auto px-2 lg:px-2 lg:py-10 md:py-10">
            <img class="w-full rounded" src="https://res.cloudinary.com/lamcom/image/upload/v1662786765/lamhouse/sripathy_kxethl.jpg">
            <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
                <p class="text-white text-center font-bold pt-10 text-2xl">Sripathi R</p>
                <p class="text-white text-center font-normal text-xl">Head, Digital Marketing</p>
            </div>
        </div> -->
  </div>

   <div class="max-w-7xl mx-auto mt-12">
    <!-- <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl mt-12">
      Our Strength Include
    </h2> -->
   
    <div class="mt-10 max-w-7xl">

      <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
        <div v-for="founderData in founderData" :key="founderData.name" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <component :is="founderData.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ founderData.name }}</p>
          </dt>
        </div>
      </dl>
    </div>
  </div>

  <!-- <div class="max-w-7xl mx-auto">
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
  </div> -->

  
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

const founderData = [
  {
    name: 'Akshaya Ashokan is a counselling psychologist hailing from Bangalore. Her work is focused on counselling individuals, groups or families to help them understand problems, define goals and develop realistic action plans. Her area of expertise lies in providing Psychological Guide, Emotional Wellness, Anxiety Stress and Anger Management, Behavioural Coaching and Group Therapy. ',
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'As a passionate learner of Psychology, Akshaya has sought the opportunity to go beyond to accumulate her learnings through various degrees. She holds a Postgraduate Diploma in Psychotherapy, a Postgraduate in Counselling Psychology, a Master of Science Degree in Counselling Psychology and a Postgraduate Diploma in Special Education and Learning Disabilities. To explore more, she has various certificate courses Certification in Art therapy, Grief and Trauma Therapy, Solution Focused Brief Therapy and Geriatric Counselling.',
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'She has an eye for the social stigma that is surrounding the word mental health, by envisioning a safer environment to pick up a helping hand to aid an individual’s issues and encourage healing recovery, she gave life to Mind & Beyond to offer support through specialised therapies and techniques customised for one’s need considering their journey. ',
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'Akshaya believes to play a role of catalyst in her client’s journey while actively allowing them to assess and evaluate their challenges independently to create a sheltered road in therapy by understanding their emergence.',
    icon: ArrowCircleRightIcon,
  },
]

export default {
  setup() {
    return {
      team,
      founderData
    } 
  },
}
</script>
<style scoped>

</style>