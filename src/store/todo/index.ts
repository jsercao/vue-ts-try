import api from "@/api/todo";
import { State } from "./interface";
import { ActionContextBasic } from "../interface";
import * as types from "../mutation-types";

const state = {
  todoList: [],
  menuOpen: false // 移动端的时候菜单是否开启
};

// const getters = {
//     todoList: (state: State) => state.todoList,
// }

const mutations = {
  [types.GET_TODOLIST](state: State, payload: any) {
    state.todoList = payload.data;
  },
  [types.UPDATE_MENUU](state: State) {
    state.menuOpen = !state.menuOpen;
  }
};

const actions = {
  updateMenu(context: ActionContextBasic) {
    context.commit(types.UPDATE_MENUU);
  },
  getAllTodos(context: ActionContextBasic) {
    return api.getTodos().then(res => {
      context.commit(types.GET_TODOLIST, res.data);
      return res.data;
    });
  },
  getTodo(context: ActionContextBasic, params: any) {
    return api.getTodo(params).then(res => {
      return res.data;
    });
  },
  editTodo(context: ActionContextBasic, params: any) {
    return api.editTodo(params).then(res => {
      return res.data;
    });
  },
  addTodo(context: ActionContextBasic, params: any) {
    return api.addTodo(params).then(res => {
      return res.data;
    });
  },
  editRecord(context: ActionContextBasic, params: any) {
    return api.editRecord(params).then(res => {
      return res.data;
    });
  },
  addRecord(context: ActionContextBasic, params: any) {
    return api.addRecord(params).then(res => {
      return res.data;
    });
  }
};

export default {
  state,
  //getters,
  mutations,
  actions
};
