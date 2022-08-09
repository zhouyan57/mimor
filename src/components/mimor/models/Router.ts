import { Component, markRaw } from "vue"

export class Router {
  nodeRoutes: Record<string, Component> = {}
  stmtRoutes: Record<string, Component> = {}

  node(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.oneNode(input, component)
    } else {
      for (const tag of input) {
        this.oneNode(tag, component)
      }
    }
  }

  oneNode(tag: string, component: Component): void {
    this.nodeRoutes[tag] = markRaw(component)
  }

  routeNode(tag: string): Component | undefined {
    return this.nodeRoutes[tag]
  }

  stmt(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.oneStmt(input, component)
    } else {
      for (const tag of input) {
        this.oneStmt(tag, component)
      }
    }
  }

  oneStmt(tag: string, component: Component): void {
    this.stmtRoutes[tag] = markRaw(component)
  }

  routeStmt(tag: string): Component | undefined {
    return this.stmtRoutes[tag]
  }
}
