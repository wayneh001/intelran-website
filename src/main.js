import { createApp } from "vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/css/products.css";
import "@/assets/css/theme.css";
import { Form, Field, ErrorMessage, defineRule } from "vee-validate";
import AllRules from "@vee-validate/rules";
// import { localize, setLocale } from "@vee-validate/i18n";
// import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
// import firebase from "firebase";
import App from "./App.vue";

// var firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
// };

// firebase.initializeApp(firebaseConfig);

const app = createApp(App).use(store).use(router);

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// configure({
//   generateMessage: localize({ zh_TW: zhTW }),
//   validateOnInput: true,
// });
// setLocale("zh_TW");

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount("#app");
