import { UserJson } from "../jsons/UserJson"

export class Auth {
  user?: UserJson
  initialized = false

  async initialize() {
    if (this.initialized) {
      console.log({ who: "App.initialized", user: this.user })

      return
    }

    await this.loadUser()
    this.initialized = true

    console.log({ who: "App.initialize", user: this.user })
  }

  async login(token: string) {
    localStorage.setItem("token", token)
    const user = await this.loadUser()
    console.log({ who: "App.login", user })
  }

  async loadUser() {
    if (this.user) return
    this.user = await app.api.user.get()
  }

  logout(): void {
    console.log({ who: "App.logout", user: this.user })

    localStorage.removeItem("token")
    this.user = undefined
  }
}
