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
        >About</span
      >
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
  <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid px-4">
    <div class="max-w-7xl mx-auto px-4">
      <div>
        <h2
          class="
            text-red-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          About Us
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          Welcome to KRSA
        </p>
        <p class="mt-4 text-gray-700">
         The Karnataka Roller Skating
          Association (KRSA) , which is affiliated to the Roller Skating
          Federation of India (RSFI). RSFI is the national body of roller sports
          in India and is recognised by the Department of Youth Affairs and
          Sports, Government of India.
        </p>
        <p class="mt-4 text-gray-700">
          KRSA conducts district selections of Roller Sports in all age groups
          . The selected skaters represent the district in Karnataka State
          Events .
        </p>
        <p class="mt-4 text-gray-700">
          Roller Skating is a part of All India University Games, SGFI
          Nationals, CBSE Nationals, KV Nationals and ICSE Nationals.
        </p>
        <p class="mt-4 text-gray-700">
          Roller Skating was included in the 1992 Olympic Games as a
          demonstration event and as a medal event in the 42nd National Games
          held in Andhra Pradesh in 2002 and as a medal event in the 16th Asian
          Games 2010 in Guangzhou, 3rd beach Asian Games 2012 in China, World
          University Games 2017 in Taiwan, 18th Asian games 2018 held at
          Indonesia and Youth Olympic Games 2018 at Argentina, 2020 Olympic
          Games & also in 2024 Olympic Games.
        </p>
      </div>
    </div>
  </div>  
  <div class="max-w-7xl lg:grid mx-auto">
    <div class="px-4">
        <h2
          class="
            text-red-600
            font-semibold
            tracking-wide
            uppercase
          "
        >
          About Us
        </h2>
        <p
          class="
            mt-2
            text-3xl
            leading-8
            font-extrabold
            tracking-tight
            text-gray-900
            sm:text-4xl
          "
        >
          About KRSA
        </p>       
      </div> 
      <div class="grid lg:grid-cols-2 px-4">
        <ul class="list-disc">
     <li class="mt-4 text-gray-700">
         Popularizing the game in more than 19 districts
        </li>
        <li class="mt-4 text-gray-700">
          Affiliated 14 districts to its fold
        </li>
        <li class="mt-4 text-gray-700">
          Decentralizing the functioning of districts
        </li>
        <li class="mt-4 text-gray-700">
          Increased number of clubs
        </li>
        <li class="mt-4 text-gray-700">
         Conducting the state championships thus popularizing the game all over the Karnataka
        </li>
        <li class="mt-4 text-gray-700">
          Streamlining the functioning of districts
        </li>
        <li class="mt-4 text-gray-700">
          Improving the infrastructure facilities by interacting with Government agencies
        </li>
        <li class="mt-4 text-gray-700">
          Consistent winner of National Speed Championships Trophy for …….. years
        </li>
        <li class="mt-4 text-gray-700">
         Since 2005 KRSA officials were selected to participate in all Internationals/Nationals
        </li>
        </ul>
      </div>
  </div>
</template>

<script>
definePageMeta({
  //colorMode: 'system',
  layout: "main",
});

export default {
  setup() {
    return {};
  },
};
</script>
