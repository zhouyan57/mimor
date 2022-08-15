import { UserJson } from "../jsons/UserJson"

export class Auth {
  user?: UserJson
  initialized = false

  async initialize() {
    if (this.initialized) {
      return console.log({
        who: "app.auth.initialize",
        message: "already initialized",
        user: this.user,
      })
    }

    this.user = await app.api.user.get()
    this.initialized = true

    console.log({
      who: "app.auth.initialize",
      user: this.user,
    })
  }

  async login(token: string) {
    localStorage.setItem("token", token)
    this.user = await app.api.user.get()
    console.log({ who: "app.auth.login", user: this.user })
  }

  logout(): void {
    localStorage.removeItem("token")
    this.user = undefined
    console.log({ who: "app.auth.logout", user: this.user })
  }
}
