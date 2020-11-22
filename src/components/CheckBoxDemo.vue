<template>
  <div>
    <g-check-box v-model:checked="checked">发啊啊</g-check-box>
  </div>
</template>
<script>
import { ref } from "vue";
import GCheckBox from "../lib/GCheckBox.vue";
export default {
  setup() {
    const checked = ref(true);
    return { checked };
  },
  components: { GCheckBox },
};
</script>
<style lang="scss"></style>
