import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory,createRouter} from "vue-router"

import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

const history=createWebHistory()
const router=createRouter({
    history,
    routes:[{
        redirect:"/home",
        path:"/"
    },{ 
        path:'/home',component:Home
    },{
        path:'/doc',component:Doc
    }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
