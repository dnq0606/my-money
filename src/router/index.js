import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/configs/firebase";

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  if (!user) next({ name: "Login", parames: {} });
  else next();
};

const routes = [
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/register-view.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/login-view.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      text: "Hi, Duy!",
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index-view.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      leading: false,
      text: "Profile",
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile-view.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout-view.vue"),
  },
  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report-view.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget-view.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    component: () =>
      import(
        /* webpackChunkName: "new-transaction" */ "../views/new-transaction-view.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
