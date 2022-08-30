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
		title: process.env.npm_package_name || "Swara Nritya Company",
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
					" Robotic process automation tool which provides a business to configure software bots as a first step toward implementing more complex AI solutions. Increase productivity and scale up operations using Intelligent Process Automation",
			},
			{
				hid: "keywords",
				name: "keywords",
				content:
					"Robotic Process Automation, RPA tools, Robotic Automation Software, RPA Consulting services, Design Automation Services, Custom RPA Solutions, robotic process automation consulting, rpa consulting firms, rpa consulting companies, Robotic Process Automation RPA Tools, RPA Bot Development, Business process Automation",
			},
			{
				hid: "og:site_name",
				name: "og:site_name",
				content: "SwaraNritya",
			},
			{
				hid: "og:type",
				name: "og:type",
				content: "website",
			},
			{
				hid: "og:title",
				name: "og:title",
				content: process.env.npm_package_name || "Swara Nritya Company",
			},
			{
				hid: "og:description",
				name: "og:description",
				content:
					process.env.npm_package_description ||
					"Robotic process automation tool which provides a business to configure software bots as a first step toward implementing more complex AI solutions. Increase productivity and scale up operations using Intelligent Process Automation",
			},
			{
				hid: "og:image",
				name: "og:image",
				content:
					"https://res.cloudinary.com/nathansweb/image/upload/v1640864433/www.xyz.com/brand-assets/logos/svg/NO_BORDER/Group_21-1_krgdr9.svg",
			},
			{
				hid: "author",
				name: "author",
				content: "SwaraNritya",
			},
			{
				hid: "copyright",
				name: "copyright",
				content: "SwaraNritya",
			},
			{
				hid: "reply-to",
				name: "reply-to",
				content: "contact@SwaraNritya.com",
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
