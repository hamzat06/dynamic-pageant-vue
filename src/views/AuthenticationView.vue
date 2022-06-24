<template>
  <div class="py-6 bg-primary">
    <div
      class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div
        class="hidden lg:block lg:w-1/2 bg-cover"
        style="
          background-image: url('https://image.shutterstock.com/image-photo/taurus-zodiac-signs-white-bull-600w-1886733439.jpg');
        "
      ></div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthenticationView",
};
</script>
