import { XElement } from '@xieyuheng/x-node'
import { Route, Router } from './Router'

export function routerFind(
  router: Router,
  element: XElement,
): Route | undefined {
  const route = router.routes[element.tag]
  return route
}
