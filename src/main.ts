import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { app } from './app'
import App from './App.vue'
import './assets/styles/index.css'
import router from './router'

const root = createApp(App)

root.config.globalProperties.$app = app

declare module 'vue' {
  interface ComponentCustomProperties {
    $app: typeof app
  }
}

root.use(router)
root.use(createHead())

root.mount('#app')
