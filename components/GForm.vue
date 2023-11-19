<template>
  <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid px-4 border-white">
    <!-- <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfRh4cMuyKEdrYtdd-BxL5b_WMrChA7E15uOVxKzGB3X7E6PA/viewform?embedded=true"
      width="100%"
      height="4919"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe> -->

    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSfRh4cMuyKEdrYtdd-BxL5b_WMrChA7E15uOVxKzGB3X7E6PA/viewform?embedded=true"
      width="100%"
      height="4919"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >
  </div>

  <!-- <h2>{{data}}</h2> -->
</template>

<script>
export default {
  data() {
    return {
      data: { formdetails: "contact" },
    };
  },
  methods: {
    async SubmitForm(args) {
      try {
        // console.log(this.data + "Data added");

        const { data: contact } = await useFetch("api/contact", {
          method: "post",
          body: this.data,
        });

        const {
          data: sendemail,
          onFetchResponse,
          onFetchError,
        } = await useFetch("/api/sendemail", {
          method: "post",
          body: this.data,
        });
        onFetchResponse((response) => {
          console.log("status: ", response.status);
        });

        onFetchError((error) => {
          console.error(error.message);
        });

        console.log(sendemail.value);
        if (contact._rawValue != null && contact._rawValue != undefined) {
          // this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
