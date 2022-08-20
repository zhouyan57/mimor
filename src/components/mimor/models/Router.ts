import { Component, markRaw } from 'vue'
import { isElement, XElement, XNode } from '../../../libs/x-node'
import { MimorState } from '../MimorState'
import { Effect, EffectOptions } from './Effect'

type Route =
  | { kind: 'Card'; component: Component }
  | { kind: 'Effect'; effect: Effect }
  | { kind: 'Node'; component: Component }

export class Router {
  routes: Record<string, Route> = {}

  setCard(tag: string, component: Component): void {
    this.routes[tag] = { kind: 'Card', component: markRaw(component) }
  }

  setEffect(tag: string, effect: Effect): void {
    this.routes[tag] = { kind: 'Effect', effect }
  }

  setNode(tag: string, component: Component): void {
    this.routes[tag] = { kind: 'Node', component: markRaw(component) }
  }

  defineCard(input: string | Array<string>, component: Component): void {
    if (typeof input === 'string') this.setCard(input, component)
    else for (const tag of input) this.setCard(tag, component)
  }

  defineEffect(input: string | Array<string>, effect: Effect): void {
    if (typeof input === 'string') this.setEffect(input, effect)
    else for (const tag of input) this.setEffect(tag, effect)
  }

  defineNode(input: string | Array<string>, component: Component): void {
    if (typeof input === 'string') this.setNode(input, component)
    else for (const tag of input) this.setNode(tag, component)
  }

  findCard(node: XNode): Component | undefined {
    const route = this.findRoute(node)
    return route?.kind === 'Card' ? route.component : undefined
  }

  findEffect(node: XNode): Effect | undefined {
    const route = this.findRoute(node)
    return route?.kind === 'Effect' ? route.effect : undefined
  }

  findNode(node: XNode): Component | undefined {
    const route = this.findRoute(node)
    return route?.kind === 'Node' ? route.component : undefined
  }

  findRoute(node: XNode): Route | undefined {
    if (!isElement(node)) return undefined
    return this.routes[node.tag]
  }
}
