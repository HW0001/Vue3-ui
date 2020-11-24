import {createRouter,createWebHashHistory} from "vue-router"

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Introduce from "./components/Introduce.vue"
import Install from "./components/Install.vue"
import StartUse from "./components/StartUse.vue"
import CheckBoxDemo from './components/CheckBoxDemo.vue'

const history=createWebHashHistory()
const router=createRouter({
    history,
    routes:[{
        redirect:"/home",
        path:"/"
    },{ 
        path:'/home',component:Home
    },{
        path:'/doc',component:Doc,children:[
            {path:'',redirect:"/doc/introduce"},
            {path:'/doc/introduce',component:Introduce},
            {path:'/doc/install',component:Install},
            {path:'/doc/startuse',component:StartUse},
            {path:'/doc/switch',component:SwitchDemo},
            {path:'/doc/button',component:ButtonDemo},
            {path:'/doc/dialog',component:DialogDemo},
            {path:'/doc/tabs',component:TabsDemo}, 
            {path:'/doc/checkbox',component:CheckBoxDemo}, 
        ]
    }]
}) 

export default router