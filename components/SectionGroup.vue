<template>
    <div class="pb-8">
        <h2 class="text-lg font-medium text-gray-900">Nearest Store Locator</h2>
        <!--<p class="mt-1 text-sm text-gray-600">Search directory</p>-->
        <form class="mt-6 flex space-x-4" action="#">
            <div class="flex-1 min-w-0">
                <label for="search" class="sr-only">Studio Locator</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <!-- Heroicon name: solid/search -->
                        <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                    <input type="search" name="search" id="search"
                        class="py-3 px-4 block w-full pl-10 focus:ring-gray-900 focus:border-gray-900 border-gray-600"
                        placeholder="Search by Zipcode/City">
                </div>
            </div>
            <button type="submit"
                class="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
                <!-- Heroicon name: solid/filter -->
                <svg class="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Search</span>
            </button>

        </form>
    </div>
    <div class="space-y-4 min-h-0 h-96 overflow-y-auto">
        <!-- Active: "ring-1 ring-offset-2 ring-indigo-500" -->
        <label v-for="(location, idx) in locations.locations" :key="idx + '_' + location.name" class="relative flex items-center space-x-3   rounded-lg   shadow-sm px-6 py-4 cursor-pointer  sm:flex sm:justify-between focus:outline-none
		" :class="selected.name == location.name ? 'bg-primary-50 ring-1 ring-offset-0 ring-primary-500 border-2 border-primary-300 hover:border-primary-400' : 'bg-white border border-gray-300 hover:border-gray-400'">
            <input type="radio" @change="onChange($event, location)" :id="'rdo_methodology_' + idx" name="server-size"
                :value="location.name" class="sr-only" aria-labelledby="server-size-0-label"
                aria-describedby="server-size-0-description-0 server-size-0-description-1">
            <!--<img :src="location.icon.img" class="h-12 w-12" :alt="location.name">-->
            <div class="flex-1 items-center">
                <div class="text-sm">
                    <p id="server-size-0-label"
                        :class="selected.name == location.name ? 'font-extrabold text-primary-900' : 'font-medium text-gray-900'">
                        {{ location.name }}
                    </p>
                    <div id="server-size-0-description-0"
                        :class="selected.name == location.name ? 'text-primary-700' : 'text-gray-500'">
                        <p class="sm:inline">{{ location.address.street }}</p>
                    </div>
                    <!--<div id="server-size-0-description-0"
                        :class="selected.name == location.name ? 'text-primary-700' : 'text-gray-500'">
                        <p class="sm:inline">2 miles</p>
                    </div>-->
                </div>
            </div>
            <!-- Checked: "border-indigo-500", Not Checked: "border-transparent" 
	  :class="textColor=='white' ? 'text-white' : 'text-primary-500  hover:text-primary-600  focus:text-primary-600'"
	  -->

        </label>

    </div>
</template>
<script>
import locations from "@/store/locations.json";
export default {
    components: {},
    data() {
        return {
            locations,
            selected: locations.locations[0],
        };
    },
    methods: {
        onChange(event, obj) {
            var optionText = event.target.id;
            console.log(optionText);
            console.log(obj.name);
            this.selected = obj;
            //$nuxt.$emit('evtLocationChange', obj)
            useNuxtApp().$bus.$emit('evtLocationChange', obj)
        }
    }
};
</script>