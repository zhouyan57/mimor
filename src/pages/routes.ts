import type { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import MimorPage from './mimor/MimorPage.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },

  { path: '/mimors', redirect: '/' },
  { path: '/mimors/', redirect: '/' },
  { path: '/mimors/:url(.*)', component: MimorPage },

  { path: '/about', component: About },

  { path: '/:pathParts(.*)', component: PageNotFound },
]
