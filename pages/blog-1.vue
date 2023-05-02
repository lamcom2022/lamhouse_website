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
                        <div class="pb-12">
                            <a href="#_" class="relative block w-full overflow-hidden h-80 rounded-xl">
                                <img class="object-cover object-top w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105" src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/digitalmarketing_ser5yo.jpg" alt="">
                            </a>
                            <a href="#_" class="relative block mt-5 mb-1 text-xs font-medium tracking-wide text-green-500 uppercase">Digital Marketing</a>
                            <h2 class="mb-1 text-2xl font-semibold text-gray-900"><a href="#_"> Why do Small Businesses Need Digital Marketing?</a></h2>


                            <span class="block mb-5 text-xs font-normal text-gray-800">

                                <span class="ml-1 text-gray-500">Written by Jane Doe on December 02, 2023</span>
                            </span>
                           
                            <p class="mt-5 p-2 leading-7">
          In this Digital world, we have seen many small businesses rise and
          many fall too, One of the main reasons for the failure of fall of
          their business is attributed to bad or wrong or no marketing. Here,
          let's talk about how small businesses need Digital Marketing.
        </p>
        <p class="mt-2 p-2 leading-7">
          Small businesses need digital marketing for several reasons
        </p>
        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Increased visibility:
        </h3>
        <p class="mt-2 p-2 leading-7">
          In today's digital age, people spend more time online than ever.
          Digital marketing can help small businesses reach their target
          audience and increase their visibility online
        </p>
        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Cost-effective:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Digital marketing is often more cost effective than traditional
          marketing methods like print, radio, or television advertising. With
          digital marketing, small businesses can reach a large audience without
          spending a lot of money.
        </p>

        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Targeted marketing:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Digital marketing allows businesses to target specific demographics,
          geographic locations, and interests. This can help small businesses
          reach the people most likely to be interested in their products or
          services.
        </p>

        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Measurable results:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Digital marketing provides measurable results, allowing small
          businesses to track their return on investment (ROI). This can help
          them make informed decisions about their marketing strategies and
          adjust their approach as needed.
        </p>
        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Competitive edge:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Digital marketing can give small businesses a competitive edge over
          their competitors who may not have an online presence or effective
          digital marketing strategies.
        </p>
        <p class="mt-2 p-2 leading-7">
          Overall, digital marketing is essential for small businesses to stay
          relevant, compete in their industry, and reach their target audience
          in a cost-effective way.
        </p>
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
                                <li class="flex"><a href="#_" class="flex-1 block py-2 font-serif text-lg font-thin text-gray-900">Digital Marketing</a><span class="p-2 text-lg font-thin text-gray-700">2</span></li>
                              
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
                                <li class="mb-5">
                                    <a href="/blog-2" class="flex">
                                        <div class="w-1/3 overflow-hidden rounded">
                                            <img class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105" src="https://res.cloudinary.com/lamcom/image/upload/v1683010721/lamhouse/blog/digital_xpdf9a.jpg" alt="">
                                        </div>
                                        <div class="flex flex-col items-start justify-center w-2/3 p-2">
                                            <h3 class="mb-2 font-serif font-thin text-gray-900">Does digital marketing work for you?</h3>
                                            <span class="block text-xs font-thin text-gray-800">May 02, 2023</span>
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
