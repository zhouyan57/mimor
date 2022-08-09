import { Component, markRaw } from "vue"
import { XElement } from "../../../libs/x-node"
import { MimorState } from "../MimorState"

export type EffectOptions = { mimor: MimorState; element: XElement }

export type Effect = (options: EffectOptions) => void

type Route =
  | { kind: "Component"; component: Component }
  | { kind: "Effect"; effect: Effect }
  | { kind: "Node"; component: Component }

export class Router {
  routes: Record<string, Route> = {}

  defineCard(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.setCard(input, component)
    } else {
      for (const tag of input) {
        this.setCard(tag, component)
      }
    }
  }

  setCard(tag: string, component: Component): void {
    this.routes[tag] = {
      kind: "Component",
      component: markRaw(component),
    }
  }

  findCard(tag: string): Component | undefined {
    const route = this.routes[tag]
    if (route === undefined) return undefined
    if (route.kind === "Component") {
      return route.component
    } else {
      return undefined
    }
  }

  defineEffect(input: string | Array<string>, effect: Effect): void {
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

  findEffect(tag: string): Effect | undefined {
    const route = this.routes[tag]
    if (route === undefined) return undefined
    if (route.kind === "Effect") {
      return route.effect
    } else {
      return undefined
    }
  }

  defineNode(input: string | Array<string>, component: Component): void {
    if (typeof input === "string") {
      this.setNode(input, component)
    } else {
      for (const tag of input) {
        this.setNode(tag, component)
      }
    }
  }

  setNode(tag: string, component: Component): void {
    this.routes[tag] = {
      kind: "Node",
      component: markRaw(component),
    }
  }

  findNode(tag: string): Component | undefined {
    const route = this.routes[tag]
    if (route === undefined) return undefined
    if (route.kind === "Node") {
      return route.component
    } else {
      return undefined
    }
  }
}
