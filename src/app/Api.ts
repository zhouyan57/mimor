import { UserSchema } from '../jsons/UserJson'
import { Http } from '../framework/http'

export class Api {
  url = import.meta.env.VITE_API_URL

  http = new Http({
    url: this.url,
    headers: () => ({
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  })

  get token() {
    return localStorage.getItem('token') || ''
  }

  async user() {
    return this.http.get(`/user`, {
      schema: UserSchema,
    })
  }
}
