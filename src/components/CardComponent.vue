<template>
  <div
    v-if="variant === 'full'"
    class="bg-lightprimary flex items-center h-96 hover:shadow-lg hover:shadow-secondary/50"
  >
    <div class="mx-auto p-5 text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="w-full"
        height="full"
        fill="currentColor"
        class="bi bi-question-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"
        />
      </svg>
    </div>
  </div>
  <div class="max-w-64 bg-lightprimary" v-else>
    <div class="card-image">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShq3eZU1DeWT1zqe5TfmNeRHaHsNuN3QQEmA&usqp=CAU"
        class="object-cover w-full"
      />
    </div>
    <div class="py-3 text-center">
      <h2 class="text-lg md:text-xl font-bold mb-1">Tolu Bakare</h2>
      <h3 class="text-lg md:text-2xl font-bold text-secondary">19</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    variant: String,
  },
};
</script>
