<template>
  <div>
    <h1>{{ msg }}</h1>
    <p><router-link to="/about">About</router-link></p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class HelloWorld extends Vue {
  @Prop()
  private msg!: string;
}
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
