<template>
  <g-tabs>
    <g-tab title="导航ssssss一"> 我是demo1 </g-tab>
    <g-tab title="导航二"> 我是demo2 </g-tab>
  </g-tabs>
</template>

<script>
import GTabs from "../../lib/GTabs.vue";
import GTab from "../../lib/Gtab.vue";
export default {
  components: {
    GTabs,
    GTab,
    Dame01: {
      template: `<div>我是demo1</div>`,
    },
    Dame02: {
      template: `<div>我是demo2</div>`,
    },
  },
};
</script>

<style scoped></style>
