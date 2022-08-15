import type { RouteRecordRaw } from "vue-router"
import Dashboard from "./dashboard/Dashboard.vue"
import PageNotFound from "./errors/PageNotFound.vue"
import Explore from "./explore/Explore.vue"
import Login from "./login/Login.vue"
import LoginEmailConfirmationSuccessPage from "./login/LoginEmailConfirmationSuccessPage.vue"
import Register from "./register/Register.vue"
import RegisterEmailConfirmationSuccessPage from "./register/RegisterEmailConfirmationSuccessPage.vue"
export const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Dashboard },
  { path: "/explore", component: Explore },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  {
    path: "/notifications/login-email-confirmation-success",
    component: LoginEmailConfirmationSuccessPage,
  },
  {
    path: "/notifications/register-email-confirmation-success",
    component: RegisterEmailConfirmationSuccessPage,
  },
  { path: "/:slugs(.*)*", component: PageNotFound },
]
