import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import App from './App.vue'
import { happyHacking } from './console/happyHacking'
import router from './router'
import './styles/fonts.css'
import './styles/index.css'
import { registerServiceWorker } from './utils/pwa/registerServiceWorker'

const app = createApp(App)

app.use(router)
app.use(createHead())

app.mount('#app')

happyHacking()

registerServiceWorker('/service-worker.js')
