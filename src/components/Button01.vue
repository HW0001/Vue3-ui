<template>
  <div>
    <g-button>默认</g-button>
    <g-button theme="primary">主按钮</g-button>
    <g-button theme="dashed">次按钮</g-button>
    <g-button theme="danger">危险按钮</g-button>
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