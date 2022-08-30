<template>
    <div class="grid grid-cols-2 gap-8 xl:col-span-2">

        <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h4 class="text-sm text-white leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[0].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[0].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base text-white leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-12 md:mt-0">
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[1].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[1].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
                <h4 class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[2].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[2].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-12 md:mt-0">
                <!--goes here-->
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

    }
}
</script>
