<template>
    <div>
        <p>butto主题</p>
        <g-button>默认</g-button>
        <g-button @click="onClick" theme="primary">主按钮</g-button>
        <g-button theme="dashed">次按钮</g-button>
        <g-button theme="danger">危险按钮</g-button>
        <p>butto类别</p>
        <g-button link>Link</g-button>
        <g-button link theme="primary" >Link</g-button>
        <g-button link theme="danger">Link</g-button>
        <g-button link theme="dashed">Link</g-button>
        <g-button @click="onClick" disabled>禁用</g-button>
        <g-button theme="primary" loading>加载中</g-button>
        <p>butto尺寸</p>
        <g-button @click="onClick" theme="primary" size='big'>大按钮</g-button>
        <g-button @click="onClick" theme="primary">默认按钮</g-button>
        <g-button @click="onClick" theme="primary" size='small'>小按钮</g-button>
    </div>
</template>
<script lang=ts>
import GButton from '../lib/GButton.vue'
export default {
    components:{
        GButton
    },
    setup(props) {
        const onClick=()=>{
            console.log(1)
        } 
        return{
            onClick
        }
    }
}
</script>
<style lang="scss" scoped>
.golu-button{
    margin-left: 20px;
}

</style>