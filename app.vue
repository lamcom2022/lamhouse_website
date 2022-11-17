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
	title: "SRAVYA Food & Beverages",
	meta: [
		{
			name: "description",
			content: "Sravya Food and Beverages deals with Food and Agro-based commodities across the globe",
		},
		{
			property: "og:title",
			content: "SRAVYA Food & Beverages",
		},
		{
			property: "og:description",
			content: "Sravya Food and Beverages deals with Food and Agro-based commodities across the globe ",
		},
		{
			property: "og:image",
			content: "/",
		},
		{
			property: "og:type",
			content: "",
		},
		{
			property: "og:site_name",
			content: "SRAVYA Food & Beverages",
		},
	],
});
</script>
