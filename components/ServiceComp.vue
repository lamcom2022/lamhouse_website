<template>
  <main
    class="mx-auto bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 ... lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-28 mt-14"
  >
    <h1
      class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white"
    >
      <span class="font-extrabold bg-clip-text text-primary-500 uppercase"
        >Services</span
      >
    </h1>

    <div class="text-center p-10 flex items-center justify-center space-x-4">
      <!-- <NuxtLink
        to="#"
        @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
        class="px-5 py-2 text-sm ring-2 ring-primary-500 hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300"
      >
        Contact us</NuxtLink
      > -->
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
  <div>
    <div class="bg-white pt-10 pb-20 px-4 sm:px-6 lg:pt-10 lg:pb-28 lg:px-8">
      <div class="relative max-w-lg mx-auto lg:max-w-7xl">
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl"
        >
          Services
        </h2>
        <h3
          class="text-lg tracking-tight font-normal text-primary-900 sm:text-2xl my-6"
        >
          In today’s Tech Savvy world, we provide the best IT solutions
        </h3>
        <div
          class="mt-6 pt-5 grid gap-4 place-self-center lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8"
        >
          <div
            v-for="service of services"
            :key="service._path"
            class="shadow-lg flex-col flex-direction: column"
          >
            <a :href="services._path">
              <div
                class="flex flex-1 h-48 xxlmin:w-1/2 xxlmax:w-full object-center"
              >
                <img
                  v-if="service.coverimage"
                  class="scale-x-50 scale-y-50 mx-auto object-center overflow-hidden"
                  :src="service.coverimage"
                />
              </div>
            </a>
            <div class="flex flex-1 flex-col justify-evenly bg-white p-3">
              <div class="flex-1">
                <a :href="service._path">
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900 text-center"
                  >
                    <ClientOnly>
                      {{ $s(service.title).prune(50)._wrapped }}
                    </ClientOnly>
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500 text-center">
                    <ClientOnly>
                      {{ $s(service.description).prune(500)._wrapped }}
                    </ClientOnly>
                  </p>
                </a>
              </div>
              <!--
                            <div class="mt-3 flex items-center">

                                <p class="text-sm leading-5 font-medium text-gray-900">
                                    {{ article.author }}
                                </p>
                                <span class="mx-1">
                                    &middot;
                                </span>
                                <div class="flex text-sm leading-5 text-gray-500">

                                    {{ $dayjs(article.date).format('DD-MMM-YYYY') }}

                                    <span class="mx-1">
                                        &middot;
                                    </span>
                                    <span>

                                    </span>
                                </div>
                            </div>
                          -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    services: Array,
  },
  filters: {},
};
</script>

<style>
.article-card {
  border-radius: 8px;
  height: 300vh;
}

.article-card a {
  background-color: #fff;
  border-radius: 8px;
}

.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>