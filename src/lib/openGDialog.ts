import {createApp, h} from 'vue'
import GDialog from "./GDialog.vue" 

export const openGDialog = (options) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    const {type,isGlobalClose,title,content}=options
    const app = createApp({
        render() { 
            return h(GDialog,{type,isGlobalClose},{})
        },
    })
    app.mount(div)
  }