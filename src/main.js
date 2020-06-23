import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { Rate } from "ant-design-vue";
import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;

Vue.use(Rate);
new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
