import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Explore from './explore/Explore.vue'
import Config from './config/Config.vue'
import Home from './home/Home.vue'
import Login from './login/Login.vue'
import LoginEmailSuccess from './login/LoginEmailSuccess.vue'
import NewFile from './new-file/NewFile.vue'
import NewProject from './new-project/NewProject.vue'
import File from './file/File.vue'
import ProjectList from './project-list/ProjectList.vue'
import Project from './project/Project.vue'
import Register from './register/Register.vue'
import AuthorList from './author-list/AuthorList.vue'
import RegisterEmailSuccess from './register/RegisterEmailSuccess.vue'

// prettier-ignore
export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/projects', component: ProjectList },
  { path: '/new-project', component: NewProject },
  { path: '/projects/:name', component: Project },
  { path: '/projects/:name/new-file', component: NewFile },
  { path: '/projects/:name/files/:pathParts(.*)*', component: File },
  { path: '/authors', component: AuthorList },
  { path: '/config', component: Config },
  { path: '/explore', component: Explore },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/notifications/login-email-success', component: LoginEmailSuccess },
  { path: '/notifications/register-email-success', component: RegisterEmailSuccess },
  { path: '/:pathParts(.*)*', component: PageNotFound },
]
