import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@/assets/css/products.css";
import "@/assets/css/theme.css";
import App from "./App.vue";

const app = createApp(App).use(store).use(router);

app.mount("#app");
