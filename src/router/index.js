import { createRouter, createWebHashHistory } from "vue-router";
import { useTitle } from "@vueuse/core";
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/layout",
    name: "layout",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/views/Layout.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  useTitle(`${process.env.VUE_APP_TITLE_PREFIX} | ${to.meta?.title ?? ""}`);
  next();
});

export default router;
