import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

/** styles */
import './styles/main.scss'

const app = createApp(App)

const pinia = createPinia()

app.use(router).use(pinia)
app.mount('#app')
