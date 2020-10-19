<template>
<div>
  <g-button link>Link</g-button>
  <g-button link theme="primary" >Link</g-button>
  <g-button link theme="danger">Link</g-button>
  <g-button disabled>禁用</g-button>
  <g-button theme="primary" loading>加载中</g-button>
</div>
</template>
<script lang="ts">
import GButton from '../lib/GButton.vue'
export default {
  components: {
    GButton
  }
}
</script>

<style lang="scss" scoped>
.golu-button{
  margin-right: 20px;
}
</style>