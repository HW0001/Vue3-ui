export  const code = `<template>
<div>
    <g-switch v-model:value="value" disabled />
</div>
</template>

<script>
import {ref} from 'vue'
import GSwitch from '../lib/GSwitch.vue'
export default {
    components: {
        GSwitch
    },
    setup(props) {
        const value = ref(false)
        const bool = ref(false)
        return {
            bool,
            value
        }
    }
}
</script>`

export  const content = `
    在引用时增加 disable 或 :disable='true' 属性 即控制该按钮不能点击
`