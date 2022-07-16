<template>
  <nav
    class="bg-primary w-full text-white"
    :class="{
      'fixed top-0 left-0 bg-transparent': $route.name === 'home',
    }"
  >
    <div class="container max-w-7xl mx-auto flex justify-between items-center py-2">
      <router-link to="/">
        <img
          alt=""
          src="@/assets/logo.png"
          class="w-32 h-32 md:w-48 md:h-48"
          :class="{ 'w-32 h-32': $route.name === 'dashboard' }"
        />
      </router-link>

      <div class="hidden lg:block">
        <ul class="flex space-x-10 text-lg font-semibold">
          <li>
            <router-link to="/" :class="{ 'text-secondary': $route.name == 'home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/contestants"
              :class="{ 'text-secondary': $route.name == 'contestants' }"
              >Contestants</router-link
            >
          </li>
          <li>
            <a
              class="cursor-pointer flex items-center"
              @click="dropToggled = !dropToggled"
              ><span>Mentors</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                /></svg
            ></a>
            <ul
              class="absolute py-2 space-y-2 bg-lightprimary w-32 md:-ml-5 text-center rounded-lg"
              v-if="dropToggled"
            >
              <li>
                <router-link
                  to="judges"
                  class="hover:bg-white hover:text-primary px-1 py-2 rounded-lg block"
                  @click="dropToggled = false"
                  >Judges</router-link
                >
              </li>
              <li>
                <router-link
                  to="/teams"
                  class="hover:bg-white hover:text-primary px-1 py-2 rounded-lg block"
                  @click="dropToggled = false"
                  >Teams</router-link
                >
              </li>
            </ul>
          </li>
          <li v-if="authIsReady && isLoggedIn">
            <router-link
              to="/dashboard"
              :class="{ 'text-secondary': $route.name == 'dashboard' }"
              >Dashboard</router-link
            >
          </li>
          <li>
            <router-link to="/faqs" :class="{ 'text-secondary': $route.name == 'faqs' }"
              >FAQs</router-link
            >
          </li>
          <li>
            <router-link to="/about" :class="{ 'text-secondary': $route.name == 'about' }"
              >About</router-link
            >
          </li>
          <li v-if="isLoggedIn">
            <a
              class="btn border-red-700 bg-red-700 text-white font-semibold hover:bg-red-800"
              @click="logout()"
              >{{ this.$store.state.currentContestant.email && "Log Out" }}</a
            >
          </li>
          <li v-else>
            <router-link
              to="/auth"
              class="btn border-secondary bg-secondary text-primary font-semibold hover:bg-yellow-500"
              @click="$router.push('/auth')"
              >Sign In</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "NavbarComponent",
  data: () => ({
    dropToggled: false,
  }),
  computed: {
    authIsReady() {
      return this.$store.getters.getAuthIsReady;
    },
    isLoggedIn() {
      return this.$store.getters.getLoggedInState;
    },
  },
  methods: {
    async logout() {
      this.$store.dispatch("startLoader");
      signOut(auth)
        .then(() => {
          this.$store.dispatch("clearCurrentUser");
          this.$router.push("/");
          this.$store.dispatch("dataAlert", "Successfully logged out");
          this.$store.dispatch("setAlertType", "success");
        })
        .catch((error) => {
          this.$store.dispatch("dataAlert", error);
          this.$store.dispatch("setAlertType", "error");
        })
        .finally(() => this.$store.dispatch("stopLoader"));
    },
  },
};
</script>
