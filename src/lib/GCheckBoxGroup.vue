<template>
  <div class="golu-gcheck-box-group">
    <g-check-box v-for="item in boxList" :key="item.value" isGroup>{{
      item.text
    }}</g-check-box>
  </div>
</template>
<script lang="ts">
import { PropType, ref } from "vue";
import GCheckBox from "./GCheckBox.vue";
export default {
  components: {
    GCheckBox,
  },
  props: {
    boxList: Array,
  },
  setup(props, context) {
    return {};
  },
};
</script>
<style lang="scss">
.golu-gcheck-box-group {
  display: flex;
}
</style>
