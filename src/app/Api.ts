import { UserSchema } from '../jsons/UserJson'

export class Api {
  url = import.meta.env.VITE_API_URL

  get token() {
    return localStorage.getItem('token') || ''
  }

  async user() {
    const response = await fetch(`${this.url}/user`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      console.log({ who: 'app.api.user', message: 'response not ok', response })
      return
    }

    return UserSchema.validate(await response.json())
  }
}
