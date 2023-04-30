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
  <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid md:flex md:flex-col">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-left md:text-left">
        <h2
          class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl pb=10"
        >
          Do small businesses need Software Solutions for their Businesses?
        </h2>
        <p class="mt-5 p-2 leading-7">
          Any country gets 44% of its revenue from small businesses and their
          growth is attributed to the direct development of a country's economy.
          As a part of the stability and growth of such small businesses, they
          all need to use software solutions in one way or the other to keep
          pace with the country's growing economy. But many business owners
          hesitate to take the leave towards digitizing their business saying
          why should I need Software solutions, it's meant for big businesses
          only is it really helpful for their small business?
        </p>
        <p class="mt-2 p-2 leading-7">
          The answer is Yes, software solutions can be extremely helpful for
          small businesses in many ways. Here are some examples:
        </p>
        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Streamlined operations:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Small businesses can use software solutions to streamline their
          operations and improve efficiency. For example, the software can
          automate tasks such as inventory management, invoicing, and
          scheduling, freeing up time for small business owners to focus on
          other areas of their business.
        </p>
        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Improved customer experience:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Software solutions can help small businesses provide a better customer
          experience. For example, a small retail business can use point-of-sale
          software to process transactions quickly and accurately, and a service
          business can use scheduling software to make it easy for customers to
          book appointments online.
        </p>

        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Data analysis:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Small businesses can use software solutions to analyze data and gain
          insights into their business operations. For example, a small
          e-commerce business can use analytics software to track website
          traffic and sales data to make data-driven decisions about marketing
          and product offerings
        </p>

        <h3
          class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
        >
          Cost savings:
        </h3>
        <p class="mt-2 p-2 leading-7">
          Software solutions can also help small businesses save money. For
          example, cloud-based software eliminates the need for expensive
          hardware and IT staff, and automation can reduce labor costs.
        </p>
        <p class="mt-2 p-2 leading-7">
          Overall, software solutions can provide small businesses with the
          tools they need to operate more efficiently, provide a better customer
          experience, and make data-driven decisions to grow their business.
        </p>
      </div>
    </div>
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <button class="text-white bg-blue-700 rounded-lg w-24 h-auto"><a href="/blog-1">Next</a></button>
    </div>
  </div>
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
