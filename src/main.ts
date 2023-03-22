import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import App from './App.vue'
import { app } from './app'
import router from './router'
import './styles/fonts.css'
import './styles/index.css'

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
