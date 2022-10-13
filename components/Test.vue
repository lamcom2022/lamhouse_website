<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal bg-primary-700" v-on:click="toggleTabs(1)" v-bind:class="{'text-slate-600 bg-white': openTab !== 1, 'text-white bg-pink-600': openTab === 1}">
            Profile
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-slate-600 bg-white': openTab !== 2, 'text-white bg-pink-600': openTab === 2}">
            Settings
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-slate-600 bg-white': openTab !== 3, 'text-white bg-pink-600': openTab === 3}">
            Options
          </a>
        </li>
      </ul>
      <div class="relative flex flex-col min-w-0 break-words bg-white text-gray-500 w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
             <div class="max-w-7xl mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">             
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665576443/krsa/gallery/1_hy6nxo.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665576443/krsa/gallery/2_bnfk2z.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665576443/krsa/gallery/3_xhoy0x.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665576443/krsa/gallery/4_whwai5.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665576443/krsa/gallery/6_xblvxa.jpg">
        </div>
             </div>
            </div>
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
              <p>
                Completely synergize resource taxing relationships via
                premier niche markets. Professionally cultivate one-to-one
                customer service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <p>
                Efficiently unleash cross-media information without
                cross-media value. Quickly maximize timely deliverables for
                real-time schemas.
                <br />
                <br />
                Dramatically maintain clicks-and-mortar solutions
                without functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slate-tabs",
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>