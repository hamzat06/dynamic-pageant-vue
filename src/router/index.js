import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
  ],
});

export default router;
