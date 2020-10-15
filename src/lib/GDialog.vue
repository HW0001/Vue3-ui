<template>
  <teleport to="body">
    <div @click="maskclick" class="golu-diaglog-mask" v-if="visible"></div>
    <div class="golu-dialog" v-if="visible" :class="type">
      <header class="golu-dialog-header">
        <slot name="title">Title</slot>
        <span @click="close" class="golu-dialog-close"></span>
      </header>
      <main class="golu-dialog-main">
        <slot name="content">我是内容</slot>
      </main>
      <footer class="golu-dialog-footer">
        <g-button @click="ok" class="golu-dialog-button" theme="primary">确认</g-button>
        <g-button @click="cancel">取消</g-button>
      </footer>
    </div>
  </teleport>
</template>
<script lang="ts">
import { ref } from "vue";
import GButton from "./GButton.vue";
export default {
  props: {
    visible: {
        type:Boolean,
        default:false
    },
    okfn: Function,
    cancel: Function,
    type:{
        type:String,
        default:"top"
    },
    isGlobalClose:{
        type:Boolean,
        default:true
    }
  },
  setup(props, context) {
      console.log(props.type)
    const close = () => {
      context.emit("update:visible", false);
    };
    const ok = () => {
      props.okfn?.() && close();
      //   props.okfn?.() && close()
    };
    const cancel = () => {
      props.cancel?.() && close();
    };
    const maskclick=()=>{
        props.isGlobalClose && close()
    }
    return {
      close,
      ok,
      cancel,
      maskclick
    };
  },
  components: {
    GButton,
  },
};
</script>
<style lang="scss">
.golu-diaglog-mask {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.45);
}
.golu-dialog {
  position: fixed;
  left: 50%;  
  background-color: #fff;
  z-index: 11;
  min-width: 350px;
  border-radius: 4px;
  &.top{
    top: 25%;
    transform: translate(-50%);
  }
  &.center{
    top: 50%;
    transform: translate(-50%,-50%);
  }
  &.bottom{
    top:75%; 
    transform: translate(-50%, -100%);
  }
  .golu-dialog-header {
    padding: 15px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    position: relative;
    .golu-dialog-close {
      display: inline-block;
      text-align: center;
      top: 15px;
      right: 20px;
      position: absolute;
    }
    .golu-dialog-close::before {
      content: "\2716";
      cursor: pointer;
    }
  }
  .golu-dialog-main {
    padding: 10px 24px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    font-variant: tabular-nums;
  }
  .golu-dialog-footer {
    padding: 10px 20px;
    float: right;
    .golu-dialog-button {
      margin-right: 20px;
    }
  }
}
</style>