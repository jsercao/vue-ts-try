<template>
  <section class="container" :class="{ 'menu-open': menuOpen }">
    <section class="menu"><menus></menus></section>
    <div class="content-overlay" @click="$store.dispatch('updateMenu');"></div>
    <div class="content-container"><router-view></router-view></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import menus from "./Menu.vue";

@Component({
  components: {
    // 此处引用组件
    menus
  }
})
export default class Layout extends Vue {
  // 计算属性赋值
  get menuOpen() {
    return this.$store.state.todo.menuOpen;
  }
}
</script>
