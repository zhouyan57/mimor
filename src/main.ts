import { createHead } from "@vueuse/head"
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/styles/index.css"
import router from "./router"
import { app } from "./app"

const root = createApp(App)
const head = createHead()

root.config.globalProperties.$app = app

root.use(router)
root.use(head)

root.mount("#app")
