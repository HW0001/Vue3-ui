<template>
  <button :class="{ checked: value }"><span @click="toogle"></span></button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
    disable:Boolean
  },
  setup(props, context) { 
    const toogle = () => {
        if(!props.disable)
      context.emit("update:value", !props.value);
    };
    return {
      toogle,
    };
  },
};
</script>
<style lang="scss" scoped>
$h1: 22px;
$h2: $h1 - 4px;
button {
  height: $h1;
  width: $h1 * 2;
  border-radius: $h1/2;
  background-color: rgb(191,191,191);
  border: none;
  position: relative;
  span {
    display: inline-block;
    height: $h2;
    width: $h2;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    background-color: #fff;
    cursor: pointer;
    transition: all .5s;
  }
  &.checked {
    background-color: rgb(24,144,255);
    span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  } 
 &:active{
     span{
         width: $h2 + 4px;  
     }
 }
  &.checked:active{
      span{
          width: $h2 + 4px;  
          margin-left: -4px;
      }
  }
}
</style>
