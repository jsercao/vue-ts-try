import request from "@/utils/api";
import { State } from "./interface";
import { Commit } from "vuex";

interface GetTodayWeatherParam {
  city: string;
}

const state: State = {
  count: 0,
  message: "cvf"
};

// const getters = {
//   count: (state: State) => state.count,
//   message: (state: State) => state.message
// }

const mutations = {};

const actions = {};

export default {
  state,
  //getters,
  mutations,
  actions
};
