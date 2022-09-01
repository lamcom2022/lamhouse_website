<template>
  <div>
    <div
      class="min-h-screen flex-col justify-center flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row">
      <!--Faetures Section (Start)-->
      <div class="hidden lg:block relative bg-gradient-to-br bg-primary-200 lg:w-3/4 lg:h-full">
        <div class="flex flex-col justify-center sm:px-6 lg:px-8 pt-1/4">
          <h2 class="mt-2 text-center text-2xl font-extrabold text-gray-900">{{ menuitems.featuregrid[0].h2 }}</h2>
        </div>
        <div class="relative lg:grid lg:gap-x-8 m-10">
          <dl class="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div class="relative" v-for="featuregrid in menuitems.featuregrid[0].children" :key="featuregrid.smaltitle">
              <dt>
                <div class="absolute flex items-center justify-center h-12 w-12">
                  <img :src="featuregrid.img" width="50" height="50" :alt="featuregrid.feature" />
                </div>
                <p class="ml-16 text-lg leading-6 font-semibold text-gray-900">{{ featuregrid.feature }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ featuregrid.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <!--Faetures Section (End)-->
      <div class="sm:mx-auto sm:w-full sm:max-w-md py-40">
        <a href="/#" class="font-medium text-primary-600 hover:text-primary-500">
          <img tag="img" to="/#" alt="Logo" class="mx-auto h-12 w-auto" :src="menuitems.branding.logo.source" />
        </a>
        <h2
          class="mt-6 text-center text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-800">
          Get started with {{ menuitems.title }}</h2>
        <p v-if="!forgotPassword && !formSignUp" class="mt-2 text-center text-sm text-gray-600 max-w">
          Don't have an account yet?
          <a @click="handleSignUpClick" href="#" class="font-medium text-primary-600 hover:text-primary-500"> Sign up
          </a>
        </p>
        <!-- <p v-if="forgotPassword" class="mt-2 text-center text-sm text-gray-600 max-w">
          Go back to
          <a @click="handleSignInClick" href="#" class="font-medium text-primary-600 hover:text-primary-500"> Sign in
          </a>
        </p> -->
        <p v-if="formSignUp" class="mt-2 text-center text-sm text-gray-600 max-w">
          Go back to
          <a @click="handleSignInClick" href="#" class="font-medium text-primary-600 hover:text-primary-500"> Sign in
          </a>
        </p>
        <div>
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="px-4 sm:rounded-lg sm:px-10">
              <form v-if="formSignIn" @submit.prevent="signIn">
                <input type="hidden" name="remember" value="true" />
                <div class="mt-10 flex items-center justify-center">
                  <div class="flex items-center">
                    <label class="ml-2 block text-sm leading-5 text-red-900">
                      {{ error }}
                    </label>
                  </div>
                </div>
                <div class="rounded-md shadow-sm">
                  <div>
                    <input v-model="email" aria-label="Email address" name="email" type="email" required
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 rounded-none sm:text-sm border-gray-300"
                      placeholder="Email address" />
                  </div>
                  <div class="-mt-px">
                    <input v-model="password" aria-label="Password" name="password" type="password" required
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 rounded-none sm:text-sm border-gray-300"
                      placeholder="Password" />
                  </div>
                </div>

                <div class="mt-6 flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="remember_me" type="checkbox"
                      class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300" />
                    <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                  </div>

                  <div class="text-sm leading-5">
                    <a @click="handleForgotPassword" href="#"
                      class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                      Forgot your password? </a>
                  </div>
                </div>

                <div class="mt-6">
                  <button @click="signIn()" id="btnSignIn" name="btnSignIn" type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-primary-700 transition duration-150 ease-in-out">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg class="h-5 w-5 text-white group-hover:text-white transition ease-in-out duration-150"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
              <!-- Signup (start)-->

              <form v-if="formSignUp" class="space-y-4" @submit.prevent="signIn">
                <div class="mt-10 flex items-center justify-center">
                  <div class="flex items-center">
                    <label class="ml-2 block text-sm leading-5 text-red-900">
                      {{ error }}
                    </label>
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="data.email" type="text" id="email" name="email" autocomplete="email"
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <label for="phone" class="block text-sm font-medium text-gray-700"> Phone </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="data.phone" type="text" id="phone" name="phone" autocomplete="phone"
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="data.password" type="password" id="password" name="password" autocomplete="password"
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <label for="confirm_password" class="block text-sm font-medium text-gray-700"> Confirm Password
                  </label>
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="data.confirm_password" type="password" id="confirm_password" name="confirm_password"
                      autocomplete="confirm_password"
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                  </div>
                </div>
                <div class="mt-6 flex items-center justify-between">
                  <div class="flex items-center">
                    <input id="terms" type="checkbox"
                      class="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300" />
                    <label for="terms" class="ml-2 block text-sm leading-5 text-gray-900">
                      I agree to
                      <a href="/legal/tc"
                        class="font-medium text-primary-600 hover:text-primary-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        terms & conditions. </a>
                    </label>
                  </div>
                </div>
                <div class="mt-6">
                  <button @click="signIn()" id="btnSignUp" name="btnSignUp" type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-primary-700 transition duration-150 ease-in-out">Sign
                    Up</button>
                </div>
                <div class="mt-6">
                  <button id="btnReset" name="btnReset" type="reset"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out">Reset</button>
                </div>
              </form>

              <!-- Signup (end)-->
              <!--Forgot Password (start)-->
              <form v-if="forgotPassword" @submit.prevent="signIn">
                <div class="mt-10 flex items-center justify-center">
                  <div class="flex items-center">
                    <label class="ml-2 block text-sm leading-5 text-red-900">
                      {{ error }}
                    </label>
                  </div>
                </div>
                <div class="sm:col-span-6">
                  <div class="mt-1 rounded-md shadow-sm">
                    <input v-model="email" placeholder="Email address" aria-label="Email address" type="text"
                      id="f_email" name="f_email" autocomplete="f_email"
                      class="flex-1 focus:ring-primary-500 focus:border-primary-500 block w-full min-w-0 sm:text-sm border-gray-300" />
                  </div>
                </div>
                <div class="mt-6">
                  <button @click="signIn()" id="btnForgotPassword" name="btnForgotPassword" type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium text-white bg-primary-400 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-primary-700 transition duration-150 ease-in-out">Reset</button>
                </div>
              </form>
              <!--Forgot Passowrd (end)-->
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import menuitems from "@/store/siteconfig.json";
export default {
  components: {

  },
  data() {
    return {
      users: {},
      email: 'jessy.s@cleveron.com',
      password: 'password',
      error: null,
      menuitems,
      forgotPassword: false,
      formSignUp: false,
      formSignIn: true,
      data: {},
    };
  },
  methods: {
    // Method to authenticate user
    signIn() {
      try {
        //this.$router.push('/account');
      } catch (error) {
        console.log(error);
      }
    },
    handleForgotPassword() {
      this.formSignIn = false;
      this.formSignUp = false;
      this.forgotPassword = !this.forgotPassword;
    },
    handleSignUpClick() {
      this.forgotPassword = false;
      this.formSignIn = false;
      this.formSignUp = !this.formSignUp;
    },
    handleSignInClick() {
      this.forgotPassword = false;
      this.formSignIn = !this.formSignIn;
      this.formSignUp = false;
    },
  },
};
</script>
