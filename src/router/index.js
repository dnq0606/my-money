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
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/logout-view.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: {
      leading: true,
      text: "Hi, Duy!",
      isShowFooter: true,
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
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/profile-view.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      leading: false,
      text: "Report",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../views/report-view.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      leading: false,
      text: "Budget",
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../views/budget-view.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      leading: false,
      text: "NewTransaction",
      isShowFooter: false,
    },
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
