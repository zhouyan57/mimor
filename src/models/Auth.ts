import { useRouter } from "vue-router"
import { UserJson, UserSchema } from "../jsons/UserJson"

export class Auth {
  user?: UserJson

  async init() {
    await this.loadUser()
  }

  async loadUser() {
    if (this.user) return
    const api = import.meta.env.VITE_API_URL
    const response = await fetch(`${api}/user`, {
      credentials: "include",
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

    deleteCookie("token")
  }
}

function deleteCookie(name: string) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
