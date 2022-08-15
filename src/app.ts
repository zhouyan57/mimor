import { reactive } from "vue"
import { Auth } from "./models/Auth"
import { Lang } from "./models/Lang"

export class App {
  lang = new Lang()
  auth = new Auth()
}

declare global {
  var app: App
}

export const app = reactive(new App())

globalThis.app = app

declare module "vue" {
  interface ComponentCustomProperties {
    $app: App
  }
}
