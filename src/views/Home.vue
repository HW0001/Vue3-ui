<template>
    <div>
        <top-nav />
        <div class="content">
        <img src="../assets/logo.png" /> 

        </div>
    </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue'
export default {
    components:{
        TopNav
    },
    setup(){
        
    }
}
</script>
<style lang="scss" scoped>
img{
    width: 215px;
    float: right;
    margin-right: 60px;
}

</style>