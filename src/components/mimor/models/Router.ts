import { Component, markRaw } from "vue"
import { XElement } from "../../../libs/x-node"
import { MimorState } from "../MimorState"

export class Router {
  nodes = new NodeRouteMap()
  stmts = new StmtRouteMap()
}

type Effect = (options: { mimor: MimorState; element: XElement }) => {}

type StmtRoute =
  | { kind: "Component"; component: Component }
  | { kind: "Effect"; effect: Effect }

export class StmtRouteMap {
  routes: Record<string, StmtRoute> = {}

  component(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.setComponent(input, component)
    } else {
      for (const tag of input) {
        this.setComponent(tag, component)
      }
    }
  }

  setComponent(tag: string, component: Component): void {
    this.routes[tag] = {
      kind: "Component",
      component: markRaw(component),
    }
  }

  hasComponent(tag: string): boolean {
    return this.routes[tag]?.kind === "Component"
  }

  getComponent(tag: string): Component | undefined {
    const route = this.routes[tag]
    if (route === undefined) return undefined
    if (route.kind === "Component") {
      return route.component
    } else {
      return undefined
    }
  }

  effect(input: string | Array<string>, effect: Effect): void {
    if (typeof input === "string") {
      this.setEffect(input, effect)
    } else {
      for (const tag of input) {
        this.setEffect(tag, effect)
      }
    }
  }

  setEffect(tag: string, effect: Effect): void {
    this.routes[tag] = { kind: "Effect", effect }
  }

  hasEffect(tag: string): boolean {
    return this.routes[tag]?.kind === "Effect"
  }

  getEffect(tag: string): Effect | undefined {
    const route = this.routes[tag]
    if (route === undefined) return undefined
    if (route.kind === "Effect") {
      return route.effect
    } else {
      return undefined
    }
  }
}

export class NodeRouteMap {
  routes: Record<string, Component> = {}

  component(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.setComponent(input, component)
    } else {
      for (const tag of input) {
        this.setComponent(tag, component)
      }
    }
  }

  setComponent(tag: string, component: Component): void {
    this.routes[tag] = markRaw(component)
  }

  hasComponent(tag: string): boolean {
    return Boolean(this.routes[tag])
  }

  getComponent(tag: string): Component | undefined {
    return this.routes[tag]
  }
}
