import type { RouteRecordRaw } from "vue-router"
import PageNotFound from "./errors/PageNotFound.vue"
import Home from "./home/Home.vue"
import Register from "./register/Register.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/register", component: Register },
  { path: "/:slugs(.*)*", component: PageNotFound },
]
