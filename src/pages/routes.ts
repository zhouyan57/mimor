import type { RouteRecordRaw } from 'vue-router'
import About from './about/About.vue'
import Author from './author/Author.vue'
import Docs from './docs/Docs.vue'
import PageNotFound from './errors/PageNotFound.vue'
import Home from './home/Home.vue'
import Login from './login/Login.vue'
import MimorEntrance from './mimor-entrance/MimorEntrance.vue'
import Mimor from './mimor/Mimor.vue'
import Play from './play/Play.vue'
import Recall from './recall/Recall.vue'
import Register from './register/Register.vue'
import Settings from './settings/Settings.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/play', component: Play },
  { path: '/about', component: About },
  { path: '/docs', component: Docs },
  { path: '/register', component: Register },
  { path: '/register/', component: Register },
  { path: '/login', component: Login },
  { path: '/login/', component: Login },
  { path: '/mimors', component: MimorEntrance },
  { path: '/mimors/', component: MimorEntrance },
  { path: '/mimors/:src(.*)', component: Mimor },
  { path: '/authors', redirect: '/' },
  { path: '/authors/', redirect: '/' },
  { path: '/authors/:username', component: Author },
  { path: '/recall', component: Recall },
  { path: '/recall/', component: Recall },
  { path: '/settings', component: Settings },
  { path: '/settings/', component: Settings },
  { path: '/:path(.*)', component: PageNotFound },
]
