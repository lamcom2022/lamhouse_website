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
	title: "Property Management",
	meta: [
		{
			name: "description",
			content: "A property management partner has the potential to add significant value to your investment",
		},
		{
			property: "og:title",
			content: "Beyond Border",
		},
		{
			property: "og:description",
			content: "A property management partner has the potential to add significant value to your investment",
		},
		{
			property: "og:image",
			content: "",
		},
		{
			property: "og:type",
			content: "https://www.beyondborder.com",
		},
		{
			property: "og:site_name",
			content: "Beyond Border",
		},
	],
});
</script>
