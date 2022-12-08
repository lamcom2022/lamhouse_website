<template>
  <!-- Hero Banner -->
  <section
    class="relative bg-cover"
    style="
      background-image: url('https://res.cloudinary.com/lamcom/image/upload/v1665933228/beyondborder/contact/contact-banner_ibo4oo.jpg');
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
            Contact
          </h1>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 6 -->
  <section class="relative py-0 bg-white lg:py-20">
    <div
      class="
        flex flex-col
        items-center
        justify-between
        px-10
        mx-auto
        max-w-7xl
        xl:px-5
        lg:flex-row
      "
    >
      <div
        class="
          flex flex-col
          items-center
          w-full
          px-10
          pt-5
          pb-20
          lg:pt-20 lg:flex-row
        "
      >
        <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-3/4 mx-auto">
          <div
            class="
              relative
              z-10
              flex flex-col
              items-start
              justify-start
              p-10
              bg-white
              shadow-2xl
              rounded-xl
            "
          >
            <h4 class="w-full text-4xl font-medium leading-snug">Contact Us</h4>
            <div class="relative w-full mt-6 space-y-8">
              <form name="Contact" id="Contact" method="post"
              @submit.prevent="sendContactUs" ref="frmContact">
                <div class="relative py-6">
                  <label for="first_name"
                    class="
                      absolute
                      px-2
                      ml-2
                      -mt-3
                      font-medium
                      text-gray-600
                      bg-white
                    "
                    >Name *</label
                  >
                  <input v-model="data.first_name"
                    type="text" name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="
                      block
                      w-full
                      px-4
                      py-4
                      mt-2
                      text-base
                      placeholder-gray-400
                      bg-white
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border-black
                    "
                    
                  />
                </div>

                <div class="relative py-6">
                  <label
                    class="
                      absolute
                      px-2
                      ml-2
                      -mt-3
                      font-medium
                      text-gray-600
                      bg-white
                    "
                    >Email Address *</label
                  >
                  <input
                  v-model="data.email"
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="name"
                    class="
                      block
                      w-full
                      px-4
                      py-4
                      mt-2
                      text-base
                      placeholder-gray-400
                      bg-white
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border-black
                    "
                   
                  />
                </div>
                <div class="relative py-6">
                  <label
                    class="
                      absolute
                      px-2
                      ml-2
                      -mt-3
                      font-medium
                      text-gray-600
                      bg-white
                    "
                    >Phone*</label
                  >
                  <input
                  v-model="data.phone_number"
                  name="phone_number"
                  id="phone_number"
                  autocomplete="tel"
                    type="number"
                    class="
                      block
                      w-full
                      px-4
                      py-4
                      mt-2
                      text-base
                      placeholder-gray-400
                      bg-white
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border-black
                    "
                    
                  />
                </div>
                <div class="relative py-6">
                  <label
                    class="px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
                    >Message</label
                  >
                  <textarea
                  v-model="data.description"
                  id="description"
                  name="description"
                    rows="4"
                    cols="50"                   
                    class="
                      block
                      w-full
                      px-4
                      py-4
                      mt-2
                      text-base
                      placeholder-gray-400
                      bg-white
                      border border-gray-300
                      rounded-md
                      focus:outline-none focus:border-black
                    "
                  ></textarea>
                </div>
                <div class="relative mb-6 py-4">
                  <button
                  v-on:click="sendContactUs"
                    type="submit"
                    class="
                      inline-flex
                      justify-center
                      rounded-md
                      border border-transparent
                      bg-primary-900
                      py-2
                      px-4
                      text-sm
                      font-medium
                      text-white
                      shadow-sm
                      hover:bg-indigo-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-indigo-500
                      focus:ring-offset-2
                    "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <svg
            class="
              absolute
              top-0
              left-0
              z-0
              w-32
              h-32
              -mt-12
              -ml-12
              text-gray-200
              fill-current
            "
            viewBox="0 0 91 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
              <g fill-rule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72"></circle>
                    <circle cx="15.296" cy="3.445" r="2.719"></circle>
                    <circle cx="27.333" cy="3.445" r="2.72"></circle>
                    <circle cx="39.369" cy="3.445" r="2.72"></circle>
                    <circle cx="51.405" cy="3.445" r="2.72"></circle>
                    <circle cx="63.441" cy="3.445" r="2.72"></circle>
                    <circle cx="75.479" cy="3.445" r="2.72"></circle>
                    <circle cx="87.514" cy="3.445" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72"></circle>
                    <circle cx="15.296" cy="3.525" r="2.719"></circle>
                    <circle cx="27.333" cy="3.525" r="2.72"></circle>
                    <circle cx="39.369" cy="3.525" r="2.72"></circle>
                    <circle cx="51.405" cy="3.525" r="2.72"></circle>
                    <circle cx="63.441" cy="3.525" r="2.72"></circle>
                    <circle cx="75.479" cy="3.525" r="2.72"></circle>
                    <circle cx="87.514" cy="3.525" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72"></circle>
                    <circle cx="15.296" cy="3.605" r="2.719"></circle>
                    <circle cx="27.333" cy="3.605" r="2.72"></circle>
                    <circle cx="39.369" cy="3.605" r="2.72"></circle>
                    <circle cx="51.405" cy="3.605" r="2.72"></circle>
                    <circle cx="63.441" cy="3.605" r="2.72"></circle>
                    <circle cx="75.479" cy="3.605" r="2.72"></circle>
                    <circle cx="87.514" cy="3.605" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72"></circle>
                    <circle cx="15.296" cy="3.686" r="2.719"></circle>
                    <circle cx="27.333" cy="3.686" r="2.72"></circle>
                    <circle cx="39.369" cy="3.686" r="2.72"></circle>
                    <circle cx="51.405" cy="3.686" r="2.72"></circle>
                    <circle cx="63.441" cy="3.686" r="2.72"></circle>
                    <circle cx="75.479" cy="3.686" r="2.72"></circle>
                    <circle cx="87.514" cy="3.686" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72"></circle>
                    <circle cx="15.296" cy="2.767" r="2.719"></circle>
                    <circle cx="27.333" cy="2.767" r="2.72"></circle>
                    <circle cx="39.369" cy="2.767" r="2.72"></circle>
                    <circle cx="51.405" cy="2.767" r="2.72"></circle>
                    <circle cx="63.441" cy="2.767" r="2.72"></circle>
                    <circle cx="75.479" cy="2.767" r="2.72"></circle>
                    <circle cx="87.514" cy="2.767" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72"></circle>
                    <circle cx="15.296" cy="2.846" r="2.719"></circle>
                    <circle cx="27.333" cy="2.846" r="2.72"></circle>
                    <circle cx="39.369" cy="2.846" r="2.72"></circle>
                    <circle cx="51.405" cy="2.846" r="2.72"></circle>
                    <circle cx="63.441" cy="2.846" r="2.72"></circle>
                    <circle cx="75.479" cy="2.846" r="2.72"></circle>
                    <circle cx="87.514" cy="2.846" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72"></circle>
                    <circle cx="15.296" cy="2.926" r="2.719"></circle>
                    <circle cx="27.333" cy="2.926" r="2.72"></circle>
                    <circle cx="39.369" cy="2.926" r="2.72"></circle>
                    <circle cx="51.405" cy="2.926" r="2.72"></circle>
                    <circle cx="63.441" cy="2.926" r="2.72"></circle>
                    <circle cx="75.479" cy="2.926" r="2.72"></circle>
                    <circle cx="87.514" cy="2.926" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72"></circle>
                    <circle cx="15.296" cy="3.006" r="2.719"></circle>
                    <circle cx="27.333" cy="3.006" r="2.72"></circle>
                    <circle cx="39.369" cy="3.006" r="2.72"></circle>
                    <circle cx="51.405" cy="3.006" r="2.72"></circle>
                    <circle cx="63.441" cy="3.006" r="2.72"></circle>
                    <circle cx="75.479" cy="3.006" r="2.72"></circle>
                    <circle cx="87.514" cy="3.006" r="2.719"></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            class="
              absolute
              bottom-0
              right-0
              z-0
              w-32
              h-32
              -mb-12
              -mr-12
              text-primary-900
              fill-current
            "
            viewBox="0 0 91 91"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" stroke-width="1" fill-rule="evenodd">
              <g fill-rule="nonzero">
                <g>
                  <g>
                    <circle cx="3.261" cy="3.445" r="2.72"></circle>
                    <circle cx="15.296" cy="3.445" r="2.719"></circle>
                    <circle cx="27.333" cy="3.445" r="2.72"></circle>
                    <circle cx="39.369" cy="3.445" r="2.72"></circle>
                    <circle cx="51.405" cy="3.445" r="2.72"></circle>
                    <circle cx="63.441" cy="3.445" r="2.72"></circle>
                    <circle cx="75.479" cy="3.445" r="2.72"></circle>
                    <circle cx="87.514" cy="3.445" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 12)">
                    <circle cx="3.261" cy="3.525" r="2.72"></circle>
                    <circle cx="15.296" cy="3.525" r="2.719"></circle>
                    <circle cx="27.333" cy="3.525" r="2.72"></circle>
                    <circle cx="39.369" cy="3.525" r="2.72"></circle>
                    <circle cx="51.405" cy="3.525" r="2.72"></circle>
                    <circle cx="63.441" cy="3.525" r="2.72"></circle>
                    <circle cx="75.479" cy="3.525" r="2.72"></circle>
                    <circle cx="87.514" cy="3.525" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 24)">
                    <circle cx="3.261" cy="3.605" r="2.72"></circle>
                    <circle cx="15.296" cy="3.605" r="2.719"></circle>
                    <circle cx="27.333" cy="3.605" r="2.72"></circle>
                    <circle cx="39.369" cy="3.605" r="2.72"></circle>
                    <circle cx="51.405" cy="3.605" r="2.72"></circle>
                    <circle cx="63.441" cy="3.605" r="2.72"></circle>
                    <circle cx="75.479" cy="3.605" r="2.72"></circle>
                    <circle cx="87.514" cy="3.605" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 36)">
                    <circle cx="3.261" cy="3.686" r="2.72"></circle>
                    <circle cx="15.296" cy="3.686" r="2.719"></circle>
                    <circle cx="27.333" cy="3.686" r="2.72"></circle>
                    <circle cx="39.369" cy="3.686" r="2.72"></circle>
                    <circle cx="51.405" cy="3.686" r="2.72"></circle>
                    <circle cx="63.441" cy="3.686" r="2.72"></circle>
                    <circle cx="75.479" cy="3.686" r="2.72"></circle>
                    <circle cx="87.514" cy="3.686" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 49)">
                    <circle cx="3.261" cy="2.767" r="2.72"></circle>
                    <circle cx="15.296" cy="2.767" r="2.719"></circle>
                    <circle cx="27.333" cy="2.767" r="2.72"></circle>
                    <circle cx="39.369" cy="2.767" r="2.72"></circle>
                    <circle cx="51.405" cy="2.767" r="2.72"></circle>
                    <circle cx="63.441" cy="2.767" r="2.72"></circle>
                    <circle cx="75.479" cy="2.767" r="2.72"></circle>
                    <circle cx="87.514" cy="2.767" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 61)">
                    <circle cx="3.261" cy="2.846" r="2.72"></circle>
                    <circle cx="15.296" cy="2.846" r="2.719"></circle>
                    <circle cx="27.333" cy="2.846" r="2.72"></circle>
                    <circle cx="39.369" cy="2.846" r="2.72"></circle>
                    <circle cx="51.405" cy="2.846" r="2.72"></circle>
                    <circle cx="63.441" cy="2.846" r="2.72"></circle>
                    <circle cx="75.479" cy="2.846" r="2.72"></circle>
                    <circle cx="87.514" cy="2.846" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 73)">
                    <circle cx="3.261" cy="2.926" r="2.72"></circle>
                    <circle cx="15.296" cy="2.926" r="2.719"></circle>
                    <circle cx="27.333" cy="2.926" r="2.72"></circle>
                    <circle cx="39.369" cy="2.926" r="2.72"></circle>
                    <circle cx="51.405" cy="2.926" r="2.72"></circle>
                    <circle cx="63.441" cy="2.926" r="2.72"></circle>
                    <circle cx="75.479" cy="2.926" r="2.72"></circle>
                    <circle cx="87.514" cy="2.926" r="2.719"></circle>
                  </g>
                  <g transform="translate(0 85)">
                    <circle cx="3.261" cy="3.006" r="2.72"></circle>
                    <circle cx="15.296" cy="3.006" r="2.719"></circle>
                    <circle cx="27.333" cy="3.006" r="2.72"></circle>
                    <circle cx="39.369" cy="3.006" r="2.72"></circle>
                    <circle cx="51.405" cy="3.006" r="2.72"></circle>
                    <circle cx="63.441" cy="3.006" r="2.72"></circle>
                    <circle cx="75.479" cy="3.006" r="2.72"></circle>
                    <circle cx="87.514" cy="3.006" r="2.719"></circle>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//const config = useRuntimeConfig()
//const emailURL = "http://localhost:4406/";
//const emailURL = "https://lamhouse.in:4406/";
// const emailURL = "http://localhost:9000/.netlify/functions/api/sendmail";
 const emailURL =
 "https://sendmaillamcom.netlify.app/.netlify/functions/api/sendmail";

export default {
  components: {},
  data() {
    return {
      isContactFormVisible: false,
      data: { "form-name": "contact" },
      api: "",
    };
  },
  methods: {
    async sendContactUs(args) {
      console.log("Send Contact");
      try {
        let request = {};
        this.data.frommail = "info@lamhouse.in";
        this.data.ccmail = "ravinther@lamhouse.in,pradeep@lamhouse.in";
        (this.data.bccmail = "suresh@lamhouse.in"),
          (this.data.transportpwd = "am@zecH12#"),
          (this.data.transportusername = "info@lamhouse.in");

        const { data: contact } = await useFetch("api/contact", {
          method: "post",
          body: this.data,
        });
        debugger;
        fetch(emailURL, {
          method: "post",
          body: JSON.stringify(this.data),
          headers: {
            "content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result) {
              // there was an error...
              alert("Email delivered successfully");
              console.log(result);
            } else {
            }
          });
        // alert("Thank you for your enquiry! our customer success team will repond as soon as possible.")
        // const { data: sendemail } = await useFetch("/api/sendemail", {
        //     method: 'post', body: this.data
        // })
        //alert("Email delivered successfully");

        this.data = {};
        this.isContactFormVisible = !this.isContactFormVisible;
        //this.$toast.success("Thank you for your enquiry! our customer success team will repond as soon as possible.")
      } catch (error) {
        this.isContactFormVisible = !this.isContactFormVisible;
        alert(JSON.stringify(error));
        //this.$toast.error(JSON.stringify(error))
      } finally {
      }
    },
    handleSelectedInProduct(data) {
      this.data.product = data;
    },
    handleSelectedInCountryCode(data) {
      this.data.country_code = data;
    },
  },
  computed: {},
  mounted() {
    this.$toast.add({
      severity: "info",
      summary: "Info Message",
      detail: "Message Content",
      life: 10000,
    });
  },
  created() {
    useNuxtApp().$bus.$on("evtShowContactSales", (data) => {
      this.isContactFormVisible = true;
    });
  },
  beforeDestroy() {
    useNuxtApp().$bus.$off("evtShowContactSales");
  },
};
</script>