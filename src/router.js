import Vue from "vue";
import VueRouter from "vue-router";


//Account Pages
// import Login from "./pages/Account/Login";
// import Register from "./pages/Account/Register";

import Home from "./pages/Home/Home";
import List from "./pages/Order/List";
import Add from "./pages/Add/Add";


Vue.use(VueRouter);

export const routes = [
    { path: "/", component: Home, meta: { requiresAuth: false } },
    { path: "/list", component: List, meta: { requiresAuth: false } },
    { path: "/add", component: Add, meta: { requiresAuth: false } },
    { path: "*", redirect: "/" },
];


export const router = new VueRouter({
    mode: "history",
    routes,
});
