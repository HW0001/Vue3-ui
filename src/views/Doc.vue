<template>
<div class="doc">
    <top-nav :isVisiblleIcon="true" />
    <div class="content">
        <aside class="asidediv" v-if="asidevisib">
            <aside-list></aside-list>
        </aside>
        <main class="maindiv">
            内容区域
            <router-view />
        </main>
    </div>
</div>
</template>

<script lang="ts">
import {
    inject,
    Ref
} from "vue";
import TopNav from "../components/TopNav.vue";
import AsideList from "../components/AsideList.vue";
export default {
    setup() {
        const asidevisib = inject < Ref < boolean >> ("asidevis");
        return {
            asidevisib,
        };
    },
    components: {
        TopNav,
        AsideList,
    },
};
</script>

<style lang="scss" scoped>
.doc {
    height: calc(100vh - 60px);

    .content {
        display: flex;
        height: 100%;

        .asidediv {
            width: 150px;
        }

        .maindiv {
            padding-left: 50px;
            min-width: 50%;
        }
    }
}
</style>
