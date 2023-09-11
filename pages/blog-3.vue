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
              <a
                href="#_"
                class="relative block w-full overflow-hidden h-80 rounded-xl"
              >
                <img
                  class="object-cover object-top w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                  src="https://res.cloudinary.com/lamcom/image/upload/v1683265020/lamhouse/blog/namaste_oaddfu.jpg"
                  alt=""
                />
              </a>
              <a
                href="#_"
                class="relative block mt-5 mb-1 text-xs font-medium tracking-wide text-green-500 uppercase"
                >Social</a
              >
              <h2 class="mb-1 text-2xl font-semibold text-gray-900">
                <a href="#_"
                  >5 Things COVID – 19 making us go back to our traditional ways
                  of living.</a
                >
              </h2>

              <span class="block mb-5 text-xs font-normal text-gray-800">
                <span class="ml-1 text-gray-500"
                  >Written by Muthuraman on April 27, 2020</span
                >
              </span>

              <p class="mt-5 p-2 leading-7">
                It might be a weird but an apt question in the current scenario.
                You just need to picture things around you right now and imagine
                how our forefathers lived. The western people keep telling us
                that we Indians keep boasting about the past achievements of our
                forefathers and are forgetting to live the present and think
                about the future which is not true. COVID- 19 situation is
                proving to us that few practices our forefathers followed were
                all for a reason. Our History told us many things and we got to
                learn a lot from them which ironically Covid-19 is forcing us
                into our traditional form of living. Here are 5 important things
                COVID – 19 teaches us.
              </p>

              <h3
                class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
              >
                Greeting Each other :
              </h3>
              <p class="mt-2 p-2 leading-7">
                Namaste or Namaskar with a hand gesture where we put our palms
                together as a greeting is now a far more powerful way of
                greeting a person with respect. Now, you are not going to risk
                shaking hands with strangers but you should not offend them by
                not greeting them either, so its best to greet them with a
                respectful Namasthe gesture. The gesture of placing palms
                together has more meaning to it than just a greeting, The flow
                of energies in a physical handshake is fatal for a positively
                energized individual if he shakes hand with an individual filled
                with negativity, the gloom from the person is transferred to the
                positive individual. While in Namaskar, as there is no physical
                contact, the ability for one person to affect another negatively
                is minimized to a larger extent. This was also one of the
                reasons that our elders always advised to have company of good
                people who are positive and do not possess bad behavior. COVID
                -19 will make us all choose our friends, we shall choose
                friendship only with good-natured people and people with no or
                least negative traits.
              </p>
              <h3
                class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
              >
                Family is priority:
              </h3>
              <p class="mt-2 p-2 leading-7">
                COVID – 19 has made us all spend the maximum time with family,
                it is definitely true in my case. I was able to teach my
                children to play a few games of cards and we exercise every day
                morning and I was able to train my children to grow fit and they
                are taking a liking towards it, earlier it was a coach who used
                to train my kids and now I do and they are just doing great. My
                son taught me how to play UNO and I am now hooked to it. My
                daughter started grooming her painting skills and she paints our
                walls with her amazing artwork of flowers and abstract
                creativity. Our Home becomes the world. I am sure you would have
                enjoyed such cherished moments yourself. Good News – Even after
                Lockdown is lifted, you still have to spend more time at home so
                as to not risking yourself to get infected and in turn infect
                your own family.
              </p>

              <h3
                class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
              >
                Eating at home India Style (With your fingers, No spoon, No
                fork) is the best:
              </h3>
              <p class="mt-2 p-2 leading-7">
                I have been in the Marketing world since time immemorial and I
                used to eat out a lot. Now, this COVID – 19 has made me eat at
                home at all times and sometimes cook and eat. Trust me, I feel
                healthier and a lot better than ever before. This, however, took
                a toll in my business at the beginning but it is getting better
                now because we are using Digital Marketing technology and LAM
                House digital Marketing Team has been doing a wonderful job at
                that and my business now is begging to work much better than
                expected, this shall also save me a lot of time where I used to
                spend in traveling in hectic traffic to meet customers. Another
                important change is that, even if we ever trust going out for
                lunch, we can trust our own hands/fingers and eat using them
                instead of a spoon or a fork which was used by many. So its best
                to eat using our own fingers even at home as a practice.
              </p>

              <h3
                class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
              >
                Joint Family System in the remaking:
              </h3>
              <p class="mt-2 p-2 leading-7">
                We are now restricted within our own homes with just 2 or 3
                people around us and you shall begin missing your extended
                family worrying about them. So, Its time to remake the Joint
                Family System which our forefathers believed in so much. Think
                about it, having your Brothers, Sisters, and cousins all living
                under one big roof, you will have all your family members safe
                under the same roof and there will be a sense of togetherness
                and family unity for joint progress and everyone is in good
                health.
              </p>
              <h3
                class="mt-5 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl pb=10"
              >
                Staying rooted in Community and its cause:
              </h3>
              <p class="mt-2 p-2 leading-7">
                We just talked about the Joint family system, but there is more
                to it. Each of us belong to a caste, community, or creed; Ever
                thought why was a caste system formed. It is just a community of
                people following similar practices and ways of living which were
                believed to be good and healthy. Following your community
                practices shall be a harmony, shall always keep you one step
                higher in the world of Healthy living. There is no community
                that preaches anything ill about another community or caste or
                creed. So believe in the good things of your community practices
                and live a healthy life.
              </p>
              <p class="mt-2 p-2 leading-7">
                On the whole, we must understand that we in this century have a
                very skewed understanding of why and how our forefathers managed
                to stay healthy which is because of lack of knowledge and has
                lead people to believe them to be superstition and now, I
                believe COVID -19 is a better teacher than a disease to us.
              </p>
             
            </div>
          </div>
        </div>

        <!-- Begining of Sidebar -->
        <div
          class="w-full mt-12 overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6 md:mt-0"
        >
          <div class="ml-2 mr-2 md:ml-4">
            <div class="mt-0">
              <h2 class="mb-5 text-lg font-medium text-gray-900">Categories</h2>
              <ul>
                <li class="flex">
                  <a
                    href="#_"
                    class="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >Software</a
                  ><span class="p-2 text-lg font-thin text-gray-700">1</span>
                </li>
                <li class="flex">
                  <a
                    href="#_"
                    class="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >Digital Marketing</a
                  ><span class="p-2 text-lg font-thin text-gray-700">1</span>
                </li>
              </ul>
            </div>

            <div class="mt-16">
              <h2 class="mb-5 text-lg font-medium text-gray-900">
                Recent Posts
              </h2>
              <ul>
                <li class="mb-5">
                  <a href="/blog" class="flex">
                    <div class="w-1/3 overflow-hidden rounded">
                      <img
                        class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                        src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/softsolution_ul0i4y.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      class="flex flex-col items-start justify-center w-2/3 p-2"
                    >
                      <h3 class="mb-2 font-serif font-thin text-gray-900">
                        Do small businesses need Software Solutions for their
                        Businesses?
                      </h3>
                      <span class="block text-xs font-thin text-gray-800"
                        >January 02, 2023</span
                      >
                    </div>
                  </a>
                </li>
                <li class="mb-5">
                  <a href="/blog-1" class="flex">
                    <div class="w-1/3 overflow-hidden rounded">
                      <img
                        class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                        src="https://res.cloudinary.com/lamcom/image/upload/v1682866786/lamhouse/blog/digitalmarketing_ser5yo.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      class="flex flex-col items-start justify-center w-2/3 p-2"
                    >
                      <h3 class="mb-2 font-serif font-thin text-gray-900">
                        Why do Small Businesses Need Digital Marketing?
                      </h3>
                      <span class="block text-xs font-thin text-gray-800"
                        >January 04, 2023</span
                      >
                    </div>
                  </a>
                </li>

                <li class="mb-5">
                  <a href="/blog-2" class="flex">
                    <div class="w-1/3 overflow-hidden rounded">
                      <img
                        class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                        src="https://res.cloudinary.com/lamcom/image/upload/v1683010721/lamhouse/blog/digital_xpdf9a.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      class="flex flex-col items-start justify-center w-2/3 p-2"
                    >
                      <h3 class="mb-2 font-serif font-thin text-gray-900">
                        Does digital marketing work for you?
                      </h3>
                      <span class="block text-xs font-thin text-gray-800"
                        >May 02, 2023</span
                      >
                    </div>
                  </a>
                </li>
                <li class="mb-5">
                  <a href="/blog-3" class="flex">
                    <div class="w-1/3 overflow-hidden rounded">
                      <img
                        class="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                        src="https://res.cloudinary.com/lamcom/image/upload/v1683265020/lamhouse/blog/namaste_oaddfu.jpg"
                        alt=""
                      />
                    </div>
                    <div
                      class="flex flex-col items-start justify-center w-2/3 p-2"
                    >
                      <h3 class="mb-2 font-serif font-thin text-gray-900">
                        5 Things COVID – 19 making us go back to our traditional
                        ways of living.
                      </h3>
                      <span class="block text-xs font-thin text-gray-800"
                        >April 27, 2020</span
                      >
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
