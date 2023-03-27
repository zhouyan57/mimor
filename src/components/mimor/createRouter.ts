import { markRaw } from 'vue'
import { ElementTranslation } from './ElementTranslation'
import { Route } from './Route'
import { Router } from './Router'

export type RouterOptions = {
  routes: Array<Route>
  translations: Array<ElementTranslation>
}

export function createRouter(options: RouterOptions): Router {
  const routes = options.routes.map((route) => {
    if (route.kind === 'Card' || route.kind === 'Element') {
      return { ...route, component: markRaw(route.component) }
    }

    return route
  })

  return { routes }
}
