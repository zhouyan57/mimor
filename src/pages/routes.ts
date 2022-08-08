import type { RouteRecordRaw } from "vue-router"
import Home from "./home/Home.vue"
import PageNotFound from "./errors/PageNotFound.vue"

export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/:slugs(.*)*", component: PageNotFound },
]
