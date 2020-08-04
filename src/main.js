import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Tabs, Rate } from "ant-design-vue";
import { createProvider } from "./vue-apollo";

import "./assets/tailwind.css";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;
Vue.use(Tabs);
Vue.use(Rate);

new Vue({
  router,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
