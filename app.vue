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
			content: "LAM House symbolises Brilliance, Reliability and Integrity",
		},
		{
			property: "og:title",
			content: "Lamhouse IT Solution",
		},
		{
			property: "og:description",
			content: "LAM House symbolises Brilliance, Reliability and Integrity ",
		},
		{
			property: "og:image",
			content: "/",
		},
		{
			property: "og:type",
			content: "https://www.lamhouse.in",
		},
		{
			property: "og:site_name",
			content: "Lamhouse",
		},
	],
});
</script>
