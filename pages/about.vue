<template>

  <main class="grid lg:grid-cols-2 md:grid-cols-1 bg-primary">
    <div class="bg-primary md:py-16 flex flex-col">
      <span class="uppercase font-semibold text-[24px] lg:text-5xl text-center mt-16">About us</span>
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

  <div class="max-w-7xl mx-auto mt-16 my-12 lg:grid lg:grid-cols-3 md:flex md:flex-col py-1">
    <div class="mx-auto lg:px-2 md:px-4 lg:py-10 md:py-10">
      <img class="w-full rounded"
        src="https://res.cloudinary.com/lamcom/image/upload/v1665325147/mindbeyond/MindBeyond_Founder_lyjat9.jpg">
      <div class="box-border h-32 w-full border-4 bg-primary-600 shadow-lg">
        <p class="text-primary text-center font-bold pt-10 text-2xl">Akshaya Ashokan</p>
        <p class="text-primary text-center font-normal text-xl">CEO, Founder</p>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-16 my-16 lg:flex">
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="lg:text-left md:text-left">
        <h1 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">About Me</h1>
      </div>
    </div>
  </div>

  <section
  class="relative block py-10 overflow-hidden leading-6 text-left bg-gray-150"
>
  <div class="w-full max-w-5xl px-8 mx-auto leading-6 text-left xl:px-12">
    <div
      class="
        relative
        w-full
        px-4
        leading-6
        text-center
        xl:flex-grow-0 xl:flex-shrink-0
        lg:flex-grow-0 lg:flex-shrink-0
      ">
     
      <p
        class="
          box-border
          mx-0
          mt-6
          mb-0
          text-sm
          font-medium
          leading-normal
          text-gray-900
          sm:text-lg
        "
      >
      I am a counselling psychologist from Bangalore. 
      My work is focused on counselling individuals, groups or families to help them understand problems, define goals and develop realistic action plans. I specialize in providing Psychological Guidance, Emotional Wellness, Anxiety Stress and Anger Management, Behavioural Coaching and Group Therapy.
      I have an eye for the social stigma that surrounds the words ‘mental health’. By envisioning a safer environment to lend a helping hand to aid an individual’s issues and encourage healing recovery, I gave life to Mind & Beyond to offer support through specialised therapies and techniques customised for one’s needs considering their journey.
      </p>
    </div>
  </div>


  <div class="max-w-7xl mx-auto mt-12 my-12 lg:flex">
    <div class="max-w-7xl px-4 sm:px-4 lg:px-8">
      <div class="sm:text-left md:text-left">
        <h3 class="text-3xl tracking-tight text-gray-00 sm:text-2xl">Qualifications</h3>
      </div>
    </div>
  </div>

  
  <div class="max-w-7xl mx-auto mt-12">
    <div class="pb-10 mt-10 max-w-7xl">
      <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
        <div v-for="about in about" :key="about.name" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <component :is="about.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ about.name }}</p>
          </dt>
        </div>
      </dl>
    </div>
  </div>


  <div class="max-w-7xl mx-auto mt-12 my-12 lg:flex">
    <div class="max-w-7xl px-4 sm:px-4 lg:px-8">
      <div class="sm:text-left md:text-left">
        <h3 class="text-3xl tracking-tight text-gray-00 sm:text-2xl">Training / Professional Certifications</h3>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-12">
    <div class="pb-10 mt-10 max-w-7xl">
      <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
        <div v-for="certification in certification" :key="certification.name" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <component :is="certification.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ certification.name }}</p>
          </dt>
        </div>
      </dl>
    </div>
  </div>
  
  <!-- <div class="max-w-7xl mx-auto mt-12">
    <div class="pb-10 mt-10 max-w-7xl">
      <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
        <div v-for="certification in certification" :key="certification.name" class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <component :is="certification.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ certification.name }}</p>
          </dt>
        </div>
      </dl>
    </div>
  </div> -->


  <!-- <AboutContent /> -->

  <div class="max-w-7xl mx-auto mt-12 my-12 lg:flex">
    <div class="max-w-7xl px-4 sm:px-4 lg:px-8">
      <div class="sm:text-left md:text-left">
        <h3 class="text-3xl tracking-tight text-gray-00 sm:text-2xl">Vision</h3>
      </div>
    </div>
  </div>


    <!-- Vision -->
    <div class="mt-10 max-w-7xl">
      <dl class="space-y-10 md:space-y-0 md:grid md:gap-y-10">
        <div v-for="legacy in legacy" :key="legacy.name" class="relative">
          <dt>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ legacy.name }}</p>
          </dt>
        </div>
      </dl>
    </div>

  </section>



</template>

<script>
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon, ArrowCircleRightIcon } from '@heroicons/vue/outline/index.js'
definePageMeta({
  //colorMode: 'system',
  layout: "main",
})
const about = [
  {
    name: 'Postgraduate Diploma in Counselling Psychology ',
    icon: AnnotationIcon,
  },
  {
    name: 'Master’s in Counselling Psychology',
    icon: AnnotationIcon,
  },
  {
    name: 'Postgraduate  Diploma in Learning Disabilities and Special Education',
    icon: AnnotationIcon,
  },
  {
    name: 'Postgraduate Diploma in Psychotherapy',
    icon: AnnotationIcon,
  }
]

const certification = [
  {
    name: 'Solution Focused Brief therapy',
    icon: AnnotationIcon,
  },
  {
    name: 'Grief and Trauma Therapy',
    icon: AnnotationIcon,
  },
  {
    name: 'Geriatric Counselling',
    icon: AnnotationIcon,
  },
  {
    name: 'Art Therapy ',
    icon: AnnotationIcon,
  },
  {
    name: 'Rational Emotive Behavioral Therapy',
    icon: AnnotationIcon,
  }
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
      certification
    }
  },

}
</script>
