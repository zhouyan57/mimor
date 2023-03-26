import { XElement } from '@xieyuheng/x-node'
import { Component, markRaw } from 'vue'
import { Effect } from './Effect'

type Route =
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

  findCard(element: XElement): Component | undefined {
    const route = this.routes[element.tag]
    return route?.kind === 'Card' ? route.component : undefined
  }

  findNode(element: XElement): Component | undefined {
    const route = this.routes[element.tag]
    return route?.kind === 'Node' ? route.component : undefined
  }

  findEffect(element: XElement): Effect | undefined {
    const route = this.routes[element.tag]
    return route?.kind === 'Effect' ? route.effect : undefined
  }
}
