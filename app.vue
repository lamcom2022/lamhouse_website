<template>
	<div>
		<!--<h1>{{ $t('hello', { name: 'vue-i18n' }) }}</h1>
		<select v-model="$colorMode.preference">
			<option value="system">System</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="sepia">Sepia</option>
		</select>-->
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
import { Calendar } from 'v-calendar';
//const colorMode = useColorMode()
//console.log(colorMode.preference)
useHead({
	title: "International Property Management, Real estate agents Bangalore",
	meta: [
		{
			name: "description",
			content: "Beyond Borders is managed by MRS. SWATHI GOWDA, a skilled real estate agent Bangalore with excellence in property management in Bangalore. Our hands-on approach focuses closely on the day-to-day activities of property management. ",
		},
		{
			name: "viewport",
			content: "width=device-width,initial-scale=1",
		},
		{
			name: "google-site-verification",
			content: "googlef76d0c7d5da811c7",
		},

		{
			property: "og:title",
			content: "Beyond Borders",
		},
		{
			property: "og:description",
			content: "Beyond Borders is managed by MRS. SWATHI GOWDA, a skilled real estate agent Bangalore with excellence in property management in Bangalore. Our hands-on approach focuses closely on the day-to-day activities of property management. ",
		},
		{
			property: "og:keywords",
			content: "Real estate agents in Bangalore, property management agents in Bangalore, property management consultants, Property Tax Services in Bangalore, Legal aid services in Bangalore, property management services Bangalore, Housekeeping services in Bangalore, Audit firms in Bangalore,Tax Consultants in Bangalore,Home interiors services in Bangalore,senior citizen care services in Bangalore",
		},
		{
			property: "og:image",
			content: "",
		},
		{
			property: "og:type",
			content: "https://www.beyondbordersindia.in",
		},
		{
			property: "og:site_name",
			content: "Beyond Borders",
		},
	],
});
</script>

