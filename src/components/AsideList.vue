<template>
<div class="asidecontent">
    <g-menu>
        <g-menu-group-item>
            <template v-slot:title> <span>使用</span> </template>
            <g-menu-item to="/doc/introduce">介绍</g-menu-item>
            <g-menu-item to="/doc/install">安装</g-menu-item>
            <g-menu-item to="/doc/startuse">使用</g-menu-item>
        </g-menu-group-item>
        <g-menu-group-item>
            <template v-slot:title> <span>组件</span></template>
            <g-menu-item to="/doc/switch">switch</g-menu-item>
            <g-menu-item to="/doc/button">button</g-menu-item>
            <g-menu-item to="/doc/dialog">dialog</g-menu-item>
            <g-menu-item to="/doc/tabs">tabs</g-menu-item>
            <g-menu-item to="/doc/menu">menu</g-menu-item>
        </g-menu-group-item>
    </g-menu>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from 'vue';
import GMenu from '../lib/GMenu.vue'
import GMenuGroupItem from '../lib/GMenuGroupItem.vue'
import GMenuItem from '../lib/GMenuItem.vue'
import router from '../router'
import component from '*.vue';
export default {
    setup() {
        const asidevisib = inject < Ref < boolean >> ("asidevis");
        const clientwidth = document.documentElement.clientWidth
        router.afterEach(() => {
            if (clientwidth <= 500) {
                asidevisib.value = false
            }

        })
    },
    components: {
        GMenu,
        GMenuGroupItem,
        GMenuItem
    }
}
</script>

<style lang="scss" scoped>
.asidecontent {
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    ol {
        padding-left: 10px;

        >li {
            margin-bottom: 15px;
        }
    }
}
</style>
