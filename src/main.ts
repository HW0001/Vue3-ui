import { createApp } from 'vue'
import './lib/golu.scss'
import "./index.scss"
import App from './App.vue'
// import './assets/normalize.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
