<template>
  <div class="w-full bg-primary grow text-white">
    <div class="container max-w-7xl mx-auto">
      <h1
        class="text-3xl md:text-4xl font-bold mb-10 md:mb-20 text-center text-secondary"
      >
        Contestants
      </h1>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10"
      >
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
export default {
  name: "ContestantView",
  components: { CardComponent },
};
</script>
