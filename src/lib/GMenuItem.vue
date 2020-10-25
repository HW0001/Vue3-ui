<template>
<li class="golu-menu-item-li" :class="{selected:true}">
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
        return {
            to
        }
    }
}
</script>

<style lang="scss">
.golu-menu-item-li {
    font-size: 14px;
    font-weight: 400;
    width: 100%;

    .router-link-active {
        background-color: rgb(230, 247, 255);
        border-right: 2px solid rgb(24, 144, 255);

        a {
            color: rgb(71, 168, 255);
        }
    }

    a {
        cursor: pointer;
        padding: 10px;
        display: block;
    }
}
</style>
