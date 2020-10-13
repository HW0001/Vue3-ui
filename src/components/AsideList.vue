<template>
    <div class="asidecontent">
        <h2>ui组件</h2>
        <ol>
        <li><router-link to='switch'>switch</router-link></li>
        <li><router-link to='button'>button</router-link></li>
        <li><router-link to='dialog'>dialog</router-link></li>
        <li><router-link to='tabs'>tabs</router-link></li> 
        </ol>
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue';
import router from '../router'
    export default{
        setup(){     
            const asidevisib = inject<Ref<boolean>>("asidevis"); 
            const clientwidth=document.documentElement.clientWidth
            router.afterEach(()=>{ 
                if(clientwidth<=500)
                asidevisib.value=!asidevisib.value
            })     
            return{
                
            }
        }
       
    }
</script>
<style lang="scss" scoped>
.asidecontent{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    ol{
        padding-left: 10px;
        >li{
            margin-bottom: 15px;
        }
    }
}
</style>