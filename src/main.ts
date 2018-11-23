import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import Mock from "./mock";
import "./styles/all.scss";
Mock.start();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
