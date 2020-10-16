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
    <g-button @click="dialogfn"> 调用方法出现dialog</g-button>
    </div>
</template>
<script lang=ts>
import { ref } from 'vue'
import GDialog from '../lib/GDialog.vue'
import GButton from '../lib/GButton.vue'
import {openGDialog} from '../lib/openGDialog'
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
        const dialogfn = ()=>{
            openGDialog({
               type:"center" ,
               isGlobalClose:false,
               title:"代码打开的dialog",
               content:"尝试下打开dialog",
               visible:true,
               okfn:()=>{
                   console.log(22)
                   return false
               },
               cancel:()=>{
                   console.log(33)
                   return true
               }
            })
        }
        return{
            okfn,cancel,visible,toggle,dialogfn
        }
    }
}
</script>