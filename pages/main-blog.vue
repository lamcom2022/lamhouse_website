<template>
  <main
    class="mx-auto bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 ... lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-12"
  >
    <h1
      class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white"
    >
      <span class="font-extrabold bg-clip-text text-primary-500 uppercase"
        >Blog</span
      >
    </h1>

    <div class="text-center p-10 flex items-center justify-center space-x-4">
      <NuxtLink
        to="#"
        @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
        class="px-5 py-2 text-sm ring-2 ring-primary-500 hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300"
      >
        Contact us</NuxtLink
      >
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
   <!-- Section 7 -->
   <section class="w-full bg-white">
        <div class="max-w-5xl px-10 py-10 mx-auto xl:px-0">
           

            <div class="flex flex-wrap mt-10 overflow-hidden">
                <div class="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
                    <div class="ml-2 mr-2 md:mr-4">                     
                        <div class="grid grid-cols-12 gap-8">
                            <div class="col-span-12 md:col-span-6">
                                <a href="/blog" class="block h-48 mb-3 overflow-hidden rounded-lg">
                                    <img class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105" src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/softsolution_ul0i4y.jpg" alt="">
                                </a>
                                <h2 class="mb-2 font-serif text-lg text-gray-900"><a href="/blog">Do small businesses need Software Solutions for their Businesses?</a></h2>
                                <p class="mb-3 text-sm text-gray-800"> Any country gets 44% of its revenue from small businesses and their
                                     growth is attributed to the direct development of a country's economy....
                                    <a href="/blog" class="inline-flex items-center ml-1 text-xs text-gray-500 underline">
                                        <span>Continue Reading</span>
                                        <svg class="w-3 h-3 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </a>
                                </p>
                            </div>

                            <div class="col-span-12 md:col-span-6">
                                <a href="/blog-1" class="block h-48 mb-3 overflow-hidden rounded-lg">
                                    <img class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105" src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/digitalmarketing_ser5yo.jpg" alt="">
                                </a>
                                <h2 class="mb-2 font-serif text-lg text-gray-900"><a href="/blog-1">Why do Small Businesses Need Digital Marketing?</a></h2>
                                <p class="mb-3 text-sm text-gray-800">  In this Digital world, we have seen many small businesses rise and
                                      many fall too....
                                    <a href="/blog-1" class="inline-flex items-center ml-1 text-xs text-gray-500 underline">
                                        <span>Continue Reading</span>
                                        <svg class="w-3 h-3 ml-1 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                  

                </div>

                <!-- Begining of Sidebar -->
                <div class="w-full mt-12 overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6 md:mt-0">
                    <div class="ml-2 mr-2 md:ml-4">                     
                     
                      <div class="mt-0">
                            <h2 class="mb-5 text-lg font-medium text-gray-900">Categories</h2>
                            <ul>
                                <li class="flex"><a href="#_" class="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">Software</a><span class="p-2 text-lg font-thin text-gray-700">1</span></li>
                                <li class="flex"><a href="#_" class="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">Digital Marketing</a><span class="p-2 text-lg font-thin text-gray-700">1</span></li>
                              
                            </ul>
                        </div>
                     
                        <div class="mt-16">
                            <h2 class="mb-5 text-lg font-medium text-gray-900">Recent Posts</h2>
                            <ul>
                                <li class="mb-5">
                                    <a href="/blog" class="flex">
                                        <div class="w-1/3 overflow-hidden rounded">
                                            <img class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105" src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/softsolution_ul0i4y.jpg" alt="">
                                        </div>
                                        <div class="flex flex-col items-start justify-center w-2/3 p-2">
                                            <h3 class="mb-2 font-serif font-thin text-gray-900">Do small businesses need Software Solutions for their Businesses?</h3>
                                            <span class="block text-xs font-thin text-gray-800">January 02, 2023</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="mb-5">
                                    <a href="/blog-1" class="flex">
                                        <div class="w-1/3 overflow-hidden rounded">
                                            <img class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105" src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/digitalmarketing_ser5yo.jpg" alt="">
                                        </div>
                                        <div class="flex flex-col items-start justify-center w-2/3 p-2">
                                            <h3 class="mb-2 font-serif font-thin text-gray-900">Why do Small Businesses Need Digital Marketing?</h3>
                                            <span class="block text-xs font-thin text-gray-800">January 04, 2023</span>
                                        </div>
                                    </a>
                                </li>                               
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
 
  
</template>

<script>
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  ArrowCircleRightIcon,
} from "@heroicons/vue/outline/index.js";
definePageMeta({
  //colorMode: 'system',
  layout: "main",
});
const about = [
  {
    name: "Our Goal is: Every business idea must grow and have an online presence – however big or small!!",
    icon: ArrowCircleRightIcon,
  },
  {
    name: "Today technology rules the world! We began our journey, in the year 2012, in the domain of 2D and 3D Animation.",
    icon: ArrowCircleRightIcon,
  },
  {
    name: "Success followed us after our debut. Yet, in keeping with changing trends, we quickly expanded our services, to include graphic design, website design and app development in our repertoire of projects.",
    icon: ArrowCircleRightIcon,
  },
  {
    name: "It has been 10 years, and the journey has been incredible.",
    icon: ArrowCircleRightIcon,
  },
  {
    name: "With every year, our expertise and reputed clientele list grew bigger and bigger, both nationally and internationally. Today we positively state that we have numerous happy and satisfied clients whose visions and ideas we have brought to life.",
    icon: ArrowCircleRightIcon,
  },
];

const legacy = [
  {
    name: "The name LAM House is inspired by and dedicated to my parents and family. LAM is an acronym for Life, Art and Multimedia.",
    icon: ArrowCircleRightIcon,
  },
  {
    name: "Mr. Muthuraman A. as the proprietor of this company brings along with him over 20 years of experience in the fields of animation and graphic design. From managerial roles, to HR roles to administrative details to the financial aspects of a graphic designing and software development firm. In the past years he has grown and groomed our team to reflect these qualities of integrity and dedication in their work.",
    icon: ArrowCircleRightIcon,
  },
];
export default {
  setup() {
    return {
      about,
      legacy,
    };
  },
};
</script>
