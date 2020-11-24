<template>
  <div>
    <g-check-box v-model:checked="checked" @onClick="itemClick"
      >全选</g-check-box
    >
    <div class="space"></div>
    <g-check-box-group
      :boxList="boxlist"
      groupName="box"
      :selecteds="selecteds"
      :disableds="disableds"
      @onChange="onChange"
    ></g-check-box-group>
    {{ selecteds.join(",") }}
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import GCheckBox from "../../lib/GCheckBox.vue";
import GCheckBoxGroup from "../../lib/GCheckBoxGroup.vue";
export default {
  setup() {
    const checked = ref(true);
    const boxlist = ref([
      { text: "第一个", value: "1" },
      { text: "第二个", value: "2" },
      { text: "第三个", value: "3" },
    ]);
    const selecteds = ref(["1"]);
    const disableds = ref(["1"]);
    const onChange = (val: string[]) => {
      selecteds.value = val;
    };
    const itemClick = (checkded) => {
      selecteds.value = checkded ? boxlist.value.map((b) => b.value) : [];
    };
    return { checked, boxlist, selecteds, onChange, disableds, itemClick };
  },
  components: { GCheckBox, GCheckBoxGroup },
};
</script>
<style lang="scss">
.space {
  height: 1em;
}
</style>
