import { Commit, Dispatch } from "vuex";
export interface ActionContextBasic {
  commit: Commit;
  dispatch: Dispatch;
}
