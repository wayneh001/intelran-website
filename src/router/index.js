import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/pages/dashboard.vue"),
    children: [
      {
        path: "/smarthome/smarthome",
        name: "smartHome",
        component: () => import("@/pages/smartHome/smartHome.vue"),
      },
      {
        path: "/smarthome/technique",
        name: "technique",
        component: () => import("@/pages/smartHome/technique.vue"),
      },
      {
        path: "/solutions/hub",
        name: "hub",
        component: () => import("@/pages/solutions/technique.vue"),
      },
      {
        path: "/solutions/light",
        name: "light",
        component: () => import("@/pages/solutions/light.vue"),
      },
      {
        path: "/solutions/blinds",
        name: "blinds",
        component: () => import("@/pages/solutions/blinds.vue"),
      },
      {
        path: "/solutions/environment",
        name: "environment",
        component: () => import("@/pages/solutions/environment.vue"),
      },
      {
        path: "/solutions/connection",
        name: "connection",
        component: () => import("@/pages/solutions/connection.vue"),
      },
      {
        path: "/solutions/safety",
        name: "safety",
        component: () => import("@/pages/solutions/safety.vue"),
      },
      {
        path: "/about/about",
        name: "about",
        component: () => import("@/pages/about/about.vue"),
      },
      {
        path: "/about/service",
        name: "service",
        component: () => import("@/pages/about/service.vue"),
      },
      {
        path: "/about/cooperation",
        name: "cooperation",
        component: () => import("@/pages/about/cooperation.vue"),
      },
      {
        path: "/user/account",
        name: "account",
        component: () => import("@/pages/user/account.vue"),
      },
      {
        path: "/user/cart",
        name: "cart",
        component: () => import("@/pages/user/cart.vue"),
      },
      {
        path: "/user/order",
        name: "order",
        component: () => import("@/pages/user/order.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
