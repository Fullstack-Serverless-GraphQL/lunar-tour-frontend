import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import StarRating from "vue-star-rating";
import "ant-design-vue/dist/antd.css";

import { createProvider } from "./vue-apollo";
Vue.config.productionTip = false;

Vue.component("star-rating", StarRating);
new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
