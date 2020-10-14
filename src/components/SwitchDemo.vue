<template>
    <div>
        <p> 添加disable属性 则可以禁用switch的点击事件</p>
       <g-switch v-model:value="disabledbool" disabled/>
        <p>disable为false或不添加disabled，则可以点击</p>
       <g-switch v-model:value="bool" />
    </div>
</template>
<script lang=ts>
import { ref } from 'vue'
import GSwitch from '../lib/GSwitch.vue'
export default {
    components:{
        GSwitch
    },
    setup(props) {
        const disabledbool=ref(false)
        const bool=ref(false)
        return{
            bool,
            disabledbool
        }
    }
}
</script>