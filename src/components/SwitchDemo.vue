<template>
<div>
    <demo title="禁用点击" :content="content1" :component="Switch01" :code="code1"></demo>

    <demo title="默认" :content="content2" :component="Switch02" :code="code2"></demo>
</div>
</template>

<script>
import {ref} from 'vue'
import GSwitch from '../lib/GSwitch.vue'
import Demo from './Demo.vue'
import Switch01 from './Switch01.vue'
import Switch02 from './Switch02.vue'
import {code as code1,content as content1} from './js/switch01'
import {code as code2,content as content2} from './js/switch02'
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
          Switch01,Switch02,code1,code2,content1,content2
        }
    }
}


</script>
