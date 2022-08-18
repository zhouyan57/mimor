import { UserJson } from '../jsons/UserJson'

export class Auth {
  user?: UserJson
  initialized = false

  userOrFail(): UserJson {
    if (!this.user) {
      throw new Error('no user')
    }

    return this.user
  }

  async initialize() {
    if (this.initialized) {
      return console.log({
        who: 'app.auth.initialize',
        message: 'already initialized',
        user: this.user,
      })
    }

    this.user = await app.api.user()
    this.initialized = true

    console.log({
      who: 'app.auth.initialize',
      user: this.user,
    })
  }

  async login(token: string) {
    localStorage.setItem('token', token)
    this.user = await app.api.user()
    console.log({ who: 'app.auth.login', user: this.user })
  }

  logout(): void {
    localStorage.removeItem('token')
    this.user = undefined
    console.log({ who: 'app.auth.logout', user: this.user })
  }
}
