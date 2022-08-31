<template>
	<main
		class="mx-auto bg-gradient-to-r from-primary-800 via-primary-900 to-primary-800 ... lg:max-w-8xl px-5 lg:px-0 pt-14 lg:pt-12">
		<h1 class="capitalize font-semibold text-[38px] lg:text-7xl text-center leading-snug text-white">			
			<span class="font-normal text-[24px] bg-clip-text text-white lg:text-3xl uppercase">IT Software & Design</span><br />
			<span class="font-extrabold bg-clip-text text-primary-500 uppercase">Welcome to Lamhouse</span>
		</h1>
		<p class="mt-10 text-small text-center text-white font-normal lg:text-3xl ">
			We bring your ideas to Life!!
		</p>
		<div class="text-center p-10 flex items-center justify-center space-x-4">
			<NuxtLink to="#" @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
				class="px-5 py-2 text-sm  ring-2 ring-primary-500 hover:bg-primary-700 ring-inset text-white rounded-full transition-all duration-300">
				Contact us</NuxtLink>
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
</template>
