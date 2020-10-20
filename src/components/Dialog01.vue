<template>
  <g-button  @click="toggle" theme="primary">显示dislog</g-button>
  <g-dialog :okfn="okfn" :cancel="cancel" v-model:visible="visible" type="top" isGlobalClose >
    <template v-slot:title>
      <div> 标题
      </div>
    </template>
    <template v-slot:content>
      <p> 内容
      </p>
    </template>
  </g-dialog>
</template>

<script>
import { ref } from 'vue'
import GButton from '../lib/GButton.vue'
import GDialog from '../lib/GDialog.vue'
export default {
  components:{GDialog,GButton},
  setup(){
    const okfn = ()=>{
      return false
    }
    const cancel = ()=>{
      return true
    }
    const visible =ref(false)
    const toggle = ()=>{
      visible.value=!visible.value
    }
    return{
      okfn,cancel,visible,toggle
    }
  }
}
</script>

<style scoped>

</style>