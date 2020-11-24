export const code = `
<template>
  <div>
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
import GCheckBoxGroup from "../../lib/GCheckBoxGroup.vue";
export default {
  setup() {
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

    return { boxlist, selecteds, onChange, disableds };
  },
  components: { GCheckBoxGroup },
};
</script>
`;

export const content = `
    通过GCheckBoxGroup组件来创建和控制box
`;
