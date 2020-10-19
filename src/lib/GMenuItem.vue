<template>
<li class="golu-menu-item-li" :class="{selected}">
    <router-link :to="to">
        <slot />
    </router-link>
</li>
</template>

<script lang="ts">
import router from '../router'
export default {
    setup(props, context) {
        const to = context.attrs.to
        const selected = router.currentRoute.value.matched.some(e => e.path.substring(1) === to)
        return {
            to,
            selected
        }
    }
}
</script>

<style lang="scss">
.golu-menu-item-li {
    padding: 10px 20px 10px 10px;
    font-size: 14px;
    font-weight: 400;
    width: 100%;

    &.selected {
        background-color: rgb(230, 247, 255);
        border-right: 2px solid rgb(24, 144, 255);

        a {
            color: rgb(71, 168, 255);
        }
    }

    a {
        cursor: pointer;
    }
}
</style>
