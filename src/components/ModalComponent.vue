<template>
  <!-- Extra Large Modal -->
  <div
    id="extralarge-modal"
    tabindex="-1"
    class="overflow-y-auto overflow-x-hidden flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-full max-w-7xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Extra Large modal
          </h3>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer
            privacy laws for its citizens, companies around the world are updating their
            terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
            effect on May 25 and is meant to ensure a common set of data rights in the
            European Union. It requires organizations to notify users as soon as possible
            of high-risk data breaches that could personally affect them.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer
            privacy laws for its citizens, companies around the world are updating their
            terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
            effect on May 25 and is meant to ensure a common set of data rights in the
            European Union. It requires organizations to notify users as soon as possible
            of high-risk data breaches that could personally affect them.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer
            privacy laws for its citizens, companies around the world are updating their
            terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into
            effect on May 25 and is meant to ensure a common set of data rights in the
            European Union. It requires organizations to notify users as soon as possible
            of high-risk data breaches that could personally affect them.
          </p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
        >
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="this.$emit('acceptAgeModal')"
          >
            I accept
          </button>
          <button
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            @click="this.$emit('declineAgeModal')"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  data: () => ({
    status: localStorage.getItem("ageModalStatus"),
  }),
};
</script>
