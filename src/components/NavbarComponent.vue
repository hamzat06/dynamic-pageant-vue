<template>
  <nav
    class="bg-primary w-full"
    :class="{ 'fixed top-0 left-0': $route.name === 'home' }"
  >
    <div
      class="container max-w-7xl mx-auto flex justify-between items-center py-2 text-secondary"
    >
      <router-link to="/">
        <img alt="" src="@/assets/logo.png" class="w-48 h-48" />
      </router-link>

      <div>
        <ul class="flex space-x-10 text-lg font-semibold">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/">Contestants</router-link>
          </li>
          <li>
            <a>Mentors</a>
            <!-- <ul>
              <li><a>Judges</a></li>
              <li><a>Teams</a></li>
            </ul> -->
          </li>
          <li>
            <router-link to="/">FAQs</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link
              to="/auth"
              class="btn border-secondary bg-secondary text-primary font-semibold hover:bg-yellow-500"
              >Sign In</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>
