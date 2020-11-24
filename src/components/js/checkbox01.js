export const code = `
<template>
  <div>
    <g-check-box v-model:checked="checked" @onClick="itemClick"
      >选项卡</g-check-box
    >
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import GCheckBox from "../../lib/GCheckBox.vue";
export default {
  setup() {
    const checked = ref(true);

    const itemClick = (checkded) => {
      console.log(checkded);
    };
    return { checked, itemClick };
  },
  components: { GCheckBox },
};
</script>
`;

export const content = `
    单个checkbox通过传入checked和onClick事件监听box变化
`;
