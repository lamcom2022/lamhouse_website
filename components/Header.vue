<template>
  <div class="max-w-8xl flex flex-auto lg:grid-cols-3">
    <header class="lg:space-x-64 flex1 flex items-center bg-white h-20 px-5 lg:px-5">
      <!-- Logo (Start)-->
      <NuxtLink to="/">
        <IconLogo class="w-14 h-14" />
      </NuxtLink>
      <!-- Logo (End) -->
      <!--Mobile Nav(Start)-->
      <div id="mobile_sidebar" v-if="mobileNav" class="
          fixed
          z-40
          inset-0
          flex-none
          h-full
          bg-opacity-25
          w-full
          lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60
          xl:w-72
        ">
        <div id="navwrapper" class="
            h-full
            overflow-y-auto
            scrolling-touch
            lg:h-auto lg:block lg:sticky lg:bg-transparent
            overflow-hidden
            lg:top-18
            bg-white
            mr-24
            lg:mr-0
          ">
          <div class="
              lg:block
              h-12
              pointer-events-none
              absolute
              inset-x-0
              z-10
              bg-gradient-to-b
              from-white
            "></div>
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <a href="/">
                <img class="h-8 w-auto" tag="mobile-logo" :to="menuitems.branding.logo.href" alt="mobile-logo"
                  :src="menuitems.branding.mark.source" />
              </a>
            </div>
            <div class="-mr-2">
              <button type="button" @click="toggleMobileMenu" class="
                  bg-white
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-gray-100 hover:rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-gray-600
                ">
                <span class="sr-only">Close menu</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <nav id="nav" class="
              px-1
              pt-6
              overflow-y-auto
              font-medium
              text-base
              sm:px-3
              xl:px-5
              lg:text-sm
              pb-10
              lg:pt-10 lg:pb-14
              sticky?lg:h-(screen-18)
            ">
            <LeftNavColor :data="[]" />
          </nav>
        </div>
      </div>
      <!--Mobile Nav(End)-->
      <!-- Nav Starts-->
      <!--Main Menu (Start)-->
      <div class="hidden space-x-8 md:ml-10 md:flex">
        <div v-for="(menu, idx) in menuitems.nav" @mouseover="showMenu(idx)" :key="'mnu_' + idx + '_' + menu.link">
          <div class="relative" v-if="menu.children">
            <button type="button" class="
                group
                inline-flex
                items-center
                space-x-2
                font-bold
                text-xl
                leading-6
                focus:outline-none
                transition
                ease-in-out
                duration-150
                text-white
                hover:text-white
                focus:text-white
              ">
              <span>{{ menu.title }}</span>
              <!-- Item active: "text-white", Item inactive: "text-white-400" -->
              <svg class="
                  transition
                  ease-in-out
                  duration-150
                  text-white
                  h-5
                  w-5
                  group-hover:text-white
                  group-focus:text-white
                " viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <!--Flyout Menu (Start)-->
            <div class="absolute z-10 inset-x-0 transform shadow-lg">
              <div @focus="showMenu(idx)" @mouseleave="hideMenu(idx)" v-if="isVisible[idx]" :id="'cmenu_' + idx" class="
                  absolute
                  left-1/2
                  transform
                  -translate-x-1/2
                  mt-3
                  px-2
                  w-screen
                  max-w-md
                  sm:px-0
                  z-50
                ">
                <div class="rounded-lg shadow-lg">
                  <div class="rounded-lg shadow-xs overflow-hidden">
                    <div class="
                        z-20
                        relative
                        grid
                        gap-6
                        bg-white
                        px-5
                        py-6
                        sm:gap-8 sm:p-8
                      ">
                      <a :href="childmenu.link" v-for="(childmenu, idx) in menu.children"
                        :key="'mnu_' + idx + '_' + childmenu.link" class="
                          -m-3
                          p-3
                          flex
                          items-start
                          space-x-4
                          rounded-lg
                          transition
                          ease-in-out
                          duration-150
                        ">
                        <!-- <div v-if="childmenu.img">
                          <img
                            :src="childmenu.img"
                            width="30"
                            height="30"
                            :alt="childmenu.title"
                          />
                        </div> -->
                        <!-- <div v-else> -->
                        <div>

                          <!--<span  class="rounded-full bg-indigo-50 inline-flex p-3 text-indigo-700 ring-4 ring-white" :class="`bg-${childmenu.spancolor}-50`">-->
                          <svg class="flex-shrink-0 h-6 w-6 fill-primary-500" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="childmenu.icon" />
                          </svg>
                          <!--</span>-->
                        </div>
                        <div class="space-y-1">
                          <p class="leading-6 font-bold hover:text-primary-900">
                            <!-- {{ childmenu.title }} -->
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Flyout Menu (End)-->
          </div>
          <div v-else>
            <a :href="menu.link" class="
                text-lg
                leading-6
                font-semibold
                focus:outline-none
                transition
                ease-in-out
                duration-150
                text-gray-500
                hover:text-gray-900
                focus:text-white'
              ">
              {{ menu.title }}
            </a>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="lg:flex md:grid lg:col-span-3 md:col-span-1">
        <div class="flex flex-col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-telephone mt-1 text-primary-500" viewBox="0 0 16 16">
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>
          <p class="text-gray-500 mx-2 lg:text-sm md:text-sm">
            80 2660 0004
          </p>
        </div>
        <div class="flex flex-col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-email items-baseline mt-1 text-primary-500" viewBox="0 0 24 24">


            <path
              d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,.6.2,1,1,0,0,0,.6-.2L20,7.25V17A1,1,0,0,1,19,18Z" />

          </svg>

          <p class="text-gray-500 mx-2 lg:text-sm md:text-sm">
            beyondborder@gmail.com
          </p>
        </div>
      </div>

      <!--Main Menu (End)-->

      <!--Nav Action button start-->
      <!-- <div class="hidden md:flex md:items-center md:space-x-6">			 -->
      <!-- <NuxtLink to="#"
				class="px-5 py-2 text-sm  ring-2 ring-primary-500 hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300">
				Sign in</NuxtLink> -->
      <!-- <NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm bg-primary-500 text-gray-500 rounded-full hover:bg-primary-700 transition-all duration-300">
				Contact us</NuxtLink> -->
      <!--<NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm bg-primary-500 text-white rounded-full hover:bg-primary-700 transition-all duration-300">
				Contact us</NuxtLink>-->
      <!-- </div> -->
      <!--Nav action button end-->
      <!--Nav Ends-->
    </header>
  </div>

  <!--Mobile menu activator button (start)-->
  <div @click="toggleMobileMenu" class="-mr-2 items-center sm:hidden">
    <button type="button" class="
        fixed
        z-50
        top-4
        right-4
        rounded-md
        p-2
        inline-flex
        items-center
        justify-center
        text-gray-700
        hover:text-gray-900
        focus:outline-none focus:ring-2 focus-ring-inset focus:ring-primary-500
      " aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <!-- Heroicon name: outline/menu -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-900 hover:text-primary-500" fill="fill-white"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </div>
  <!--Mobile menu activator button (end)-->
</template>

<script>
import { ref } from "vue";
import menuitems from "@/store/siteconfig.json";
import AboutWho from './AboutWho.vue';
export default {
  components: { AboutWho },
  data() {
    let isVisible = new Array(20).fill(false);
    return {
      menuitems,
      isVisible,
      mobileNav: false,
      textColor: "white",
    };
  },
  created() {
    //console.log("created")
  },
  methods: {
    showMenu(index) {
      this.isVisible.forEach((value, index) => {
        this.isVisible[index] = false;
      });
      this.isVisible[index] = true;
    },
    hideMenu(index) {
      //this.$set(this.isVisible, index, false);
      this.isVisible[index] = false;
    },
    toggleMobileMenu() {
      this.mobileNav = !this.mobileNav;
      //useNuxtApp().$bus.$emit('evtMobilemenu');
    },
  },
};
</script>

<style>
.cls-1 {
  fill: #fff;
  opacity: 0;
}

.cls-2 {
  fill: #231f20;
}
</style>