<template>
<div>
    <top-nav />
    <div class="content">
        <img src="../assets/logo.png" />
        <p>一些很厉害的轮子组件</p>
        <div> <a>github</a>
            <router-link to='/doc'>开始</router-link>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
    components: {
        TopNav,
    },
    setup() {},
};
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    ;

    img {
        width: 200px;
    }

    a {
        display: inline-block;
        border: 1px solid #42b983;
        text-align: center;
        margin-right: 20px;
        border-radius: 15px;
        color: #42b983;
        padding: 10px 30px;
    }
}
</style>
