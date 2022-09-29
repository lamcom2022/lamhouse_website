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
	title: "Karnataka Roller Skating Association",
	meta: [
		{
			name: "description",
			content: "KRSA goal is not only limited to winning competitions but also to motivate each and every one to a better way of life.",
		},
		{
			property: "og:title",
			content: "Karnataka Roller Skating Association",
		},
		{
			property: "og:description",
			content: "KRSA goal is not only limited to winning competitions but also to motivate each and every one to a better way of life",
		},
		{
			property: "og:image",
			content: "/",
		},
		{
			property: "og:type",
			content: "https://www.karnatakarollerskatingassociation.com",
		},
		{
			property: "og:site_name",
			content: "KRSA",
		},
	],
});
</script>
