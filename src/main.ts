import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import './index.css'
import './permission'

const app = createApp(App)
app.use(ElementPlus)
app.use(store, key)
app.use(router)
app.mount('#app')
