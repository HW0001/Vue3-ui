<template>
<teleport to="body">
<div class="golu-diaglog-mask"></div>
    <div class="golu-dialog">
        <header class="golu-header">我是标题</header>
        <main class="golu-main">我是内容</main>
        <footer class="golu-footer">
        <g-button theme='primary'>ok</g-button>
        <g-button>cancel</g-button>
        </footer>
    </div>
    </teleport>
</template>
<script lang="ts">
import GButton from './GButton.vue'
export default {
    components:{
        GButton
    }
}
</script>
<style lang="scss">
    .golu-diaglog-mask{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 10;
        background-color: rgba(0,0,0,.45);
    }
    .golu-dialog{
        position:fixed;
        left: 50%;
        top:25%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        z-index: 11;
        min-width: 350px;
        border-radius: 4px;;
        .golu-header{
            padding:15px;
        }
        .golu-main{
            padding:10px 25px;
        }
        .golu-footer{
            padding: 10px;
        }
    }
</style>