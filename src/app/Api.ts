import { Schema } from "@xieyuheng/ty"
import { UserSchema } from "../jsons/UserJson"

export class Api {
  url = import.meta.env.VITE_API_URL

  get token(): string {
    return localStorage.getItem("token") || ""
  }

  get user() {
    return {
      get: get(`${this.url}/user`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: "application/json",
        },
        output: UserSchema,
      }),
    }
  }
}

function get<O>(url: string, options: RequestInit & { output: Schema<O> }) {
  const { headers, output } = options

  return async (): Promise<O | undefined> => {
    const response = await fetch(url, { headers })

    if (!response.ok) {
      console.log({ who: "api.get", message: "response not ok", response })
      return
    }

    return output.validate(await response.json())
  }
}
