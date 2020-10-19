import {createWebHistory,createRouter} from "vue-router"

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import MenuDemo from './components/MenuDemo.vue'
import GMenuContentDemo1 from './components/GMenuView/GMenuContentDemo1.vue'
import GMenuContentDemo2 from './components/GMenuView/GMenuContentDemo2.vue'
import GMenuContentDemo3 from './components/GMenuView/GMenuContentDemo3.vue'
import GMenuContentDemo4 from './components/GMenuView/GMenuContentDemo4.vue'
import Introduce from "./components/Introduce.vue"
import Install from "./components/Install.vue"
import StartUse from "./components/StartUse.vue"

const history=createWebHistory()
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
            {path:'/doc/menu',component:MenuDemo,children:[{
                path:"/doc/menu/menudame1",component:GMenuContentDemo1
            },{
                path:"/doc/menu/menudame2",component:GMenuContentDemo2
            },{
                path:"/doc/menu/menudame3",component:GMenuContentDemo3
            },{
                path:"/doc/menu/menudame4",component:GMenuContentDemo4
            }]}
        ]
    }]
}) 

export default router