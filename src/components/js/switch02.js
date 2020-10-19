export  const code = `<template>
<div>
    <g-switch v-model:value="value" />
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

    `