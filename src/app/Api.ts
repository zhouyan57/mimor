import { Schema } from "@xieyuheng/ty"
import { UserSchema } from "../jsons/UserJson"
import { Http } from "../framework/http"

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

  get user() {
    return {
      get: () =>
        Http.get(`${this.url}/user`, {
          headers: this.headers,
          output: UserSchema,
        }).body(),
    }
  }
}
