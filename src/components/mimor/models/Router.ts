import { Component, markRaw } from "vue"

export class Router {
  nodes = new NodeRouteMap()
  stmts = new StmtRouteMap()
}

export class StmtRouteMap {
  routes: Record<string, Component> = {}

  component(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.oneComponent(input, component)
    } else {
      for (const tag of input) {
        this.oneComponent(tag, component)
      }
    }
  }

  oneComponent(tag: string, component: Component): void {
    this.routes[tag] = markRaw(component)
  }

  route(tag: string): Component | undefined {
    return this.routes[tag]
  }
}

export class NodeRouteMap {
  routes: Record<string, Component> = {}

  component(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.oneComponent(input, component)
    } else {
      for (const tag of input) {
        this.oneComponent(tag, component)
      }
    }
  }

  oneComponent(tag: string, component: Component): void {
    this.routes[tag] = markRaw(component)
  }

  route(tag: string): Component | undefined {
    return this.routes[tag]
  }
}
