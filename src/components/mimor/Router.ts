import { Component, markRaw } from 'vue'
import { Effect } from './Effect'

export type Route =
  | { kind: 'Card'; component: Component }
  | { kind: 'Node'; component: Component }
  | { kind: 'Effect'; effect: Effect }

export class Router {
  routes: Record<string, Route> = {}

  defineCard(tags: Array<string>, component: Component): void {
    for (const tag of tags) {
      this.routes[tag] = {
        kind: 'Card',
        component: markRaw(component),
      }
    }
  }

  defineNode(tags: Array<string>, component: Component): void {
    for (const tag of tags) {
      this.routes[tag] = {
        kind: 'Node',
        component: markRaw(component),
      }
    }
  }

  defineEffect(tags: Array<string>, effect: Effect): void {
    for (const tag of tags) {
      this.routes[tag] = {
        kind: 'Effect',
        effect,
      }
    }
  }
}
