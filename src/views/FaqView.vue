<template>
  <div class="container max-w-7xl p-5 mx-auto text-white">
    <h1 class="text-center mx-auto text-4xl text-secondary font-bold mb-10">
      Frequently Asked Questions
    </h1>
    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 focus:bg-lightprimary hover:bg-lightprimary"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <span class="flex items-center"
            ><svg
              class="mr-2 w-5 h-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            What is dynamic pageant?</span
          >
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        class=""
        aria-labelledby="accordion-open-heading-1"
      >
        <div class="p-5 border border-b-0 border-gray-200">
          <p class="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quia nobis at quaerat sint quidem, eveniet omnis illo, ea dolores
            deserunt odit accusantium quas quis, quae accusamus temporibus
            officiis dolor.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quia nobis at quaerat sint quidem, eveniet omnis illo, ea dolores
            deserunt odit accusantium quas quis, quae accusamus temporibus
            officiis dolor.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          class="flex justify-between items-center p-5 w-full font-medium text-left border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 focus:bg-lightprimary hover:bg-lightprimary"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="false"
          aria-controls="accordion-open-body-2"
        >
          <span class="flex items-center"
            ><svg
              class="mr-2 w-5 h-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path></svg
            >Another One available</span
          >
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        class="hidden"
        aria-labelledby="accordion-open-heading-2"
      >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quia nobis at quaerat sint quidem, eveniet omnis illo, ea dolores
            deserunt odit accusantium quas quis, quae accusamus temporibus
            officiis dolor.
          </p>
          <p class="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quia nobis at quaerat sint quidem, eveniet omnis illo, ea dolores
            deserunt odit accusantium quas quis, quae accusamus temporibus
            officiis dolor.
          </p>
        </div>
      </div>
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          class="flex justify-between items-center p-5 w-full font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 focus:bg-lightprimary hover:bg-lightprimary"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="false"
          aria-controls="accordion-open-body-3"
        >
          <span class="flex items-center"
            ><svg
              class="mr-2 w-5 h-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Another test faq</span
          >
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        class="hidden"
        aria-labelledby="accordion-open-heading-3"
      >
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
          <p class="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quia nobis at quaerat sint quidem, eveniet omnis illo, ea dolores
            deserunt odit accusantium quas quis, quae accusamus temporibus
            officiis dolor.
          </p>
          <p class="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            quia nobis at quaerat sint quidem, eveniet omnis illo, ea dolores
            deserunt odit accusantium quas quis, quae accusamus temporibus
            officiis dolor.
          </p>
          <p class="mb-2">Learn more about these technologies:</p>
          <ul class="pl-5 list-disc">
            <li>
              <a
                href="https://flowbite.com/pro/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >Flowbite Pro</a
              >
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                class="text-blue-600 dark:text-blue-500 hover:underline"
                >Tailwind UI</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqView",
};
</script>
