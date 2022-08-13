import { useRouter } from "vue-router"
import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user?: UserJson

  async init(token?: string) {
    if (token) {
      localStorage.setItem("token", token)
    }

    await this.loadUser()
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
    this.user = undefined
    localStorage.removeItem("token")
  }
}
