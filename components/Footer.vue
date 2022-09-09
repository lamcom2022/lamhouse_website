<template>
  <div class="bg-gradient-to-r from-footer-900 via-primary-800 to-footer-900 ... lg:max-w-8xl">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-2">

        <!--Footer Links (Start)-->
        <FooterLinks />
        <!--Footer Links (end)-->

        <!--Newsletter-->
        <!-- <ContactUs /> -->
        <!--Newsletter-->
      </div>
      <div class="mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between">
        <div class="flex md:order-2">
          <a :href="sm.link" class="ml-6 text-white hover:text-primary-500" v-for="sm in menuitems.socialmedia"
            :key="sm.title">
            <span class="sr-only"> {{ sm.title }} </span>
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path :fill-rule="sm.rule" :d="sm.icon" :clip-rule="sm.rule" />
            </svg>
          </a>
        </div>
        <p class="mt-8 text-white text-base leading-6 md:mt-0 md:order-1">
          {{ menuitems.footer.copyright }}
        </p>
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
      menuitems,
    };
  },
  methods: {
    classNameByIndex: function (index) {
      //return index % 2 == (0 || 1) ? 'evenodd' : '';
      return "evenodd";
    },
  },
};
</script>
