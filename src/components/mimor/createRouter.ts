import { Route } from './Route'
import { Router } from './Router'

export type RouterOptions = {
  routes: Array<Route>
}

export function createRouter(options: RouterOptions): Router {
  const { routes } = options

  return { routes }
}
