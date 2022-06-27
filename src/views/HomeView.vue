<template>
  <div
    class="w-full h-screen bg-no-repeat bg-cover"
    style="
      background-image: url('https://image.shutterstock.com/image-photo/face-art-woman-black-yellow-600w-1958076946.jpg');
    "
  >
    <div class="h-full w-full bg-primary/10 flex items-center">
      <div class="container max-w-7xl mx-auto p-5">
        <div class="max-w-md md:max-w-lg">
          <h2
            class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-0 text-white mt-32 leading-loose"
            style="text-shadow: 2px 2px 30px #f6c542"
          >
            Submit Your Audition Video Now
          </h2>
          <div class="flex space-x-0 items-center mt-6">
            <!-- <img
              src="@/assets/logo.png"
              class="h-24 lg:h-48 drop-shadow-[0_35px_35px_rgba(246,197,66,0.25)]"
            /> -->
            <router-link
              to="/auth/register"
              class="cursor-pointer py-3 px-6 lg:px-10 lg:py-5 text-lg md:text-xl rounded-lg font-bold bg-secondary hover:bg-yellow-400 shadow text-primary"
              >Register</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
