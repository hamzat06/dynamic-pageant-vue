<template>
  <div class="bg-gray-100">
    <!-- End of Navbar -->

    <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div
              id="indicators-carousel"
              class="relative h-auto w-full"
              data-carousel="static"
            >
              <!-- Carousel wrapper -->
              <div class="relative h-56 overflow-hidden">
                <!-- Item 1 -->
                <div
                  class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                  data-carousel-item="active"
                >
                  <img
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <!-- Item 2 -->
                <div
                  class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                  data-carousel-item=""
                >
                  <img
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <!-- Item 3 -->
                <div
                  class="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
                  data-carousel-item=""
                >
                  <img
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <!-- Slider indicators -->
              <div
                class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"
              >
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
              <!-- Slider controls -->
              <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev=""
              >
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span class="hidden">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next=""
              >
                <span
                  class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                >
                  <svg
                    class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span class="hidden">Next</span>
                </span>
              </button>
            </div>

            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
              Jane Doe
            </h1>
            <h3 class="text-gray-600 font-lg font-semibold leading-6">
              Model and Hair Stylist.
            </h3>
            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              necessitatibus nulla assumenda odit asperiores adipisci sunt ab
              nam.
            </p>
            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm"
            >
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"
                  ><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    >Active</span
                  ></span
                >
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
          <div class="my-4"></div>
          <!-- Friends card -->
          <div class="bg-white p-3 hover:shadow">
            <div
              class="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"
            >
              <span class="text-green-500">
                <svg
                  class="h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span>Other Contestants</span>
            </div>
            <div class="grid grid-cols-3">
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                  alt=""
                />
                <a href="#" class="text-primarylight-color">Kojstantin</a>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
                <a href="#" class="text-primarylight-color">Natie</a>
              </div>
              <div class="text-center my-2">
                <img
                  class="h-16 w-16 rounded-full mx-auto"
                  src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                  alt=""
                />
                <a href="#" class="text-primarylight-color">Casey</a>
              </div>
            </div>
          </div>
          <!-- End of friends card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div
              class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
            >
              <span clas="text-green-500">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">Jane</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">Doe</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">Female</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+11 998001001</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Permanant Address</div>
                  <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com"
                      >jane@example.com</a
                    >
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Birthday</div>
                  <div class="px-4 py-2">Feb 06, 1998</div>
                </div>
              </div>
            </div>
            <button
              class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4"
            >
              Show Full Information
            </button>
          </div>
          <!-- End of about section -->

          <div class="my-4"></div>

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="grid grid-cols-2">
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Experience</span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                </ul>
              </div>
              <div>
                <div
                  class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"
                >
                  <span clas="text-green-500">
                    <svg
                      class="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span class="tracking-wide">Education</span>
                </div>
                <ul class="list-inside space-y-2">
                  <li>
                    <div class="text-teal-600">Masters Degree in Oxford</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                  <li>
                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End of Experience and education grid -->
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MentorView",
};
</script>
