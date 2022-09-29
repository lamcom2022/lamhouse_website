<template>
  <!-- Testimonial section -->
  <div class="pb-16 bg-white lg:pb-20 lg:z-10 lg:relative">
    <div class="lg:mx-auto lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-8">
      <div class="relative lg:-my-8">
        <div
          aria-hidden="true"
          class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
        ></div>
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full"
        >
          <div
            class="
              relative
              rounded-xl
              shadow-xl
              w-full
              h-64
              sm:h-72
              md:h-96
              lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/1 lg:h-full
            "
          >
            <img
              class="absolute inset-0 w-full h-full object-cover"
              v-bind:src="menuitems.testimonials[0].imageurl"
              alt="Team"
            />
          </div>
        </div>
      </div>
      <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
        <div
          class="
            mx-auto
            max-w-md
            px-4
            sm:max-w-2xl sm:px-6
            lg:px-0 lg:py-20 lg:max-w-none
          "
        >
          <blockquote>
            <div>
              <p class="mt-6 text-xl font-normal">
                Kalaburagi District Roller Skating Association (KDRSA) ,
                registered under the Societies Act 1960, is a non profitable
                organisation , established in 2018; is affiliated to The
                Karnataka Roller Skating Association (KRSA) , which is
                affiliated to the Roller Skating Federation of India (RSFI).
                RSFI is the national body of roller sports in India and is
                recognised by the Department of Youth Affairs and Sports,
                Government of India.
              </p>
              <p class="mt-6 text-xl font-normal">
                KDRSA conducts district selections of Roller Sports in all age
                groups . The selected skaters represent the district in
                Karnataka State Events .
              </p>
              
            </div>           
          </blockquote>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menuitems from "@/store/siteconfig.json";
export default {
  components: {},
  data() {
    return {
      menuitems,
    };
  },
  methods: {},
};
</script>
