<template>
  <g-button @click="dialogfn" theme="primary"> 调用方法出现dialog</g-button>
</template>

<script>
import GButton from '../lib/GButton.vue'
import {openGDialog} from '../lib/openGDialog'
export default {
  components:{GButton},
  setup(){
    const dialogfn = ()=>{
      openGDialog({
        type:"center" ,
        isGlobalClose:false,
        title:"代码打开的dialog",
        content:"打开dialog",
        visible:true,
        okfn:()=>{
          console.log(22)
          return false
        },
        cancel:()=>{
          console.log(33)
          return true
        }
      }) }
    return{
      dialogfn
    }
}
}
</script>

<style scoped>

</style>