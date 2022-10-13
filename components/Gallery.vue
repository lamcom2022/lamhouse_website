<template>
<main
    class="
      mx-auto
      bg-gradient-to-r
      from-primary-800
      via-primary-900
      to-primary-800
      ...
      lg:max-w-8xl
      px-5
      lg:px-0
      pt-14
      lg:pt-12
    "
  >
    <h1
      class="
        capitalize
        font-semibold
        text-[38px]
        lg:text-7xl
        text-center
        leading-snug
        text-white
      "
    >
      <span class="font-extrabold bg-clip-text text-primary-500 uppercase"
        >Gallery</span>
    </h1>

    <div class="text-center p-10 flex items-center justify-center space-x-4">
      <NuxtLink
        to="#"
        @click="useNuxtApp().$bus.$emit('evtShowContactSales')"
        class="
          px-5
          py-2
          text-sm
          ring-2 ring-primary-500
          hover:bg-primary-700
          ring-inset
          text-white
          rounded-full
          transition-all
          duration-300
        "
      >
        Contact us</NuxtLink
      >
    </div>
  </main>
 

  <!-- <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tabFill"
  role="tablist">
  <li class="nav-item flex-auto text-center" role="presentation">
    <a href="#tabs-homeFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
      aria-controls="tabs-homeFill" aria-selected="true">Home</a>
  </li>
  <li class="nav-item flex-auto text-center" role="presentation">
    <a href="#tabs-profileFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill" role="tab"
      aria-controls="tabs-profileFill" aria-selected="false">Very very very very long link</a>
  </li>
  <li class="nav-item flex-auto text-center" role="presentation">
    <a href="#tabs-messagesFill" class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-messagesFill" role="tab"
      aria-controls="tabs-messagesFill" aria-selected="false">Messages</a>
  </li>
</ul>
<div class="tab-content" id="tabs-tabContentFill">
  <div class="tab-pane fade show active" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
    Tab 1 content fill
  </div>
  <div class="tab-pane fade" id="tabs-profileFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
    Tab 2 content fill
  </div>
  <div class="tab-pane fade" id="tabs-messagesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
    Tab 3 content fill
  </div>
</div> -->

    <div class="bg-white pt-10 pb-20">
        <div class="grid max-w-7xl mx-auto pt-10 pb-10">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                   Gallery
                </h2>
        </div>        
        
         <div class="flex flex-wrap">
    <div class="max-w-7xl mx-auto">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(1)" v-bind:class="{'text-slate-600 bg-white': openTab !== 1, 'text-white bg-primary-600': openTab === 1}">
            Skaters
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(2)" v-bind:class="{'text-slate-600 bg-white': openTab !== 2, 'text-white bg-primary-600': openTab === 2}">
            Natial Participants
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal" v-on:click="toggleTabs(3)" v-bind:class="{'text-slate-600 bg-white': openTab !== 3, 'text-white bg-primary-600': openTab === 3}">
            Free Style
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
              <div class="max-w-7xl mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">             
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661086/krsa/gallery/14_qos4pk.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661086/krsa/gallery/13_lkzuib.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661085/krsa/gallery/12_gksbul.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661085/krsa/gallery/11_x9kwcr.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661085/krsa/gallery/8_ir8cnf.jpg">
        </div>        
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661085/krsa/gallery/9_jk4sa3.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661085/krsa/gallery/10_mnozjv.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661085/krsa/gallery/7_pysski.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/3_ytw5oj.jpg">
        </div>        
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/1_fmyuna.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/6_uaqp7q.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/5_eroxbo.jpg">
        </div>

        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/4_inkz4e.jpg">
        </div>        
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/2_rze1tl.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661086/krsa/gallery/coach_xuhowp.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665661084/krsa/gallery/coach-1_uq91fp.jpg">
        </div>
             </div>
            </div>

            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
              <div class="max-w-7xl mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-8">             
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665663300/krsa/gallery/free-3_exldin.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665663298/krsa/gallery/free-2_yyyycc.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-64">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665663298/krsa/gallery/free-1_ovdbtj.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665663299/krsa/gallery/free-4_qx44wx.jpg">
        </div>
        <div class="flex justify-center w-full bg-white shadow-lg h-[50vh]">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1665663299/krsa/gallery/free-5_luhjpz.jpg">
        </div>
             </div>
            </div>
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

<style>
.article-card {
    border-radius: 8px;
    height: 300vh;
}

.article-card a {
    background-color: #fff;
    border-radius: 8px;
}

.article-card img div {
    border-radius: 8px 0 0 8px;
}
</style>