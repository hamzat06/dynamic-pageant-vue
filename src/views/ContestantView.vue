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
        <CardComponent
          v-for="el in contestants"
          :key="el.id"
          :evicted="el.evicted"
          @click="toggleModal(el)"
        />
      </div>
    </div>
  </div>

  <!-- Main modal -->
  <div
    v-if="modal"
    id="defaultModal"
    tabindex="-1"
    aria-hidden="true"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen h-screen flex md:inset-0 h-modal md:h-full justify-center items-center backdrop-blur-sm bg-secondary/30"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            Profile
          </h3>
          <button
            @click="modal = false"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6 flex gap-x-10">
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShq3eZU1DeWT1zqe5TfmNeRHaHsNuN3QQEmA&usqp=CAU"
          />
          <div class="grow">
            <h3 class="text-2xl font-bold text-secondary">Tolu Bakare</h3>
            <h5 class="text-lg font-semibold">19</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
export default {
  name: "ContestantView",
  components: { CardComponent },
  data: () => ({
    modal: false,
    contestants: [
      {
        id: 1,
        evicted: false,
      },
      {
        id: 2,
        evicted: false,
      },
      {
        id: 3,
        evicted: true,
      },
      {
        id: 4,
        evicted: true,
      },
      {
        id: 5,
        evicted: false,
      },
      {
        id: 6,
        evicted: true,
      },
    ],
  }),
  methods: {
    toggleModal(payload) {
      if (!payload.evicted) {
        this.modal = true;
      }
    },
  },
};
</script>
