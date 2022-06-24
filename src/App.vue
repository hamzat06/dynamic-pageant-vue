<template>
  <div class="flex flex-col justify-between">
    <NavbarComponent />
    <div class="grow">
      <router-view />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: { NavbarComponent, FooterComponent },
};
</script>
