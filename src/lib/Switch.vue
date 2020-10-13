<template>
    <div><span @click="toogle" :class="{checked:checked}"></span></div>
</template>
<script lang="ts"> 
import { ref } from 'vue'
export default {
    setup(){
        const checked =ref(false);
        const toogle=()=>{
            checked.value=!checked.value
        }
        return {
            checked,
            toogle
        }
    }
}
</script>
<style lang="scss" scoped>
    $h1 : 22px;
    $h2 : $h1 - 4px;
    div{
        height: $h1;
        width: $h1 * 2; 
        border-radius: $h1/2;
        background-color:rgba(0,0,0,.25);
        position: relative;
        span{
            display: inline-block;
            height: $h2;
            width: $h2; 
            border-radius: 50%;;
            position: absolute;
            top:2px;
            left: 2px;
            background-color: #fff;
            cursor: pointer; 
            transition:left 250ms;
        }
        span.checked{ 
            left: calc(100% - #{$h2} - 2px)
        } 
    }
</style>