<template>
  <div class="golu-menu-group">
    <div class="golu-menu-group-title" @click="shrink = !shrink">
      <slot name="title" />
    </div>
    <span class="golu-menu-shrink" :class="{ angle: !shrink }"></span>
  </div>
  <ol class="golu-menu-group-ol" :class="{ golumenuhide: shrink }">
    <slot />
  </ol>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const shrink = ref(false);
    return {
      shrink,
    };
  },
};
</script>

<style lang="scss">
.golu-menu-group {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;

  .golu-menu-group-title {
    display: inline-block;
    vertical-align: middle;
    margin-right: 30px;
    cursor: pointer;
  }

  .golu-menu-shrink::before,
  .golu-menu-shrink::after {
    content: "";
    display: inline-block;
    height: 1px;
    width: 5px;
    vertical-align: middle;
    background-color: #000;
    transition: all 250ms;
  }

  .golu-menu-shrink::after {
    transform-origin: 0 100%;
    transform: rotate(-45deg);
  }

  .golu-menu-shrink::before {
    transform-origin: 100% 100%;
    transform: rotate(45deg);
  }

  .angle::after {
    transform: rotate(45deg);
  }

  .angle::before {
    transform: rotate(-45deg);
  }
}

.golu-menu-group-ol {
  display: inline-block;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 100%;
  transition: all 1s ease-out;

  &.golumenuhide {
    height: 0;
    max-height: 0;
    overflow: hidden;
  }
}
</style>
