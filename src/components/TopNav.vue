<template>
  <div class="topnav">
    <span class="micon" @click="toggleVisidle">三</span>
    <div class="logo"><h3><router-link to='/home'> vu3 轮子组件</router-link></h3></div>
    <div class="funcs">
      <span>菜单一</span>
      <span>菜单二</span>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asidecis = inject<Ref<boolean>>("asidevis");
    const toggleVisidle = () => {
      asidecis.value = !asidecis.value;
      console.log(asidecis);
    };
    return { toggleVisidle };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  background-color: aquamarine;
  height: 60px;
  width: 100%;  
  position: relative;
  .micon{
      position: absolute;
      top:20px;
      left: 20px;
      display: none;
  }
  > .logo {
    position: absolute;
    left: 30px;
    top: 0px;
  }
  > .funcs {
    height: 100%;
    position: absolute;
    right: 150px;
    top: 0px;
    display: flex;
    align-items: center;
  }
  @media (max-width:500px) {
      display: flex;
      justify-content: center;
      >.funcs{
          display: none;
      }
      .micon{
          display: inline-block;
      }
      .logo{
          position: static;
      }
  }
}
</style>
