<template>
<div class="topnav"> 
        <div class="topnav">
        <h3 @click="toggleVisidle">vu3 轮子组件</h3>
        </div>
</div>
</template>

<script lang="ts">
import { inject,Ref } from 'vue'
export default {
    setup(){
       const asidecis =  inject<Ref<boolean>>("asidevis")
       const toggleVisidle = ()=>{
           asidecis.value=!asidecis.value
           console.log(asidecis)
       }
       return {toggleVisidle}
    }
}
</script>
<style lang="scss" scoped>
.topnav{
    height: 60px;
    display: flex;
    h3{
        display: inline-block; 
    } 
}
</style>