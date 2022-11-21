<template>
<!-- Banner section -->
    <section class="relative bg-cover" 
    style="background-image: url('https://res.cloudinary.com/lamcom/image/upload/v1669039351/sravya/herobanner/banner-regis_eps0iy.jpg')">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>

        <div class="relative z-20 px-4 py-24 mx-auto text-center text-white max-w-7xl lg:py-32">
            <div class="flex flex-wrap text-white">
                <div class="relative w-full px-4 mx-auto text-center xl:flex-grow-0 xl:flex-shrink-0">

                    <h1 class="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">FONS ET ORIGO MARATHON</h1>
                   

                </div>
            </div>
        </div>

    </section>
 

  <!-- Section 10 -->
      <section class="py-20 bg-gray-50">
          <div class="px-10 mx-auto max-w-7xl">
              <div class="flex flex-wrap items-center justify-center">
                  <div class="max-w-sm mb-16 lg:mb-0 lg:max-w-2xl lg:w-1/2 lg:px-4 bg-darkgray">
                    
                      <h2 class="mb-4 text-4xl font-bold tracking-tight lg:text-4xl xl:text-4xl text-white">Register today</h2>
                      <img src="https://res.cloudinary.com/lamcom/image/upload/v1669040768/sravya/herobanner/regi-form_oamdef.jpg">
                      
                  </div>
                  <div class="w-full px-4 lg:w-1/2">
                      <div class="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
                          <div class="overflow-hidden text-center bg-white rounded-md shadow-sm">
                              <div class="px-6 py-8">
                                  <form onsubmit="event.preventDefault();">
                                      <div class="mb-6">
                                          <span class="text-sm text-gray-300">Fill out your info below to</span>
                                          <h4 class="text-2xl font-semibold text-gray-700">Create your account</h4>
                                      </div>                                      
                                      <input class="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="text" name="Fname" id="Fname" placeholder="First Name">
                                      <input class="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="tel" name="Pno" id="Pno" placeholder="Phone Number">
                                      <input class="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="email" name="Email" id="Email" placeholder="Email address">
                                      <textarea class="py-2.5 px-4 mb-4 w-full bg-gray-50 border focus:ring-2 focus:ring-opacity-90 focus:ring-indigo-500 border-gray-100 rounded focus:outline-none" type="text" name="msg" id="msg" placeholder="Enter your Message"></textarea>
                                      <button class="w-full py-3 mb-4 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-500">Submit</button>
                                  </form>
                                 
                              </div>
                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

   
</template>