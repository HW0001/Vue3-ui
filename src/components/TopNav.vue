<template>
<div class="topnav">
    <span class="micon" @click="toggleVisidle" v-if="VisiblleIcon">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-caidan"></use>
        </svg></span>
    <div class="logo">
        <router-link to='/home'>
            <span>MyUi</span>
        </router-link>
    </div>
    <div class="funcs">
        <span link theme="primary" v-if="!VisiblleIcon">
            <router-link to="/doc/switch">文档</router-link>
        </span>
    </div>
</div>
</template>

<script lang="ts">
import {
    computed,
    inject,
    Ref
} from "vue";
import component from '*.vue';
export default {
    props: {
        VisiblleIcon: Boolean,

    },
    setup(props, context) {
        const asidecis = inject < Ref < boolean >> ("asidevis");
        const toggleVisidle = () => {
            asidecis.value = !asidecis.value;
        };
        return {
            toggleVisidle
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
        display: inline-flex;
        align-items: center;

        a {
            span {
                vertical-align: middle;
                color: #273849;
                font-weight: 400;
                font-size: 18px;
                margin-left: 5px;
            }
        }
    }

    >.funcs {
        height: 100%;
        position: absolute;
        right: 150px;
        top: 0px;
        display: inline-flex;
        align-items: center;

        a {
            font-size: 18px;
            font-weight: 600;
        }
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
