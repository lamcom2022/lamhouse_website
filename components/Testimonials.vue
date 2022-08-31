<template>
    <!-- Testimonial section -->
    <div class="pb-16 bg-white lg:pb-20 lg:z-10 lg:relative">
        <div class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8">
            <div class="relative lg:-my-8">
                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div
                        class="relative rounded-xl shadow-xl w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/1 lg:h-full">
                        <img class="absolute inset-0 w-full h-full object-cover"
                            v-bind:src="menuitems.testimonials[0].imageurl" alt="Team">
                    </div>
                </div>
            </div>
            <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                        <div>
                            
                            <p class="mt-6 text-xl font-bold text-gray-600">
                                {{ menuitems.testimonials[0].testimony }}
                            </p>
                            
                        </div>
                        <footer class="mt-6 w-1/2">
                           
                            <ul class="text-base font-medium text-primary-900 space-y-1">
                                <li class="flex flex-row space-x-4"><img class="w-6 h-6"
                            v-bind:src="menuitems.testimonials[0].clienticon"><span class="space-x-4">{{ menuitems.testimonials[0].clientname }}</span> </li>
                                <li class="flex flex-row space-x-4"><img class="w-6 h-6"
                            v-bind:src="menuitems.testimonials[0].clienticon"><span class="space-x-4">{{ menuitems.testimonials[0].clientname1 }} </span></li>
                                 <li class="flex flex-row space-x-4"><img class="w-6 h-6"
                            v-bind:src="menuitems.testimonials[0].clienticon"><span class="space-x-4">{{ menuitems.testimonials[0].clientname2 }} </span></li>
                            </ul>
                           
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
    components: {

    },
    data() {
        return {
            menuitems
        };
    },
    methods: {

    },
};
</script>
