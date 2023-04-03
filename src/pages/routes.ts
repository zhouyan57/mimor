import type { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import MimorPage from './mimor/MimorPage.vue'
import Register from './register/Register.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/docs', component: Docs },
  { path: '/register', component: Register },
  { path: '/register/', component: Register },
  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:url(.*)', component: MimorPage },
  { path: '/:path(.*)', component: PageNotFound },
]
