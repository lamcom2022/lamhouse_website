<template>
  <!-- Hero Banner -->
  <section
    class="relative bg-cover"
    style="
      background-image: url('https://res.cloudinary.com/lamcom/image/upload/v1665904750/beyondborder/about/about-banner_h4ecga.jpg');
    "
  >
    <div
      class="
        absolute
        inset-0
        bg-gradient-to-b
        from-black
        to-transparent
        opacity-30
      "
    ></div>

    <div
      class="
        relative
        z-20
        px-4
        py-24
        mx-auto
        text-center text-white
        max-w-7xl
        lg:py-32
      "
    >
      <div class="flex flex-wrap text-white">
        <div class="box-border h-32 w-96 p-4 border-4">
          <h1
            class="
              mt-0
              mb-2
              text-4xl
              font-bold
              text-white
              sm:text-4xl
              lg:text-6xl
              uppercase
              items-center
              py-4
            "
          >
            Services
          </h1>
        </div>
      </div>
    </div>
  </section>
  <!-- services -->
  <section class="py-20 bg-white">
    <div class="container max-w-6xl mx-auto">
      <h2
        class="
          text-xl
          font-bold
          tracking-tight
          text-center text-primary-900
          sm:text-2xl
        "
      >
        Services
      </h2>
      <p class="mt-2 text-lg text-center text-gray-600">
        Check out our list of awesome services below.
      </p>
      <div
        class="
          grid grid-cols-4
          gap-8
          mt-10
          sm:grid-cols-8
          lg:grid-cols-12
          sm:px-8
          xl:px-0
        "
      >
        <div
          class="
            relative
            flex flex-col
            items-center
            justify-between
            col-span-4
            px-8
            py-12
            space-y-4
            overflow-hidden
            bg-gray-100
            sm:rounded-xl
          "
        >
        
          <div class=" p-3 text-white bg-primary-500 rounded-full">
            <img
              src="https://res.cloudinary.com/lamcom/image/upload/v1665842901/beyondborder/icon/property-w_abjoyc.svg"
              class="w-8 h-8"
            />
          </div>
          <div class="pt-12">
          <h4 class="text-lg font-semibold text-primary-900">
            Property Maintenance
          </h4>
          </div>
          <div class="mt-4">
          <p class="text-base text-center text-gray-500">
            We provide professional and reliable property maintenance services,
            including painting, plastering, plumbing and electrical services,
            glazing repairs, general building repairs, and refurbishment works.
          </p>
          </div>
        </div>
       

        <div
          class="
            flex flex-col
            items-center
            justify-between
            col-span-4
            px-8
            py-12
            space-y-4
            bg-gray-100
            sm:rounded-xl
          "
        >
          <div class="p-3 text-white bg-primary-500 rounded-full">
            <img
              src="https://res.cloudinary.com/lamcom/image/upload/v1665843113/beyondborder/icon/housekeeping-w_hgoht2.svg"
              class="w-8 h-8"
            />
          </div>
          <div class="pt-12">
          <h4 class="text-lg text-left font-semibold text-primary-900">Housekeeping</h4>
          </div>
          <div class="pt-12">
          <p class="text-base text-left text-gray-500">
            We provide end-to-end housekeeping services, such as cleaning the
            property and ensuring the proper functioning of electrical and
            lighting systems and plumbing. We ensure your laundry is as clean as
            new. We also make sure your gardens and lawns are well-maintained.
          </p>
          </div>
         
        </div>

        <div
          class="
            flex flex-col
            items-center
            justify-between
            col-span-4
            px-8
            py-12
            space-y-4
            bg-gray-100
            sm:rounded-xl
          "
        >
          <div class="p-3 text-white bg-primary-500 rounded-full">
            <img
              src="https://res.cloudinary.com/lamcom/image/upload/v1665842088/beyondborder/icon/document-w_djk2h0.svg"
              class="w-8 h-8"
            />
          </div>
          <h4 class="text-lg font-semibold text-primary-900">
            Documentation Services
          </h4>
          <p class="text-base text-center text-gray-500">
            Ensuring all papers and documents, such as Khata and Sale Deed...,
          </p>
          <a href=""
            ><p
              class="text-right text-primary-900 hover:text-primary-500 text-sm"
            >
              Read more...
            </p></a
          >
        </div>

        <div
          class="
            flex flex-col
            items-center
            justify-between
            col-span-4
            px-8
            py-12
            space-y-4
            bg-gray-100
            sm:rounded-xl
          "
        >
          <div class="p-3 text-white bg-primary-500 rounded-full">
            <img
              src="https://res.cloudinary.com/lamcom/image/upload/v1665842522/beyondborder/icon/tax-w_xgtxcv.svg"
              class="w-8 h-8"
            />
          </div>
          <h4 class="text-lg font-semibold text-primary-900">
            Property Tax Services
          </h4>
          <p class="text-base text-center text-gray-500">
            Developer tools to help grow your application and keep it
            up-to-date.
          </p>
          <a href=""
            ><p
              class="text-right text-primary-900 hover:text-primary-500 text-sm"
            >
              Read more...
            </p></a
          >
        </div>

        <div
          class="
            flex flex-col
            items-center
            justify-between
            col-span-4
            px-8
            py-12
            space-y-4
            bg-gray-100
            sm:rounded-xl
          "
        >
          <div class="p-3 text-white bg-primary-500 rounded-full">
            <img
              src="https://res.cloudinary.com/lamcom/image/upload/v1665841601/beyondborder/icon/property-maintentce-w_xu6kw1.svg"
              class="w-8 h-8"
            />
          </div>
          <h4 class="text-lg font-semibold text-primary-900">Repair Works</h4>
          <p class="text-base text-center text-gray-500">
            Over time, a property may undergo some form of damage...,
          </p>
          <a href=""
            ><p
              class="text-right text-primary-900 hover:text-primary-500 text-sm"
            >
              Read more...
            </p></a
          >
        </div>

        <div
          class="
            flex flex-col
            items-center
            justify-between
            col-span-4
            px-8
            py-12
            space-y-4
            bg-gray-100
            sm:rounded-xl
          "
        >
          <div class="p-3 text-white bg-primary-500 rounded-full">
            <img
              src="https://res.cloudinary.com/lamcom/image/upload/v1665843231/beyondborder/icon/attorney-w_uvnftb.svg"
              class="w-8 h-8"
            />
          </div>
          <h4 class="text-lg font-semibold text-primary-900">
            Attorney Assistance
          </h4>
          <p class="text-base text-center text-gray-500">
            At times, you may need some legal assistance for ...,
          </p>
          <a href=""
            ><p
              class="text-right text-primary-900 hover:text-primary-500 text-sm"
            >
              Read more...
            </p></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>