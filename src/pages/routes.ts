import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Explore from './explore/Explore.vue'
import Home from './home/Home.vue'
import Login from './login/Login.vue'
import LoginEmailConfirmationSuccessPage from './login/LoginEmailConfirmationSuccessPage.vue'
import NewProjectFile from './new-project-file/NewProjectFile.vue'
import NewProject from './new-project/NewProject.vue'
import ProjectList from './project-list/ProjectList.vue'
import Project from './project/Project.vue'
import Register from './register/Register.vue'
import RegisterEmailConfirmationSuccessPage from './register/RegisterEmailConfirmationSuccessPage.vue'
export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/projects', component: ProjectList },
  { path: '/new-project', component: NewProject },
  { path: '/projects/:name', component: Project },
  { path: '/projects/:name/new-file', component: NewProjectFile },
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
