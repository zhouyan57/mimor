import { Component } from "vue"

export class Router {
  routes: Record<string, Component> = {}

  tag(tag: string, component: Component): void {
    this.routes[tag] = component
  }

  tags(tags: Array<string>, component: Component): void {
    for (const tag of tags) {
      this.tag(tag, component)
    }
  }

  route(tag: string): Component | undefined {
    return this.routes[tag]
  }
}
