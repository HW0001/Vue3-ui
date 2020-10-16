<template>
  <div>我是tabs sss
  <component :is="gtb"></component>  
  </div>
</template>
<script lang="ts">
import GTab from "./Gtab.vue";
export default {
  components: {
    GTab,
  },
  setup(){
      const gtb = GTab
      return {gtb}
  }
};
</script>
