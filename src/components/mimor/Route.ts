import { Component } from 'vue'
import { Effect } from './Effect'

export type Route =
  | { tag: string; kind: 'Card'; component: Component }
  | { tag: string; kind: 'Node'; component: Component }
  | { tag: string; kind: 'Effect'; effect: Effect }
