import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Config from './config/Config.vue'
import Home from './home/Home.vue'
import About from './about/About.vue'
import Login from './login/Login.vue'
import LoginEmailSuccess from './login/LoginEmailSuccess.vue'
import NewFile from './new-file/NewFile.vue'
import NewProject from './new-project/NewProject.vue'
import File from './file/File.vue'
import ProjectList from './project-list/ProjectList.vue'
import Project from './project/Project.vue'
import Register from './register/Register.vue'
import RegisterEmailSuccess from './register/RegisterEmailSuccess.vue'

// prettier-ignore
export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: ProjectList },
  { path: '/new-project', component: NewProject },
  { path: '/projects/:name', component: Project },
  { path: '/projects/:name/new-file', component: NewFile },
  { path: '/projects/:name/files/:pathParts(.*)*', component: File },
  { path: '/config', component: Config },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/notifications/login-email-success', component: LoginEmailSuccess },
  { path: '/notifications/register-email-success', component: RegisterEmailSuccess },
  { path: '/:pathParts(.*)*', component: PageNotFound },
]
