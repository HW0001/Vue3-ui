<template>
  <div>
    <demo
      title="单个checkbox"
      :content="content1"
      :component="CheckBox01"
      :code="code1"
    ></demo>
    <demo
      title="多个checkbox"
      :content="content2"
      :component="CheckBox02"
      :code="code2"
    ></demo>
    <demo
      title="组合使用"
      :content="content3"
      :component="CheckBox03"
      :code="code3"
    ></demo>
  </div>
</template>
<script lang="ts">
import CheckBox01 from "./checkbox/CheckBox1.vue";
import CheckBox02 from "./checkbox/CheckBox2.vue";
import CheckBox03 from "./checkbox/CheckBox3.vue";
import Demo from "./Demo.vue";
import { code as code1, content as content1 } from "./js/checkbox01";
import { code as code2, content as content2 } from "./js/checkbox02";
import { code as code3, content as content3 } from "./js/checkbox03";
export default {
  components: {
    Demo,
  },
  setup(props) {
    return {
      CheckBox01,
      CheckBox02,
      CheckBox03,
      code1,
      code2,
      code3,
      content1,
      content2,
      content3,
    };
  },
};
</script>
<style lang="scss" scoped>
.golu-button {
  margin-left: 20px;
}
</style>
