import { createHead } from "@vueuse/head"
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/styles/index.css"
import router from "./router"
import "./App"

const root = createApp(App)
const head = createHead()

root.use(router)
root.use(head)

root.mount("#app")
