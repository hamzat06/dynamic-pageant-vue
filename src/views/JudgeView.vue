<template>
  <div class="container max-w-7xl mx-auto text-white">
    <h1 class="text-4xl text-secondary font-bold text-center mb-10 md:mb-20">
      Judges
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:gap-10"
    >
      <CardComponent variant="full" />
      <CardComponent variant="full" />
      <CardComponent variant="full" />
      <CardComponent variant="full" />
      <CardComponent variant="full" />
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
export default {
  name: "JudgeView",
  components: { CardComponent },
};
</script>
