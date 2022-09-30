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
        >Districts</span>
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

    <div class="bg-white pt-10 pb-20">
          <!--Bengalur district -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-2 lg:grid-cols-2 lg:gap-x-2">             
        <div class="grid w-4/5 justify-center bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664462369/krsa/districts/bdrsa_parawu.png"> 
          <p class="text-clip">BENGALURU  DISTRICT</p> 
        </div>
        <div class="grid w-auto">
          <p class="text-normal">Association Name : BENGALURU  DISTRICT ROLLER SPORTS  ASSOCIATION </p>
          <p class="text-normal">E mail : indzbdrsa@gmail.com </p>
          <p class="text-normal">Mobile : +91 9845582007 </p>
          <p class="text-normal">President : Mr Poovaiah </p>
          <p class="text-normal">General Secretary : Mr  S Indudhar</p>
          <p class="text-normal">Treasurer : Ms Esther Bernard</p>
        </div>        
        </div>

        <!--Blegaum -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-py-8">
        <div class="grid w-auto">
          <p class="text-normal">Association Name :  BELGAUM DISTRICT ROLLER SKATING ASSOCIATION  </p>
          <p class="text-normal">E mail : brsabelgaum@gmail.com </p>
          <p class="text-normal">Mobile : 9449563393 </p>
          <p class="text-normal">President : Mr Umesh kalghatgi </p>
          <p class="text-normal">General Secretary : Mr Prasad Tendulkar</p>
          <p class="text-normal">Treasurer : Mr Santosh Sarode</p>
        </div>
         <div class="grid w-4/5 justify-center mr-0 bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664464004/krsa/districts/belgaum_zdun5v.png"> 
          <p class="text-clip">BELGAUM  DISTRICT</p> 
        </div>        
        </div>

          <!--Bellary district -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-2 lg:grid-cols-2 lg:gap-x-2">             
        <div class="grid w-4/5 justify-center bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664518562/krsa/districts/bellary_j3c6uh.png"> 
          <p class="text-clip">BELLARY  DISTRICT</p> 
        </div>
        <div class="grid w-auto">
          <p class="text-normal">Association Name : NEW BELLARY DISTRICT ROLLER SKATING ASSOCIATION </p>
          <p class="text-normal">E mail : bedrsa999@gmail.com</p>
          <p class="text-normal">Mobile : +91 9591933981 </p>
          <p class="text-normal">President : Chandrashekar Goud </p>
          <p class="text-normal">General Secretary : Chandrashekar</p>
          <p class="text-normal">Treasurer : R Chaitanya Kumar</p>
        </div>        
        </div>

        <!--Chikkaballapur -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-py-8">
        <div class="grid w-auto">
          <p class="text-normal">Association Name : CHIKKABALLAPUR DISTRICT ROLLER SKATING ASSOCIATION  </p>
          <p class="text-normal">E mail : cdrsazabi@gmail.com</p>
          <p class="text-normal">Mobile : +91 </p>
          <p class="text-normal">President : Subbarao A B</p>
          <p class="text-normal">General Secretary : Mohammed Zabiulla</p>
          <p class="text-normal">Treasurer : Karthik  K.N</p>
        </div>
         <div class="grid w-4/5 justify-center mr-0 bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664518905/krsa/districts/chikk_cxktnx.png"> 
          <p class="text-clip">CHIKKABALLAPUR  DISTRICT</p> 
        </div>        
        </div>

         <!--Davanagere district -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-2 lg:grid-cols-2 lg:gap-x-2">             
        <div class="grid w-4/5 justify-center bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664519178/krsa/districts/davan_m5rqsi.png"> 
          <p class="text-clip">DAVANGERE DISTRICT</p> 
        </div>
        <div class="grid w-auto">
          <p class="text-normal">Association Name : DAVANGERE DISTRICT ROLLER SKATING ASSOCIATION </p>
          <p class="text-normal">E mail : </p>
          <p class="text-normal">Mobile :  </p>
          <p class="text-normal">President :  </p>
          <p class="text-normal">General Secretary : Niranjana Babu</p>
          <p class="text-normal">Treasurer : G.S. Mallesh</p>
        </div>        
        </div>

        <!--Dharwad -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-py-8">
        <div class="grid w-auto">
          <p class="text-normal">Association Name : DHARWAD DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-normal">E mail : mallikarjunik@gmail.com</p>
          <p class="text-normal">Mobile : +91 9740301242 </p>
          <p class="text-normal">President : Mallikarjun Kadappanavar</p>
          <p class="text-normal">General Secretary : Irappa Kadappanavar</p>
          <p class="text-normal">Treasurer : Veena Kadappanavar</p>
        </div>
         <div class="grid w-4/5 justify-center mr-0 bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664519440/krsa/districts/dharwad_r6xalr.png"> 
          <p class="text-clip">DHARWAD DISTRICT</p> 
        </div>        
        </div>

         <!--Kalaburgi  district -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-2 lg:grid-cols-2 lg:gap-x-2">             
        <div class="grid w-4/5 justify-center bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664519717/krsa/districts/kala_evvn6z.png"> 
          <p class="text-clip">KALABURAGI DISTRICT</p> 
        </div>
        <div class="grid w-auto">
          <p class="text-normal">Association Name : KALABURAGI DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-lg">E mail : kdrsakalaburagi@gmail.com </p>
          <p class="text-normal">Mobile : +91 9052567199</p>
          <p class="text-normal">President : Mr Vikram Darshanapur </p>
          <p class="text-normal">General Secretary : Mr Jayakumar S R</p>
          <p class="text-normal">Treasurer : Mrs Rohini Toran </p>
        </div>        
        </div>

        <!--Kolar  District  -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-py-8">
        <div class="grid w-auto">
          <p class="text-normal">Association Name : KOLAR DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-normal">E mail : kdrsassociation@gmail.com</p>
          <p class="text-normal">Mobile : +91 99725 67619 </p>
          <p class="text-normal">President : Murali Gowda S R</p>
          <p class="text-normal">General Secretary : Nikil Gowda</p>
          <p class="text-normal">Treasurer : G Senthil Kumar </p>
        </div>
         <div class="grid w-4/5 justify-center mr-0 bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664520432/krsa/districts/kolar_acntil.png"> 
          <p class="text-clip">KOLAR DISTRICT</p> 
        </div>        
        </div>

        <!--Koppal  district -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-2 lg:grid-cols-2 lg:gap-x-2">             
        <div class="grid w-4/5 justify-center bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664521333/krsa/districts/koppal_dpmxhw.png"> 
          <p class="text-clip">KOPPAL DISTRICT</p> 
        </div>
        <div class="grid w-auto">
          <p class="text-normal">Association Name : KOPPAL DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-normal">E mail : kdrsa37@gmail.com </p>
          <p class="text-normal">Mobile : +91 9353335228</p>
          <p class="text-normal">President : Nagraj N </p>
          <p class="text-normal">General Secretary : Shrinivasulu. D. V.</p>
          <p class="text-normal">Treasurer : Gyanesh </p>
        </div>        
        </div>

        <!--Mandya  District  -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-py-8">
        <div class="grid w-auto">
          <p class="text-normal">Association Name : MANDYA DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-normal">E mail : ranganathranga671@gmail.com</p>
          <p class="text-normal">Mobile : +91 9844299440 </p>
          <p class="text-normal">President : Manjunath R D</p>
          <p class="text-normal">General Secretary : Ranganath R</p>
          <p class="text-normal">Treasurer : Soumya Rani H </p>
        </div>
         <div class="grid w-4/5 justify-center mr-0 bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664521497/krsa/districts/mandya_dnveba.png"> 
          <p class="text-clip">MANDYA DISTRICT</p> 
        </div>        
        </div>

         <!--Mysuru  district -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-2 lg:grid-cols-2 lg:gap-x-2">             
        <div class="grid w-4/5 justify-center bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664521708/krsa/districts/mysuru_yccbbr.png"> 
          <p class="text-clip">MYSURU DISTRICT</p> 
        </div>
        <div class="grid w-auto">
          <p class="text-normal">Association Name : NEW MYSURU DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-normal">E mail : vnrsc@yahoo.com</p>
          <p class="text-normal">Mobile : +91 9341778998</p>
          <p class="text-normal">President : Poornima Upadhya </p>
          <p class="text-normal">General Secretary : Jayalakshmi </p>
          <p class="text-normal">Treasurer : Raghavendra K N </p>
        </div>        
        </div>

        <!--Tumkur District  -->
        <div class="max-w-7xl mx-auto mt-6 pt-12 grid gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-py-8">
        <div class="grid w-auto">
          <p class="text-normal">Association Name : NEW TUMKUR DISTRICT ROLLER SKATING ASSOCIATION</p>
          <p class="text-normal">E mail : lokeshsktng@gmail.com</p>
          <p class="text-normal">Mobile : +91 9481187558 </p>
          <p class="text-normal">President : T V Madhukumar</p>
          <p class="text-normal">General Secretary : </p>
          <p class="text-normal">Treasurer : Mohan Kumar T H </p>
        </div>
         <div class="grid w-4/5 justify-center mr-0 bg-white shadow-lg h-64  relative">
        <img class="w-full aspect-auto object-none object-center" src="https://res.cloudinary.com/lamcom/image/upload/v1664522520/krsa/districts/tumcur_xfpxn2.png"> 
          <p class="text-clip">NEW TUMKUR DISTRICT</p> 
        </div>        
        </div>


    </div>
</template>

<script>
export default {
    
}
</script>