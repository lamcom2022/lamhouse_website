<template>

         <div class="pt-5 pb-5 px-4 sm:px-6 lg:pt-5 lg:pb-5 lg:px-8">
            <div class="grid lg:grid-cols-4 md:grid-cols-1 relative max-w-lg mx-auto lg:max-w-7xl">
	
		<div><img class="max-w-2xl h-auto" src="https://res.cloudinary.com/lamcom/image/upload/v1664204602/krsa/logo/krsa-logo_nvzpak.png"></div>
		<div>
             <h4 class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">
                    {{ menuitems.footer.sections[0].name }}
                </h4>
                <ul class="mt-4">
                    <li class="mt-4" v-for="sm in menuitems.footer.sections[0].menus" :key="sm.title">
                        <a :href="sm.link" class="text-base leading-6 text-white hover:text-primary-500">
                            {{ sm.title }}
                        </a>
                    </li>
                </ul>
        </div>
		<div><ContactUs /></div>
		<div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.992185808164!2d77.59898031524587!3d12.972351418370742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1679451e655f%3A0xed058c216397fa0!2sKarnataka%20Roller%20Skating%20Association!5e0!3m2!1sen!2sin!4v1664261960317!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

