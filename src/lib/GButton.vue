<template>
  <button class="golu-button" :class="[btheme]">
    <span class="golu-loading" v-if="loading" />
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  props: {
    theme: {
      type: String,
      default: "defaut",
    },
    loading: Boolean,
  },
  setup(props) {
    const btheme = `gbutton-${props.theme}`;
    return {
      btheme,
    };
  },
};
</script>
<style lang="scss">
.golu-button {
  height: 32px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.65);
  background-color: white;
  border-radius: 6px;
  line-height: 30px;
  cursor: pointer;
  &.gbutton-defaut {
    &[link] {
      border: none;
      background: transparent;
    }
    &.gbutton-defaut:hover {
      border-color: rgb(64, 169, 255);
      color: rgb(64, 169, 255);
    }
  }
  &.gbutton-primary {
    background-color: rgb(24, 144, 255);
    color: #fff;
    &:hover {
      background-color: rgb(64, 169, 255);
    }
    &[link] {
      border: none;
      background: transparent;
      color: rgb(24, 144, 255);
    }
  }
  &.gbutton-dashed {
    border: 1px dashed #d9d9d9;
    &[link] {
      border: none;
      background: transparent;
      color: rgba(0, 0, 0, 0.65);
    }
    &:hover {
      border-color: rgb(64, 169, 255);
      color: rgb(64, 169, 255);
    }
  }
  &.gbutton-danger {
    background-color: rgb(255, 77, 79);
    color: #fff; 
    &:hover {
      background-color: rgb(255, 120, 117);
    }
    &[link] {
      border: none;
      background: transparent;
      color: rgb(255, 77, 79);
    }
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: rgb(190, 200, 200);
    color: #fff;
    &:hover {
      border-color: gray;
      color: gray;
    }
  }

  .golu-loading {
    width: 14px;
    height: 14px;
    border: 1px solid black;
    border-color: black black black transparent;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    animation: golu-loadinganimate 1s infinite linear;
  }
  &[size="big"] {
    height: 44px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 20px;
    line-height: 40px;
    .golu-loading {
      width: 20px;
      height: 20px;
    }
  }
  &[size="small"] {
    height: 24px;
    padding-left: 6px;
    padding-right: 6px;
    font-size: 10px;
    line-height: 22px;
    .golu-loading {
      width: 10px;
      height: 10px;
    }
  }
}
@keyframes golu-loadinganimate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
