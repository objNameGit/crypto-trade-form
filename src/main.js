import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { dotReplace } from "@filters/dotReplace.js";

Vue.config.productionTip = false;

Vue.filter("dotReplace", dotReplace);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
