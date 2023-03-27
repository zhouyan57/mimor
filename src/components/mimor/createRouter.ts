import { markRaw } from 'vue'
import { Route } from './Route'
import { Router } from './Router'
import { Translation } from './Translation'

export type RouterOptions = {
  routes: Array<Route>
  translations: Array<Translation>
}

export function createRouter(options: RouterOptions): Router {
  const routes = options.routes.map((route) => ({
    ...route,
    component: markRaw(route.component),
  }))

  return { routes }
}
