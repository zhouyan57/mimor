import { UserSchema } from "../jsons/UserJson"

export class Api {
  url = import.meta.env.VITE_API_URL

  get token(): string {
    return localStorage.getItem("token") || ""
  }

  get user() {
    return {
      get: get(`${this.url}/user`, {
        headers: { Authorization: `Bearer ${this.token}` },
        output: UserSchema,
      }),
    }
  }
}

function get(url: string, options: any) {
  const { headers, output } = options

  return async () => {
    const response = await fetch(url, { headers })
    if (!response.ok) return console.log("response not ok", response)
    return output.validate(await response.json())
  }
}
