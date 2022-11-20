import {defineNuxtConfig} from "nuxt";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
import rollupPluginTs from "rollup-plugin-typescript2";
export default defineNuxtConfig({
	nitro: {
		rollupConfig: {
			plugins: [rollupPluginTs()],
		},
	},
	css: ["~/assets/css/tailwind.css"],
	/*
	 ** Plugins to load before mounting the App
	 */

	router: {},
	autoImports: {
		dirs: [
			// Scan composables from nested directories
			"composables/**",
		],
	},
	build: {
		transpile: ["@fawmi/vue-google-maps"],
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	runtimeConfig: {
		// Private config that is only available on the server
		MONGODB_ATLAS_REST_URL: process.env.MONGODB_ATLAS_REST_URL,
		MONGODB_ATLAS_REST_TOKEN: process.env.MONGODB_ATLAS_REST_TOKEN,
		GOOGLE_MAP_TOKEN: process.env.GOOGLE_MAP_TOKEN,
		// Config within public will be also exposed to the client
		public: {
			BASE_URL: process.env.MONGODB_ATLAS_REST_URL,
		},
	},
	modules: ["@nuxt/content"],
	content: {
		// https://content.nuxtjs.org/api/configuration
	},
	head: {
		title: process.env.npm_package_name || "Sravya Food & Beverages",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{charset: "utf-8"},
			{name: "viewport", content: "width=device-width, initial-scale=1"},
			{
				hid: "description",
				name: "description",
				content:
					process.env.npm_package_description ||
					"Sravya Food and Beverages deals with Food and Agro-based commodities across the globe",
			},
			{
				hid: "keywords",
				name: "keywords",
				content:
					"Sravya Food and Beverages deals with Food and Agro-based commodities across the globe",
			},
			{
				hid: "og:site_name",
				name: "og:site_name",
				content: "Sravya Food & Beverages",
			},
			{
				hid: "og:type",
				name: "og:type",
				content: "website",
			},
			{
				hid: "og:title",
				name: "og:title",
				content: process.env.npm_package_name || "Sravya Food & Beverages",
			},
			{
				hid: "og:description",
				name: "og:description",
				content:
					process.env.npm_package_description ||
					"Sravya Food and Beverages deals with Food and Agro-based commodities across the globe",
			},
			{
				hid: "og:image",
				name: "og:image",
				content:
					"",
			},
			{
				hid: "author",
				name: "author",
				content: "Sravya Food & Beverages",
			},
			{
				hid: "copyright",
				name: "copyright",
				content: "Sravya Food & Beverages",
			},
			{
				hid: "reply-to",
				name: "reply-to",
				content: "",
			},
		],
		link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}],
		script: [
			{
				hid: "underscore",
				src: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.4/underscore-min.js",
				defer: true,
			},
			{
				hid: "ustr",
				src: "https://cdnjs.cloudflare.com/ajax/libs/underscore.string/3.3.5/underscore.string.js",
				defer: true,
			},
		],
	},
});
