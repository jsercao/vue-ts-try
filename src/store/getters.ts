import { GetterTree, Getter } from "vuex";

import { State as HomeState } from "./home/interface";
import { State as TodoState } from "./todo/interface";

export interface State {
  home: HomeState;
  todo: TodoState;
}

// const home: Getter<State, any> = (state: State) => {
//     return state.home
// }

const getterTree: GetterTree<State, any> = {
  home: (state: State) => state.home,
  todo: (state: State) => state.todo
};

export default getterTree;
