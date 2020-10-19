export  const code = `<template>
<div>
  <g-button theme="primary" size='big'>大按钮</g-button>
  <g-button theme="primary">默认按钮</g-button>
  <g-button theme="primary" size='small'>小按钮</g-button>
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
</style>`

export  const content = `
   通过设置按钮 size 来控制按钮大小
`