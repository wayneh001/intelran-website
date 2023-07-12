import {createRouter, createWebHashHistory} from "vue-router";

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
                path: "smarthome",
                name: "smartHome",
                component: () => import("@/pages/smartHome/smartHome.vue"),
            },
            {
                path: "technique",
                name: "technique",
                component: () => import("@/pages/smartHome/technique.vue"),
            },
            {
                path: "hub",
                name: "hub",
                component: () => import("@/pages/solutions/hub.vue"),
            },
            {
                path: "light",
                name: "light",
                component: () => import("@/pages/solutions/light.vue"),
            },
            {
                path: "blinds",
                name: "blinds",
                component: () => import("@/pages/solutions/blinds.vue"),
            },
            {
                path: "environment",
                name: "environment",
                component: () => import("@/pages/solutions/environment.vue"),
            },
            {
                path: "connection",
                name: "connection",
                component: () => import("@/pages/solutions/connection.vue"),
            },
            {
                path: "safety",
                name: "safety",
                component: () => import("@/pages/solutions/safety.vue"),
            },
            {
                path: "about",
                name: "about",
                component: () => import("@/pages/about/about.vue"),
            },
            {
                path: "service",
                name: "service",
                component: () => import("@/pages/about/service.vue"),
            },
            {
                path: "cooperation",
                name: "cooperation",
                component: () => import("@/pages/about/cooperation.vue"),
            },
            {
                path: "account",
                name: "account",
                component: () => import("@/pages/user/account.vue"),
            },
            {
                path: "cart",
                name: "cart",
                component: () => import("@/pages/user/cart.vue"),
            },
            {
                path: "order",
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
