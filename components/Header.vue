<template>
	<header class="flex1 flex items-center bg-primary-900  justify-between h-20 lg:max-w-8xl mx-auto px-5 lg:px-5">
		<!-- Logo (Start)-->
		<NuxtLink to="/">
			<IconLogo class="w-14 h-14" />
		</NuxtLink>
		<!-- Logo (End) -->
		<!--Mobile Nav(Start)-->
		<div id="mobile_sidebar" v-if="mobileNav"
			class="fixed z-40 inset-0 flex-none h-full bg-opacity-25 w-full lg:bg-white lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-60 xl:w-72">
			<div id="navwrapper"
				class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:sticky lg:bg-transparent overflow-hidden lg:top-18 bg-white mr-24 lg:mr-0">
				<div class="lg:block h-12 pointer-events-none absolute inset-x-0 z-10 bg-gradient-to-b from-white">
				</div>
				<div class="px-5 pt-4 flex items-center justify-between">
					<div>
						<a href="/">
							<img class="h-8 w-auto" tag="mobile-logo" :to="menuitems.branding.logo.href"
								alt="mobile-logo" :src="menuitems.branding.mark.source" />
						</a>
					</div>
					<div class="-mr-2">
						<button type="button" @click="toggleMobileMenu"
							class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
							<span class="sr-only">Close menu</span>
							<!-- Heroicon name: outline/x -->
							<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
								stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
				<nav id="nav"
					class="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
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
					<button type="button" class="group inline-flex items-center space-x-2 font-bold text-xl leading-6 focus:outline-none transition ease-in-out duration-150
						text-white  hover:text-white  focus:text-white">
						<span>{{ menu.title }}</span>
						<!-- Item active: "text-white", Item inactive: "text-white-400" -->
						<svg class="transition ease-in-out duration-150
							text-white h-5 w-5 group-hover:text-white group-focus:text-white" viewBox="0 0 20 20" fill="currentColor">
							<path fill-rule="evenodd"
								d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
								clip-rule="evenodd" />
						</svg>
					</button>

					<!--Flyout Menu (Start)-->
					<div class="absolute z-10 inset-x-0 transform shadow-lg">

						<div @focus="showMenu(idx)" @mouseleave="hideMenu(idx)" v-if="isVisible[idx]"
							:id="'cmenu_' + idx"
							class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0 z-50">
							<div class="rounded-lg shadow-lg">
								<div class="rounded-lg shadow-xs overflow-hidden">
									<div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
										<a :href="childmenu.link" v-for="(childmenu, idx) in menu.children"
											:key="'mnu_' + idx + '_' + childmenu.link"
											class="-m-3 p-3 flex items-start space-x-4 rounded-lg transition ease-in-out duration-150">
											<div v-if="childmenu.img">

												<img :src="childmenu.img" width="30" height="30" :alt="childmenu.title">
											</div>
											<div v-else>
												<!--<span  class="rounded-full bg-indigo-50 inline-flex p-3 text-indigo-700 ring-4 ring-white" :class="`bg-${childmenu.spancolor}-50`">-->
												<svg class="flex-shrink-0 h-6 w-6 fill-primary-500" fill="none"
													viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round"
														stroke-width="2" :d="childmenu.icon" />
												</svg>
												<!--</span>-->
											</div>
											<div class="space-y-1">
												<p class="leading-6 font-bold hover:text-primary-900">
													{{ childmenu.title }}
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
					<a :href="menu.link"
						class="text-xl leading-6 font-bold  focus:outline-none transition ease-in-out duration-150 text-white  hover:text-white  focus:text-white'">
						{{ menu.title }}
					</a>
				</div>
			</div>
		</div>
		<!--Main Menu (End)-->

		<!--Nav Action button start-->
		<div class="hidden md:flex md:items-center md:space-x-6">			
			<!-- <NuxtLink to="#"
				class="px-5 py-2 text-sm  ring-2 ring-primary-500 hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300">
				Sign in</NuxtLink> -->
			<NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm bg-primary-500 text-white rounded-full hover:bg-primary-700 transition-all duration-300">
				Contact us</NuxtLink>
			<!--<NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm bg-primary-500 text-white rounded-full hover:bg-primary-700 transition-all duration-300">
				Contact us</NuxtLink>-->
		</div>
		<!--Nav action button end-->
		<!--Nav Ends-->
	</header>
	<!--Mobile menu activator button (start)-->
	<div @click="toggleMobileMenu" class="-mr-2 items-center sm:hidden">
		<button type="button"
			class="fixed z-50 top-4 right-4 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-primary-500"
			aria-expanded="false">
			<span class="sr-only">Open main menu</span>
			<!-- Heroicon name: outline/menu -->
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-primary-500" fill="fill-white"
				viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
			</svg>
		</button>
	</div>
	<!--Mobile menu activator button (end)-->
</template>

<script>
import { ref } from 'vue'
import menuitems from "@/store/siteconfig.json";
export default {
	data() {
		let isVisible = new Array(20).fill(false);
		return {
			menuitems,
			isVisible,
			mobileNav: false,
			textColor: 'white'
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
			console.log("toggleMobileMenu")
			this.mobileNav = !this.mobileNav;
			//useNuxtApp().$bus.$emit('evtMobilemenu');
		},
	},
};
</script>
