<template>
<div>
    <demo title="禁用点击" :component="Switch01"></demo>
    <hr />
    <demo title="默认" :component="Switch02"></demo>
</div>
</template>

<script>
import {ref} from 'vue'
import GSwitch from '../lib/GSwitch.vue'
import Demo from './Demo.vue'
import Switch01 from './Switch01.vue'
import Switch02 from './Switch02.vue'
export default {
    components: {
        GSwitch,Demo
    },
    setup(props) {
        const value = ref(false)
        const bool = ref(false)
        return {
            bool,
             value,
          Switch01,Switch02
        }
    }
}
</script>
