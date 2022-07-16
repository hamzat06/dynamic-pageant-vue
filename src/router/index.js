import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import { auth } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/auth",
      name: "auth",
      component: () => import("../views/AuthenticationView.vue"),
      children: [
        {
          path: "",
          redirect: "/auth/login",
        },
        {
          path: "login",
          name: "login",
          component: () => import("../components/auth/LoginComponent.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("../components/auth/RegisterComponent.vue"),
        },
        {
          path: "forgot-password",
          name: "forgotpassword",
          component: () =>
            import("../components/auth/ForgotpasswordComponent.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contestants",
      name: "contestants",
      component: () => import("../views/ContestantView.vue"),
      // meta: {
      //   authenticated: true,
      // },
    },
    {
      path: "/contestants/:id",
      name: "contestant",
      component: () => import("../views/ContestantSingle.vue"),
    },
    {
      path: "/judges",
      name: "judges",
      component: () => import("../views/JudgeView.vue"),
    },
    {
      path: "/teams",
      name: "teams",
      component: () => import("../views/TeamView.vue"),
    },
    {
      path: "/faqs",
      name: "faqs",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/DashboardView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

// router.beforeEach((to, from) => {
//   // instead of having to check every route record with
//   // to.matched.some(record => record.meta.requiresAuth)
//   if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     return {
//       path: "/auth/login",
//       // save the location we were at to come back later
//       query: { redirect: to.fullPath },
//     };
//   }
// });

export default router;
