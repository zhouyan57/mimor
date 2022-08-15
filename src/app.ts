import { reactive } from "vue"
import { Auth } from "./models/Auth"
import { Lang } from "./models/Lang"

export class App {
  lang = new Lang()
  auth = new Auth()

  get name(): string {
    return this.lang.zh ? "谜墨" : "Mimor"
  }
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
