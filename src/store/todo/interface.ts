export interface LineItem {
  text: string;
  isDelete: boolean;
  checked: boolean;
}

export interface Line {
  id: number;
  title: string;
  isDelete: boolean;
  locked: boolean;
  record?: Array<LineItem>;
}

export interface State {
  menuOpen: boolean;
  todoList: Array<Line>;
}
