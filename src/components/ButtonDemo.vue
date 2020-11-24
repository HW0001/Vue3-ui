<template>
  <div>
    <demo
      title="主题"
      :content="content1"
      :component="Button01"
      :code="code1"
    ></demo>
    <demo
      title="类别"
      :content="content2"
      :component="Button02"
      :code="code2"
    ></demo>
    <demo
      title="尺寸"
      :content="content3"
      :component="Button03"
      :code="code3"
    ></demo>
  </div>
</template>
<script lang="ts">
import Button01 from "./button/Button01.vue";
import Button02 from "./button/Button02.vue";
import Button03 from "./button/Button03.vue";
import Demo from "./Demo.vue";
import { code as code1, content as content1 } from "./js/button01";
import { code as code2, content as content2 } from "./js/button02";
import { code as code3, content as content3 } from "./js/button03";
export default {
  components: {
    Demo,
  },
  setup(props) {
    return {
      Button01,
      Button02,
      Button03,
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
