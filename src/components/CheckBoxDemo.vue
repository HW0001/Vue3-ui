<template>
  <div>
    <g-check-box v-model:checked="checked">单选按钮</g-check-box>
    <g-check-box-group :boxList="boxlist"></g-check-box-group>
  </div>
</template>
<script>
import { ref } from "vue";
import GCheckBox from "../lib/GCheckBox.vue";
import GCheckBoxGroup from "../lib/GCheckBoxGroup.vue";
export default {
  setup() {
    const checked = ref(true);
    const boxlist = ref([
      { text: "第一个", value: "1" },
      { text: "第二个", value: "2" },
      { text: "第三个", value: "3" },
    ]);
    return { checked, boxlist };
  },
  components: { GCheckBox, GCheckBoxGroup },
};
</script>
<style lang="scss"></style>
