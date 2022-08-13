import { useRouter } from "vue-router"
import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user?: UserJson
  initialized = false

  async initialize(token?: string) {
    if (this.initialized) return

    if (token) {
      localStorage.setItem("token", token)
    }

    await this.loadUser()
    this.initialized = true
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

  redirectUser() {
    const router = useRouter()

    if (this.user) {
      router.replace({ path: "/" })
    }
  }

  redirectGuest() {
    const router = useRouter()

    if (!this.user) {
      router.replace({ path: "/" })
    }
  }

  logout(): void {
    console.log({
      message: "logout",
      user: this.user,
    })

    this.user = undefined
    localStorage.removeItem("token")
  }
}
