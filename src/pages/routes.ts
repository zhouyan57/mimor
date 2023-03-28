import type { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import MimorPage from './mimor/MimorPage.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },

  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:url(.*)', component: MimorPage },

  { path: '/about', component: About },

  { path: '/docs', component: Docs },

  { path: '/:path(.*)', component: PageNotFound },
]
