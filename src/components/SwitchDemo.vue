<template>
    <div>
       <Switch v-model:value="val"/>
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
        const val=ref(false)
        return{
            val
        }
    }
}
</script>