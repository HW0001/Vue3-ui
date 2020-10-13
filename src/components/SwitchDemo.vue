<template>
    <div>
        <p> 添加disable属性 则可以禁用switch的点击事件</p>
       <Switch v-model:value="disablebool" disable/>
        <p>disable为false或不添加disable，则可以点击</p>
       <Switch v-model:value="bool" />
    </div>
</template>
<script lang=ts>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
    components:{
        Switch
    },
    setup(props) {
        const disablebool=ref(false)
        const bool=ref(false)
        return{
            bool,
            disablebool
        }
    }
}
</script>