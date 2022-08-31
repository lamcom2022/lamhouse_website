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
	title: "Lamhouse IT Solution",
	meta: [
		{
			name: "description",
			content: "Al Jabr laundry And dry cleaning is considered the largest commercial laundry in the Middle East,Five laundry plants serve more than 500 receiving shops situated in cities and villages throughout the eastern province, Riyadh, Jeddah, Qasim and Kharj",
		},
		{
			property: "og:title",
			content: "Al Jabr laundry and dry cleaning",
		},
		{
			property: "og:description",
			content: "Al Jabr laundry And dry cleaning is considered the largest commercial laundry in the Middle East,Five laundry plants serve more than 500 receiving shops situated in cities and villages throughout the eastern province, Riyadh, Jeddah, Qasim and Kharj",
		},
		{
			property: "og:image",
			content: "/home.jpg",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:site_name",
			content: "Al Jabr laundry And dry cleaning",
		},
	],
});
</script>
