<template>
  <div class="golu-tabs-nav" ref="nav">
    <div
      class="golu-tabs-item"
      v-for="(item, index) in title"
      :key="index"
      :class="{ selected: index === selectindex }"
      @click="selectindex = index"
      :ref="
        (el) => {
          if (index === selectindex) currentdiv = el;
        }
      "
    >
      {{ item }}
    </div>
    <div class="golu-tabs-underline" ref="underline"></div>
  </div>
  <component :is="currentslot" :key="currentslot.props.title"></component>
  <div></div>
</template>

<script lang="ts">
import {
  onMounted,
  onUpdated,
  ref,
  RendererElement,
  RendererNode,
  watchEffect,
} from "vue";
import GTab from "./Gtab.vue";
export default {
  components: {},
  setup(props, context) {
    const allcomponents = context.slots.default();
    if (allcomponents.some((e) => e.type !== GTab)) {
      throw new Error("子组件加载错误");
    }
    const title = allcomponents.map((e) => e.props.title);
    const selectindex = ref(0);
    const nav = ref<HTMLDivElement>(null);
    const currentdiv = ref<HTMLDivElement>(null);
    const currentslot = ref<RendererNode>(null);
    const underline = ref(null);

    const x = () => {
      underline.value.style.width =
        currentdiv.value.getBoundingClientRect().width + "px";
      underline.value.style.left =
        currentdiv.value.getBoundingClientRect().left -
        nav.value.getBoundingClientRect().left +
        "px";
    };
    watchEffect(() => {
      currentslot.value = allcomponents[selectindex.value];
    });
    onMounted(() => {
      x();
    });
    onUpdated(() => {
      x();
    });
    return {
      title,
      selectindex,
      nav,
      underline,
      currentdiv,
      currentslot,
    };
  },
};
</script>

<style lang="scss">
.golu-tabs-nav {
  border-bottom: 1px solid #ebedf0;
  height: 45px;
  position: relative;

  .golu-tabs-item {
    display: inline-block;
    padding: 10px;
    border: 1px solid transparent;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    cursor: pointer;
    text-align: center;

    &.selected {
      color: #1890ff;
      font-weight: 500;
      font-weight: 600;
    }
  }

  > .golu-tabs-underline {
    position: absolute;
    left: 0;
    top: 45px;
    height: 2px;
    width: 50px;
    display: inline-block;
    background-color: #000;
    transition: all 250ms;
  }
}
</style>
