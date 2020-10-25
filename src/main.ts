import {createApp} from 'vue'
import './lib/golu.scss'
import "./index.scss"
import App from './App.vue'
// import './assets/normalize.css'
import router from './router'
import "Prismjs"
import "Prismjs/themes/prism.css"

const Prism = (window as any).Prism
const app = createApp(App)
app.use(router)
app.mount('#app')
