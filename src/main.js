import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import { createWebHistory } from "vue-router";
import store from "./store";

import App from "./App.vue";
import createRouter from "./router.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

const app = createApp(App);
const router = createRouter(createWebHistory());

app.use(BootstrapVue3);
app.use(store);
app.use(router);
app.mount("#app");