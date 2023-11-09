<template>
  <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid px-4">
    <div class="max-w-7xl mx-auto px-4">
      <div>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Intake form
        </p>
        <p class="mt-4 text-gray-700">
          Please fill the form below to help us understand what you need and for
          the therapist to be prepared for your session. All the information you
          share in this form will be kept completely confidential.
        </p>
        <p class="mt-4 text-gray-700">
          Charges for your therapy session may vary based on type of therapy,
          duration of session etc.
        </p>
        <p class="mt-4 text-gray-700">
          The details of your confirmed session schedule, cost and mode of
          payment will be shared with you once a session has been booked.
        </p>
        <p class="mt-4 text-gray-700">
          In case of any queries, feel free to call us or drop us a text at
          +918075634397 or email us at hello@mindnbeyond.in
        </p>

        <!-- <p class="mt-4 text-gray-700">
          In order to book your first counselling session with us, you are
          required to register by filling all the necessary fields below, so we
          can provide you with the best experience.
        </p>
        <p class="mt-4 text-gray-700">We ensure complete confidentiality.</p>
        <p class="mt-4 text-gray-700">
          In case of any queries, feel free to call us or drop us a text at +91
          8075634397 or email us at hello@mindnbeyond.in
        </p>
        <p class="mt-4 text-gray-700">
          Kindly note that we charge a fee depending on the duration of the
          session.
        </p>
        <p class="mt-4 text-gray-700">
          The details of making the payment will be shared once a session has
          been booked for you.
        </p>
        <p class="mt-4 text-gray-700">
          By moving on to the next section, you are acknowledging the
          aforementioned terms and providing consents to avail our services.
        </p>
        <p class="mt-4 text-gray-700">
          All the details provided by you are kept confidential.
        </p> -->
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-16 my-16 lg:grid px-4">
    <form
      name="Contact"
      id="Contact"
      class="space-y-8"
      method="POST"
      v-on:submit.prevent="SubmitForm"
      ref="frmContact"
    >
      <input type="hidden" name="formdetails" value="Contact" />
      <div
        class="form-group lg:w-3/4 md:w-1/2 h-full md:mx-3 py-12 lg:mx-12 flex flex-col"
      >
        <!--Name -->
        <label
          for="Name"
          class="form-label inline-block mb-2 text-gray-700 font-semibold"
          ><span class="text-secondary px-2 text-lg gap-2 font-semibold">*</span
          >Name</label
        >
        <input
          v-model="data.first_name"
          type="text"
          name="fname"
          id="fname"
          class="shrink w-72 form-control rounded mb-2 mx-4"
        />
        <!--Age -->
        <div class="grid lg:grid-cols-1 md:grid-cols-1 mt-6">
          <label
            for="Age"
            class="md:flex-none form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            <span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Age</label
          >
          <input
            v-model="data.age"
            type="date"
            name="age"
            id="DOB"
            class="shrink w-72 form-control rounded mb-2 mx-4"
          />
          <!-- Sex -->
          <label
            for="Sex"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Sex</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Male"
              >Male
              <input
                v-model="data.male"
                type="radio"
                name="age"
                id="male"
                class="form-control mt-0"
            /></label>
            <label for="Female"
              >Female
              <input
                v-model="data.female"
                type="radio"
                name="age"
                id="female"
                class="form-control mt-0"
            /></label>
            <label for="Female"
              >Other
              <input
                v-model="data.other"
                type="radio"
                name="age"
                id="other"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Preferred pronouns -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="Sex"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Preferred Pronouns</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Male"
              >She/Her
              <input
                v-model="data.gender"
                value="Female"
                type="radio"
                name="prefer"
                id="she"
                class="form-control mt-0"
            /></label>
            <label for="Female"
              >They/Them
              <input
                v-model="data.gender"
                value="Other"
                type="radio"
                name="prefer"
                id="they"
                class="form-control mt-0"
            /></label>
            <label for="other"
              >He/Him
              <input
                v-model="data.gender"
                value="He"
                type="radio"
                name="prefer"
                id="he"
                class="form-control mt-0"
            /></label>
            <label for="male"
              >Prefer not to say
              <input
                v-model="data.gender"
                value="Not Preffered"
                type="radio"
                name="prefer"
                id="preferno"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Phone Number -->
        <div class="grid mt-6">
          <label
            for="PhoneNumber"
            class="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            <span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Phone Number
            <p class="flex flex-col text-sm font-normal">
              (If you are situated outside of India, kindly provide an
              alternative local number or mention the means of direct cellular
              contact)
            </p>
          </label>
          <input
            v-model="data.mobile_number"
            type="tel"
            name="phone"
            id="phone"
            class="shrink w-72 form-control rounded mb-2 mx-4"
          />
        </div>

        <!--Email -->
        <div class="grid mt-6">
          <label
            for="PhoneNumber"
            class="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            <span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Email
            <p class="flex flex-col text-sm font-normal">
              (Please note that your session details will be sent to you on this
              email)
            </p>
          </label>
          <input
            v-model="data.email"
            type="text"
            name="email"
            id="email"
            class="shrink w-72 form-control rounded mb-2 mx-4"
          />
        </div>

        <!--Current Status -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="CurrentStatus"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Current Status</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Student"
              >Student
              <input
                v-model="data.job"
                value="Student"
                type="radio"
                name="status"
                id="student"
                class="form-control mt-0"
            /></label>
            <label for="Working"
              >Working
              <input
                v-model="data.job"
                value="Working"
                type="radio"
                name="status"
                id="working"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Have you ever taken counselling before -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="CurrentStatus"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Have you ever taken counselling before?</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Yes"
              >Yes
              <input
                v-model="data.counselingTaken"
                value="Yes"
                type="radio"
                name="counselling"
                id="yes"
                class="form-control mt-0"
            /></label>
            <label for="No"
              >No
              <input
                v-model="data.counselingTaken"
                value="No"
                type="radio"
                name="counselling"
                id="no"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--First session -->
        <div class="grid mt-6">
          <label
            for="Session"
            class="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            <span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Anything you would like to share before your first session
            <p class="flex flex-col text-sm font-normal">
              (concerns, challenges or objectives you want to work on through
              therapy)
            </p>
          </label>
          <textarea
            v-model="data.usermessage"
            rows="2"
            name="session"
            id="session"
            class="shrink w-72 form-control rounded mb-2 mx-4"
          ></textarea>
        </div>

        <!--Mode of Counselling preferred -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="Mode of Counselling"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Mode of Counselling preferred?</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Phone Call"
              >Phone Call
              <input
                v-model="data.meetingpreference"
                value="Phone"
                type="radio"
                name="mcounselling"
                id="phonecall"
                class="form-control mt-0"
            /></label>
            <label for="Google Meet"
              >Google Meet
              <input
                v-model="data.meetingpreference"
                value="GoogleMeet"
                type="radio"
                name="mcounselling"
                id="gmeet"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Language Preference -->
        <div class="grid mt-6">
          <label
            for="Language Preference"
            class="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            <span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Do you have any language preference? If so, please mention.</label
          >
          <input
            v-model="data.language"
            type="text"
            name="langpref"
            id="email"
            class="shrink w-72 form-control rounded mb-2 mx-4"
          />
        </div>

        <!--What would you like to talk about -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="Sex"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >What would you like to talk about</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Anxiety"
              >Anxiety
              <input
                v-model="data.problem"
                value="Anxiety"
                type="checkbox"
                name="anxiety"
                id="anxiety"
                class="form-control mt-0"
            /></label>
            <label for="Depression"
              >Depression
              <input
                v-model="data.problem"
                value="Depression"
                type="checkbox"
                name="depression"
                id="depression"
                class="form-control mt-0"
            /></label>
            <label for="Family issues"
              >Family issues
              <input
                v-model="data.problem"
                value="Family issues"
                type="checkbox"
                name="fissues"
                id="fissues"
                class="form-control mt-0"
            /></label>
            <label for="Relationship problems"
              >Relationship problems
              <input
                v-model="data.problem"
                value="Relationship"
                type="checkbox"
                name="rproblems"
                id="rproblems"
                class="form-control mt-0"
            /></label>
            <label for="Others"
              >Other
              <input
                v-model="data.problem"
                value="other"
                type="checkbox"
                name="others"
                id="others"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Have you been clinically diagnosed with a mental health issue -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="MentalHealth"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Have you been clinically diagnosed with a mental health
            issue?</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Yes"
              >Yes
              <input
                v-model="data.diagnosedMentalHealth"
                value="Yes"
                type="radio"
                name="mhealth"
                id="mhyes"
                class="form-control mt-0"
            /></label>
            <label for="No"
              >No
              <input
                v-model="data.diagnosedMentalHealth"
                value="No"
                type="radio"
                name="mhealth"
                id="mhno"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Are you taking any medication -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="Medication"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Are you taking any medication?</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Yes"
              >Yes
              <input
                v-model="data.medicationTaken"
                value="Yes"
                type="radio"
                name="medication"
                id="medyes"
                class="form-control mt-0"
            /></label>
            <label for="No"
              >No
              <input
                v-model="data.medicationTaken"
                value="No"
                type="radio"
                name="medication"
                id="medno"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Are you taking any medication -->
        <div class="grid lg:grid-cols-1 mt-6">
          <label
            for="Medication"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >Therapy Session</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Individual"
              >Individual
              <input
                v-model="data.Individual"
                value="Yes"
                type="radio"
                name="Individual"
                id="Individual"
                class="form-control mt-0"
            /></label>
            <label for="Family Therapy "
              >Family Therapy
              <input
                v-model="data.Family"
                value="No"
                type="radio"
                name="therapy"
                id="Family"
                class="form-control mt-0"
            /></label>

            <label for="CoupleTherapy"
              >Couple's Therapy
              <input
                v-model="data.Family"
                value="No"
                type="radio"
                name="therapy"
                id="Couple"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Emergency contact details  -->
        <div class="grid mt-6">
          <label
            for="Session"
            class="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            Emergency contact details
            <p class="flex flex-col text-sm font-normal mt-5">
              Please share details of someone we can reach out to in case of any
              emergency. It would be helpful to have details of someone who can
              reach you physically.<br />These details will only be used if
              there is a mental health emergency such as risk of suicide or
              serious harm to self or others. This individual will not be
              contacted unless there is a mental health emergency, and no
              confidential information would be shared with them.
            </p>
          </label>
          <div class="grid lg:grid-cols-2">
            <label
              for="PhoneNumber"
              class="form-label inline-block mb-2 text-gray-700 font-semibold"
            >
              Name of emergency contact
            </label>
            <input
              v-model="data.emergencyContactName"
              type="text"
              name="emergencyname"
              id="emergencyname"
              class="shrink w-72 form-control rounded mb-2 mx-4"
            />
          </div>

          <div class="grid lg:grid-cols-2">
            <label
              for="PhoneNumber"
              class="form-label inline-block mb-2 text-gray-700 font-semibold"
            >
              Phone number of emergency contact
            </label>
            <input
              v-model="data.emergencyContactNumber"
              type="text"
              name="emergencyphone"
              id="emergencyphone"
              class="shrink w-72 form-control rounded mb-2 mx-4"
            />
          </div>

          <div class="grid lg:grid-cols-2">
            <label
              for="PhoneNumber"
              class="form-label inline-block mb-2 text-gray-700 font-semibold"
            >
              Email ID of emergency contact
            </label>
            <input
              v-model="data.emergencyContactEmail"
              type="text"
              name="emergencyemail"
              id="emergencyemail"
              class="shrink w-72 form-control rounded mb-2 mx-4"
            />
          </div>
        </div>
        <!--How did you find out about us? -->
        <div class="grid lg:grid-cols-2 mt-6">
          <label
            for="About Us"
            class="form-label inline-block mb-2 text-gray-700 font-semibold mt-6"
            ><span class="text-secondary px-2 text-lg gap-2 font-semibold"
              >*</span
            >How did you find out about us?</label
          >
          <div class="grid gap-2 mx-4 mb-4 lg:mt-6">
            <label for="Social Media"
              >Social Media
              <input
                v-model="data.how"
                value="SocialMedia"
                type="radio"
                name="aboutus"
                id="smedia"
                class="form-control mt-0"
            /></label>
            <label for="Google"
              >Google
              <input
                v-model="data.how"
                value="Google"
                type="radio"
                name="aboutus"
                id="google"
                class="form-control mt-0"
            /></label>
            <label for="Word of Mouth"
              >Word of mouth(friends, family etc.)
              <input
                v-model="data.how"
                value="WordOfMouth"
                type="radio"
                name="aboutus"
                id="womouth"
                class="form-control mt-0"
            /></label>
            <label for="Word of Mouth"
              >Recommendation from someone who has availed our services
              <input
                v-model="data.how"
                value="Recommended"
                type="radio"
                name="aboutus"
                id="recom"
                class="form-control mt-0"
            /></label>
            <label for="Word of Mouth"
              >Referral from another counsellor/therapist
              <input
                v-model="data.how"
                value="Counsellor/Therapist"
                type="radio"
                name="aboutus"
                id="refer"
                class="form-control mt-0"
            /></label>
          </div>
        </div>

        <!--Conducting Sessions -->

        <div class="grid lg:grid-cols-2 mt-6">
          <label
            for="PhoneNumber"
            class="form-label inline-block mb-2 text-gray-700 font-semibold"
          >
            We will be conducting sessions from 11:00 am - 7:00 pm IST, from
            Monday to Saturday. Do you have a time preference? If yes, please
            mention the day and time.
          </label>
          <input
            v-model="data.prefferedDateTime"
            type="text"
            name="emergencyemail"
            id="emergencyemail"
            class="shrink w-72 form-control rounded mb-2 mx-4"
          />
        </div>
        <div class="grid mt-6">
          <h4 class="font-semibold text-primary underline uppercase mb-3">
            <a href="/policy">Informed Consent and Therapeutic Contract</a>
          </h4>
          <p>
            I have read the policies and regulations and the statements therein
            and have considered it carefully. I consent to the release of any
            information necessary to complete the billing process. I agree to
            pay the agreed fee per session. I understand my rights and
            responsibilities and my therapist's responsibilities and legal and
            ethical duties. I agree to undertake therapy with Mind N Beyond. I
            know I can end therapy at any time I wish and that I can refuse any
            requests or suggestions made by the therapist. I am over the age of
            eighteen.
          </p>
        </div>

        <button
          v-on:click="SubmitForm"
          class="bg-gray-600 rounded-full mt-6 w-36 h-12 text-white font-semibold uppercase mx-4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
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

<style>
</style>