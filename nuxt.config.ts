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
		title: process.env.npm_package_name || "International Property Management, Real estate agents Bangalore",
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
					"Beyond Borders is managed by MRS. SWATHI GOWDA, a skilled real estate agent Bangalore with excellence in property management in Bangalore. Our hands-on approach focuses closely on the day-to-day activities of property management.",
			},
			{
				hid: "keywords",
				name: "keywords",
				content:
					"Real estate agents in Bangalore, property management agents in Bangalore, property management consultants, Property Tax Services in Bangalore, Legal aid services in Bangalore, property management services Bangalore, Housekeeping services in Bangalore, Audit firms in Bangalore,Tax Consultants in Bangalore,Home interiors services in Bangalore,senior citizen care services in Bangalore",
			},
			{
				hid: "google-site-verification",
				name: "google-site-verification",
				content:
					"xmHm_U0nCpo5R-iEA6eHfdLrVfFBbsm0TgiWHDPqhnE",
			},
			{
				hid: "og:site_name",
				name: "og:site_name",
				content: "Beyond Borders",
			},
			{
				hid: "og:type",
				name: "og:type",
				content: "https://beyondbordersindia.in",
			},
			{
				hid: "og:title",
				name: "og:title",
				content: process.env.npm_package_name || "International Property Management, Real estate agents Bangalore",
			},
			{
				hid: "og:description",
				name: "og:description",
				content:
					process.env.npm_package_description ||
					"Beyond Borders is managed by MRS. SWATHI GOWDA, a skilled real estate agent Bangalore with excellence in property management in Bangalore. Our hands-on approach focuses closely on the day-to-day activities of property management. ",
			},
			{
				hid: "og:image",
				name: "og:image",
				content:
					"https://res.cloudinary.com/lamcom/image/upload/v1665820582/beyondborder/logo/web-logo_as5t9k.png",
			},
			{
				hid: "author",
				name: "author",
				content: "Beyond Borders",
			},
			{
				hid: "copyright",
				name: "copyright",
				content: "Beyond Borders",
			},
			{
				hid: "reply-to",
				name: "reply-to",
				content: "services@beyondborders.in",
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


