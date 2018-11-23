<template>
  <div class="list-todos">
    <a
      @click="goList(item.id);"
      class="list-todo list activeListClass"
      :class="{ active: item.id === todoId }"
      v-for="(item, index) in todoList"
      :key="index"
    >
      <span class="icon-lock" v-if="item.locked"></span>
      <span class="count-list" v-if="item.count > 0">{{ item.count }}</span>
      {{ item.title }}
    </a>
    <a class=" link-list-new" @click="addTodoList">
      <span class="icon-plus"> </span> 新增
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({
  components: {}
})
export default class Menu extends Vue {
  items: Array<any> = []; // 菜单数据
  todoId: string = ""; // 默认选中id,
  todoNum: number = 0; // 新增一个状态来判断代办事项的数据

  @Getter("todo")
  todo: any;
  @Action("addTodo") addTodo: any;

  get todoList() {
    const number = this.todo.todoList.length;
    if (this.todo.todoList.length < this.todoNum) {
      this.goList(this.todo.todoList[0].id);
    }
    this.todoNum = number;
    return this.todo.todoList;
  }

  created() {
    this.$store.dispatch("getAllTodos").then(() => {
      this.$nextTick(() => {
        this.goList(this.todoList[0].id);
      });
    });
  }
  // method
  goList(id: string) {
    this.todoId = id;
  }

  addTodoList() {
    // 点击新增按钮时候
    this.addTodo({}).then((data: any) => {
      this.$store.dispatch("getAllTodos").then(() => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.goList(this.todoList[this.todoList.length - 1].id);
          }, 100);
        });
      });
    });
  }

  @Watch("todoId")
  onChanged(id: string) {
    this.$router.push({ name: "todo", params: { id: id } });
  }
}
</script>
