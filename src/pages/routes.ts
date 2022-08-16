import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Explore from './explore/Explore.vue'
import Home from './home/Home.vue'
import Login from './login/Login.vue'
import LoginEmailConfirmationSuccessPage from './login/LoginEmailConfirmationSuccessPage.vue'
import Projects from './projects/Projects.vue'
import ProjectsNew from './projects/ProjectsNew.vue'
import Register from './register/Register.vue'
import RegisterEmailConfirmationSuccessPage from './register/RegisterEmailConfirmationSuccessPage.vue'
export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/new', component: ProjectsNew },
  { path: '/explore', component: Explore },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  {
    path: '/notifications/login-email-confirmation-success',
    component: LoginEmailConfirmationSuccessPage,
  },
  {
    path: '/notifications/register-email-confirmation-success',
    component: RegisterEmailConfirmationSuccessPage,
  },
  { path: '/:slugs(.*)*', component: PageNotFound },
]
