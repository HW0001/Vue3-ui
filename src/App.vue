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
        const clictwidth=document.documentElement.clientWidth
        console.log(clictwidth)
        const vasidevisible = ref(clictwidth<=500?false:true)
        provide("asidevis",vasidevisible)
    }
}
</script>
<style lang="scss" scoped>
  
</style>