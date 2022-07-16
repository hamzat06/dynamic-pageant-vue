<template>
  <div class="w-full bg-white">
    <div
      class="flex flex-col md:flex-row container max-w-6xl mx-auto py-10 md:gap-x-10 px-5"
    >
      <div>
        <SidebarComponent />
      </div>
      <div class="grow">
        <div class="mb-10 md:mb-5 flex flex-col md:flex-row justify-between">
          <span
            class="text-red-700 bg-secondary text-xl font-bold p-2 mb-3 md:mb-0"
            >Complete your profile and upload your audition video</span
          >
          <router-link
            to="/contestants/1"
            class="text-lg p-2 w-fit border-b-2 border-gray-500 hover:border-2 hover:border-t-0 font-bold"
            >Proceed to profile</router-link
          >
        </div>
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-gray-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-gray-900"
            >
              <svg
                class="w-3 h-3 text-gray-600 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Stage 2
              <span
                class="bg-secondary text-gray-800 font-bold text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3"
                >Ongoing</span
              >
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >January 13th, 2023</time
            >
            <p
              class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consectetur maiores totam, omnis, neque blanditiis, sed nobis
              quidem sunt laboriosam dolorum repellat ut suscipit modi molestias
              placeat. Vero fugit labore a?
            </p>
            <a
              href="#"
              class="flex w-fit items-center space-x-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <span> Watch </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Stage 1
              <span
                class="bg-blue-100 text-blue-800 font-bold text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-blue-800 ml-3"
                >Passed</span
              >
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >December 7th, 2022</time
            >
            <p
              class="text-base font-normal text-gray-500 dark:text-gray-400 mb-4"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              deleniti deleniti veniam repudiandae, perspiciatis, vitae quaerat
              atque natus nostrum nesciunt culpa corporis? Reiciendis adipisci
              error doloribus, maxime rem nihil dolorem ea?
            </p>
            <a
              href="#"
              class="flex w-fit items-centar space-x-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <span> Watch </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
          </li>
          <li class="mb-10 ml-6">
            <span
              class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"
            >
              <svg
                class="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3
              class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
            >
              Audition Stage
              <span
                class="bg-blue-100 text-blue-800 font-bold text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-blue-800 ml-3"
                >Passed</span
              >
            </h3>
            <time
              class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
              >December 2nd, 2022</time
            >
            <p
              class="text-base mb-4 font-normal text-gray-500 dark:text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              porro quas corporis, quae aperiam consequuntur doloremque amet
              doloribus ullam necessitatibus saepe voluptate iure nostrum
              incidunt, sequi laudantium quisquam nihil nemo!
            </p>
            <a
              href="#"
              class="flex w-fit items-center space-x-1 py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <span> Watch </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComponent from "../components/SidebarComponent.vue";
export default {
  name: "DashboardView",
  components: { SidebarComponent },
};
</script>
