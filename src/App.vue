<template>
  <div class="flex flex-col justify-between min-h-screen bg-primary">
    <NavbarComponent />
    <ModalComponent
      v-if="!modalStatus"
      @acceptAgeModal="acceptAgeModal"
      @declineAgeModal="declineAgeModal"
    />
    <LoaderComponent v-if="getLoadingState" />
    <AlertComponent :type="getMsgType" :msg="getAlertMsg" v-if="getAlertMsg" />
    <div class="grow w-full">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import AlertComponent from "./components/AlertComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";

export default {
  name: "App",
  data: () => ({
    modalStatus: null,
  }),
  components: {
    LoaderComponent,
    AlertComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
  },
  computed: {
    getLoadingState() {
      return this.$store.getters.getLoadingState;
    },
    getAlertMsg() {
      return this.$store.getters.getAlertMsg;
    },
    getMsgType() {
      return this.$store.getters.getMsgType;
    },
  },
  created() {
    this.ageModal();
    console.log(localStorage.getItem("ageModalStatus"));
  },
  methods: {
    ageModal() {
      let getAgeModalStatus = localStorage.getItem("ageModalStatus");
      if (getAgeModalStatus === "accepted") {
        this.modalStatus = "accepted";
      } else {
        this.modalStatus = null;
        localStorage.setItem("ageModalStatus", null);
      }
    },
    acceptAgeModal() {
      localStorage.setItem("ageModalStatus", "accepted");
      this.modalStatus = "accepted";
      this.$store.dispatch("dataAlert", "Thank You");
      this.$store.dispatch("setAlertType", "success");
    },
    declineAgeModal() {
      this.$store.dispatch(
        "dataAlert",
        "Terms and Conditions must be accepted"
      );
      this.$store.dispatch("setAlertType", "error");
      this.modalStatus = null;
    },
    // openAgeModal() {
    // }
  },
};
</script>
