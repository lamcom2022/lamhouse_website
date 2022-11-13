<template>
    <div class="mt-8 xl:mt-0 w-96">
        <div class="md:grid md:grid-cols-2">
            
            <div>
            </div>
            <dl class="mt-2 text-base leading-20 text-white w-full">
                <div>
                    <h4 class="text-sm leading-5 font-semibold tracking-wider text-white uppercase">Contact Us</h4>
                    <dt class="sr-only">Postal address</dt>
                    <dd class="pt-3">
                        <p>{{menuitems.contactus.companyname}}</p>
                        <p>{{menuitems.contactus.addressline1}}</p>
                        <p>{{menuitems.contactus.addressline2}}</p>
                        <p>{{menuitems.contactus.city}} - {{menuitems.contactus.zip}}, {{menuitems.contactus.country}}</p>
                    </dd>
                </div>
                <div class="mt-2">
                    <dt class="sr-only">Phone number</dt>
                    <dd class="flex">
                        <!-- Heroicon name: phone -->
                        <svg
                            class="flex-shrink-0 h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                            </svg>
                            <span class="ml-3">
                                {{menuitems.contactus.phone1}}
                            </span>
                    </dd>
                    <dd
                        class="flex"
                        v-if="menuitems.contactus.phone2"
                    >
                        <!-- Heroicon name: phone -->
                        <svg
                            class="flex-shrink-0 h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d=""
                            />
                            </svg>
                            <span class="ml-3">
                                {{menuitems.contactus.phone2}}
                            </span>
                            </dd>
                            <dt
                                class="sr-only"
                                v-if="menuitems.contactus.fax"
                            >Fax number</dt>
                                <dd
                                    class="flex"
                                    v-if="menuitems.contactus.fax"
                                >
                                    <!-- Heroicon name: phone -->
                                    <svg
                                        class="flex-shrink-0 h-6 w-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                                        />
                                        </svg>
                                        <span class="ml-3">
                                            {{menuitems.contactus.fax}}
                                        </span>
                                        </dd>
                </div>
                <div class="mt-3">
                    <dt class="sr-only">Email</dt>
                    <dd class="flex">
                        <!-- Heroicon name: mail -->
                        <svg
                            class="flex-shrink-0 h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                            </svg>
                            <span class="ml-3">
                                {{menuitems.contactus.email}}
                            </span>
                    </dd>
                </div>

                <div class="mt-3">
                    <dt class="sr-only">Gstin</dt>
                    <dd class="flex">
                        <span class="ml-0">
                                GSTIN : {{menuitems.contactus.gstin}}
                            </span>
                    </dd>
                </div>

            </dl>
            
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
