import {createApp, h} from 'vue'
import GDialog from "./GDialog.vue" 

export const openGDialog = (options) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const {type,isGlobalClose,title,content,visible,okfn,cancel}=options
    const app = createApp({
        render() { 
            return h(GDialog,{type,visible,isGlobalClose,
                cancel:()=>{
                    if(cancel()){
                        app.unmount(div) 
                        div.remove()
                    }   
                },okfn:()=>{
                    if(okfn()){
                        app.unmount(div) 
                        div.remove()
                    }  
                }
            },{title,content})
        },
    })
    app.mount(div)
  }