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
            {path:'/switch',component:SwitchDemo},
            {path:'/button',component:ButtonDemo},
            {path:'/dialog',component:DialogDemo},
            {path:'/tabs',component:TabsDemo},
            {path:'/menu',component:MenuDemo,children:[{
                path:"/menudame1",component:GMenuContentDemo1
            },{
                path:"/menudame2",component:GMenuContentDemo2
            },{
                path:"/menudame3",component:GMenuContentDemo3
            },{
                path:"/menudame4",component:GMenuContentDemo4
            }]}
        ]
    }]
}) 

export default router