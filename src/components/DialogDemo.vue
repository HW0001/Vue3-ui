<template>
    <div> 
    <h3>dialog示例</h3>
    <g-button theme="primary" @click="toggle">toggle</g-button>
    <g-dialog :okfn="okfn" :cancel="cancel" v-model:visible="visible" type="top" isGlobalClose >
        <template v-slot:title>
            <div> 我是外面的div
            </div>
        </template>
        <template v-slot:content>
            <p> p我是外面的内容sx撒旦水水水水但是但是
            </p> 
        </template>
    </g-dialog>
    </div>
</template>
<script lang=ts>
import { ref } from 'vue'
import GDialog from '../lib/GDialog.vue'
import GButton from '../lib/GButton.vue'
export default {
    components:{GDialog,GButton},
    setup(){
        const okfn = ()=>{ 
            return false
        }
        const cancel = ()=>{
             return true
        }
        const visible =ref(false)
        const toggle = ()=>{
            visible.value=!visible.value
        }
        return{
            okfn,cancel,visible,toggle
        }
    }
}
</script>