<template> 
<router-view></router-view>
</template>

<script>
import { provide,ref } from 'vue'
export default {
    name: 'App',
    components: {
    },
    setup(){
        const vasidevisible = ref(false)
        provide("asidevis",vasidevisible)
    }
}
</script>
<style lang="scss" scoped>
  
</style>