<template>
  <transition name="slide-fade">
    <div
      class="list-item  editingClass editing "
      :class="{ checked: item.checked }"
      v-show="!item.isDelete"
    >
      <label class="checkbox">
        <input
          type="checkbox"
          v-model="item.checked"
          name="checked"
          @change="onChange"
          :disabled="locked"
        />
        <span class="checkbox-custom"></span>
      </label>
      <input
        type="text"
        v-model="item.text"
        placeholder="写点什么。。。"
        :disabled="item.checked || locked"
        @keyup.enter="onChange"
      />
      <a
        class="delete-item"
        v-if="item.checked && !locked"
        @click="
          item.isDelete = true;
          onChange();
        "
      >
        <span class="icon-trash"></span>
      </a>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Item extends Vue {
  @Prop({ default: {} }) item!: any;
  @Prop(Number) index!: number;
  @Prop(Boolean) locked!: boolean;
  @Prop(String) id!: string;

  @Action("editRecord") editRecord: any;

  @Emit("onChange")
  reGetTodo() {
    return {
      id: this.id
    };
  }

  onChange() {
    this.editRecord({
      id: this.id,
      record: this.item,
      index: this.index
    }).then((res: any) => {
      // $emit
      this.reGetTodo();
    });
  }
}
</script>
