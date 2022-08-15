import { App } from "./app"

declare module "vue" {
  interface ComponentCustomProperties {
    $app: App
  }
}
