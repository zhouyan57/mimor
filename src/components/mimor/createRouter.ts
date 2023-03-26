import { markRaw } from 'vue'
import { Route } from './Route'
import { Router } from './Router'

export type RouterOptions = {
  routes: Array<Route>
}

export function createRouter(options: RouterOptions): Router {
  const routes = options.routes.map((route) => {
    if (route.kind === 'Card' || route.kind === 'Node') {
      return { ...route, component: markRaw(route.component) }
    }

    return route
  })

  return { routes }
}
