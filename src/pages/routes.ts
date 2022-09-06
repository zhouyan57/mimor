import type { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Config from './config/Config.vue'
import Home from './home/Home.vue'
import About from './about/About.vue'
import AuthorList from './author-list/AuthorList.vue'
import Login from './login/Login.vue'
import LoginEmailSuccess from './login/LoginEmailSuccess.vue'
import CreateFile from './create-file/CreateFile.vue'
import CreateProject from './create-project/CreateProject.vue'
import File from './file/File.vue'
import ProjectList from './project-list/ProjectList.vue'
import Project from './project/Project.vue'
import Register from './register/Register.vue'
import RegisterEmailSuccess from './register/RegisterEmailSuccess.vue'

// prettier-ignore
export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/authors', component: AuthorList },
  { path: '/authors/:username', redirect: ({params}) => `/authors/${params.username}/projects` },
  { path: '/authors/:username/projects', component: ProjectList },
  { path: '/authors/:username/create-project', component: CreateProject },
  { path: '/authors/:username/projects/:name', component: Project },
  { path: '/authors/:username/projects/:name/create-file', component: CreateFile },
  { path: '/authors/:username/projects/:name/files/:pathParts(.*)*', component: File },
  { path: '/config', component: Config },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/notifications/login-email-success', component: LoginEmailSuccess },
  { path: '/notifications/register-email-success', component: RegisterEmailSuccess },
  { path: '/:pathParts(.*)*', component: PageNotFound },
]
