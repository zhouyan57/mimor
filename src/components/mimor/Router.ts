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

  findCardComponent(element: XElement): Component | undefined {
    const route = this.routes[element.tag]
    if (route?.kind === 'Card') {
      return route.component
    }
  }

  findNodeComponent(element: XElement): Component | undefined {
    const route = this.routes[element.tag]
    if (route?.kind === 'Node') {
      return route.component
    }
  }

  findEffect(element: XElement): Effect | undefined {
    const route = this.routes[element.tag]
    if (route?.kind === 'Effect') {
      return route.effect
    }
  }
}
