import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user?: UserJson
  initialized = false

  async initialize() {
    if (this.initialized) {
      console.log({
        who: "Auth.initialized",
        user: this.user,
      })

      return
    }

    await this.loadUser()
    this.initialized = true

    console.log({
      who: "Auth.initialize",
      user: this.user,
    })
  }

  async login(token: string) {
    localStorage.setItem("token", token)
    const user = await this.loadUser()
    console.log({
      who: "Auth.login",
      user,
    })
  }

  async loadUser() {
    if (this.user) return
    this.user = await app.api.user.get()
  }

  logout(): void {
    console.log({
      who: "Auth.logout",
      user: this.user,
    })

    localStorage.removeItem("token")
    this.user = undefined
  }
}
