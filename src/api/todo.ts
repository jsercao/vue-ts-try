import request from "@/utils/api";
export default {
  getTodos(params?: any) {
    return request.get("/todo/list", { params });
  },
  getTodo(params?: any) {
    return request.get("/todo/listId", { params });
  },
  addTodo(data?: any) {
    return request.post("/todo/addTodo", data);
  },
  editTodo(data?: any) {
    return request.post("/todo/editTodo", data);
  },
  editRecord(data?: any) {
    return request.post("/todo/editRecord", data);
  },
  addRecord(data?: any) {
    return request.post("/todo/addRecord", data);
  }
};
