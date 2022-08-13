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

  get token(): string {
    return localStorage.getItem("token") || ""
  }

  async loadUser() {
    if (this.user) return
    const api = import.meta.env.VITE_API_URL
    const response = await fetch(`${api}/user`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    if (!response.ok) return
    const data = await response.json()
    if (!data) return

    this.user = UserSchema.validate(data)
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
