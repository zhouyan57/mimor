import { UserSchema } from "../jsons/UserJson"

export class Api {
  url = import.meta.env.VITE_API_URL

  get token() {
    return localStorage.getItem("token") || ""
  }

  get headers() {
    return {
      Authorization: `Bearer ${this.token}`,
      Accept: "application/json",
    }
  }

  async fetchCurrentUser() {
    const response = await fetch(`${this.url}/user`, {
      headers: this.headers,
    })

    if (!response.ok) {
      console.log({ who: "Ap.fetchUser", message: "response not ok", response })
      return
    }

    return UserSchema.validate(await response.json())
  }
}
