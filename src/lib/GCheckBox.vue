<template>
  <label
    class="golu-checkbox"
    :class="{ selected: checked, disabled: disabled }"
  >
    <input type="checkbox" @click="toggle" :name="groupName" :value="value" />
    <span><slot></slot></span>
  </label>
</template>
<script lang="ts">
import { ref, watchEffect } from "vue";

export default {
  props: {
    disabled: Boolean,
    checked: Boolean,
    isGroup: Boolean,
    groupName: String,
    value: String,
  },
  setup(props, context) {
    const toggle = () => {
      if (!props.disabled) {
        if (!props.isGroup) {
          context.emit("update:checked", !props.checked);
          context.emit("onClick", !props.checked);
        } else if (props.isGroup) {
          context.emit("itemClick", props.value);
        }
      }
    };
    return {
      toggle,
    };
  },
};
</script>
<style lang="scss">
.golu-checkbox {
  position: relative;
  cursor: pointer;
  &::before {
    display: inline-block;
    content: "";
    vertical-align: middle;
    width: 1.1em;
    height: 1.1em;
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
  &.selected::before {
    background-color: rgb(64, 158, 255);
    border: none;
    transition: all 500ms;
  }
  &:hover:before {
    border-color: rgb(64, 158, 255);
  }
  &::after {
    content: "";
    height: 0.5em;
    width: 0.9em;
    display: inline-block;
    background-color: transparent;
    border: 2px solid white;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
    position: absolute;
    left: 0.1em;
    top: 0.4em;
  }
  > input {
    vertical-align: middle;
    width: 0;
    height: 0;
  }
  > span {
    vertical-align: middle;
    font-size: 1em;
  }
  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &.disabled:hover::before {
    border-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
