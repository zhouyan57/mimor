import { Api } from "./Api"
import { Auth } from "./Auth"
import { Lang } from "./Lang"

export class App {
  lang = new Lang()
  auth = new Auth()
  api = new Api()

  get name(): string {
    return this.lang.zh ? "谜墨" : "Mimor"
  }
}
