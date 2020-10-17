<template>
<div class="golu-tabs-nav" ref="nav">
    <div class="golu-tabs-item" v-for="(item, index) in title" :key="index" :class="{ selected: index === selectindex}" @click="selectindex = index" :ref="el => { if (el) divs[index] = el }">
        {{ item }}
    </div>
    <div class="golu-tabs-underline" ref="underline"></div>
</div>
<div>
    <component :is="currentslot" :key="currentslot.props.title" />
</div>
</template>

<script lang="ts">
import {
    onMounted,
    onUpdated,
    ref
} from "vue";
import GTab from "./Gtab.vue";
export default {
    components: {},
    setup(props, context) {
        const allcomponents = context.slots.default();
        const title = allcomponents.map((e) => e.props.title);
        const selectindex = ref(0);
        const nav = ref < HTMLDivElement > (null)
        const divs = ref < HTMLDivElement[] > ([])
        const current = ref < HTMLDivElement > (null)
        const underline = ref(null)
        const currentslot = allcomponents[selectindex.value]
        const underlineAnimate = () => {
            current.value = divs.value.filter(e => e.classList.contains("selected"))[0]
            underline.value.style.width = current.value.getBoundingClientRect().width + "px"
            underline.value.style.left = (current.value.getBoundingClientRect().left - nav.value.getBoundingClientRect().left) + "px"
        }
        if (allcomponents.some((e) => e.type !== GTab)) {
            throw new Error("子组件加载错误");
        }
        onMounted(() => {
            underlineAnimate()
        })
        onUpdated(() => {
            underlineAnimate()
        })
        return {
            title,
            selectindex,
            nav,
            divs,
            underline,
            underlineAnimate,
            current,
            currentslot
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

    >.golu-tabs-underline {
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
