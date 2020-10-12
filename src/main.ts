import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHistory,createRouter} from "vue-router"

import Myapp1 from './components/Myapp1.vue'
import Myapp2 from './components/Myapp2.vue'

const history=createWebHistory()
const router=createRouter({
    history,
    routes:[{
        path:'/',component:Myapp1
    },{
        path:'/1',component:Myapp2
    }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
