import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import todo from "./todo";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  modules: {
    home,
    todo
  }
});
