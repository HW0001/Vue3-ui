<template>
<div class="topnav">
    <span class="micon" @click="toggleVisidle" v-if="visibleMenu">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caidan"></use>
        </svg></span>
    <div class="logo">
        <router-link to='/home'>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gulu"></use>
            </svg>
            <span>轮子组件</span>
        </router-link>
    </div>
    <div class="funcs">
        <span>菜单一</span>
        <span>菜单二</span>
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    inject,
    Ref
} from "vue";
import router from '../router';
import component from '*.vue';
export default {
    setup(props, context) {
        const asidecis = inject < Ref < boolean >> ("asidevis");
        const toggleVisidle = () => {
            asidecis.value = !asidecis.value;
        };
        const visibleMenu = computed(() => router.currentRoute.value.matched.some(e => e.path === "/doc"))
        return {
            toggleVisidle,
            visibleMenu
        };
    },
};
</script>

<style lang="scss" scoped>
.topnav {
    height: 60px;
    width: 100%;
    position: relative;

    .micon {
        position: absolute;
        top: 20px;
        left: 20px;
        display: none;
        background-color: rgba(197, 175, 165, .3);

        >svg {
            width: 30px;
        }
    }

    >.logo {
        position: absolute;
        left: 30px;
        top: 10px;

        a {
            svg {
                width: 32px;
                height: 32px;
                vertical-align: middle;
            }

            span {
                vertical-align: middle;
                color: #273849;
                font-weight: 500;
                font-size: 20px;
                margin-left: 5px;
            }
        }

    }

    >.funcs {
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

        >.funcs {
            display: none;
        }

        .micon {
            display: inline-block;
        }

        .logo {
            position: static;
        }
    }
}
</style>
