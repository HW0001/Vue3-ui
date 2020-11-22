<template>
  <div class="golu-gcheckboxgroup">
    <g-check-box
      v-for="item in boxList"
      :key="item.value"
      isGroup
      :groupName="groupName"
      :value="item.value"
      :checked="itemChecked(item.value)"
      @itemClick="itemClick"
      >{{ item.text }}</g-check-box
    >
  </div>
</template>
<script lang="ts">
import { PropType, ref, computed, watchEffect } from "vue";
interface BoxValue {
  value: string;
  text: string;
}
import GCheckBox from "./GCheckBox.vue";
export default {
  components: {
    GCheckBox,
  },
  props: {
    boxList: {
      type: Array as PropType<BoxValue[]>,
      required: true,
    },
    groupName: String,
    selecteds: Array as PropType<string[]>,
  },
  setup(props, context) {
    const current = ref(props.selecteds);
    const itemChecked = (val: string) => {
      return current.value.indexOf(val) > -1;
    };
    const itemClick = (val: string) => {
      if (current.value.indexOf(val) > -1) {
        current.value = props.selecteds.filter((s) => s !== val);
      } else {
        current.value = [...props.selecteds, val];
      }
      context.emit("onChange", current.value);
    };
    watchEffect(() => {
      current.value = props.selecteds;
    });
    return { itemClick, itemChecked };
  },
};
</script>
<style lang="scss">
.golu-gcheckboxgroup {
  display: flex;
  flex-wrap: wrap;
  .golu-checkbox {
    padding-right: 1em;
  }
}
</style>
