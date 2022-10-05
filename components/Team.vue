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
        >Our Team</span
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

    <div class="bg-white pt-10 pb-20">
        <div class="grid max-w-7xl mx-auto pt-10 pb-10 px-4">
            <h2 class="text-3xl tracking-tight font-extrabold text-gray-600 sm:text-4xl">
                    EXECUTIVE COMMITTEE:
                </h2>
        </div>        
        <div class="max-w-7xl mx-auto mt-6 pt-5 grid gap-4 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8">
             
        <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
        <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602514/krsa/team/president_lissa3.png"> 
            </div>
            <div class="mx-auto w-full">     
        <p class="text-center uppercase text-normal font-bold">President</p>
        <p class="text-center text-normal">MR LAKSHMINARAYANA,IAS</p>
            </div>      
        </div>

         <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
           <div class="grid object-center">
        <img src="https://res.cloudinary.com/lamcom/image/upload/v1664972311/krsa/team/gen-secre1_bpdkhl.png">
           </div> 
            <div class="mx-auto w-full">         
        <p class="text-center uppercase text-normal font-bold">General Secretary</p>
        <p class="text-center  text-normal">MR INDUDHAR SEETARAM</p>
            </div>       
        </div>

        <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664721775/krsa/team/dummy-profile-pic_nbjng4.jpg">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">VICE PRESIDENT</p>
        <p class="text-center text-normal">MR  M S POOVAIAH</p>
            </div>
        </div>

           <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602514/krsa/team/vice-president_pjwvy4.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">VICE PRESIDENT</p>
        <p class="text-center text-normal">MR NIRAJAN BABU</p>
            </div>
        </div>

         <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602515/krsa/team/vice-president-1_x6db5w.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">VICE PRESIDENT</p>
        <p class="text-center text-normal">MR  ANTONY JAMES </p>
            </div>
        </div>

         <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602513/krsa/team/joint-seretary_x4qzlc.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">JOINT SECRETARY</p>
        <p class="text-center text-normal">MR SURYAKANT HINDALGEKAR</p>
            </div>
        </div>

        <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602513/krsa/team/joint-secretary1_hcjqba.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">JOINT SECRETARY</p>
        <p class="text-center text-normal">MR  CHANDRASHEKAR</p>
            </div>
        </div>

        <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602514/krsa/team/joint-seretary2_dfvws1.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">JOINT SECRETARY</p>
        <p class="text-center text-normal">MR JAYAKUMAR S R </p>
            </div>
        </div>

         <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602514/krsa/team/joint-seretary3_mogdz5.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">JOINT SECRETARY</p>
        <p class="text-center text-normal">MR  MAHESH KUMAR</p>
            </div>
        </div>

         <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602055/krsa/team/executive-member_g41fyz.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">EXECUTIVE MEMBER</p>
        <p class="text-center text-normal">MR  H R RAVISH RAO</p>
            </div>
        </div>

        <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602515/krsa/team/dummy_p23ovd.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">EXECUTIVE MEMBER</p>
        <p class="text-center text-normal">MRS ASHA INDUDHAR </p>
            </div>
        </div>
         <div class="grid justify-items-center w-full bg-white shadow-lg h-80">
            <div class="grid object-center">
            <img src="https://res.cloudinary.com/lamcom/image/upload/v1664602515/krsa/team/executive-member-1_ub8ria.png">
            </div>
            <div class="mx-auto w-full">          
        <p class="text-center uppercase text-normal font-bold">EXECUTIVE MEMBER</p>
        <p class="text-center text-normal">MRS  ESTHER BERNARD </p>
            </div>
        </div>
       
      
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>