import { UserJson } from '../jsons/UserJson'
import { ConfigJson } from '../jsons/ConfigJson'

export class Auth {
  user?: UserJson
  config?: ConfigJson
  initialized = false

  async initialize() {
    if (this.initialized) {
      return console.log({
        who: 'app.auth.initialize',
        message: 'already initialized',
      })
    }

    await this.load()

    this.initialized = true

    console.log({
      who: 'app.auth.initialize',
      message: 'initialized for the first time',
    })
  }

  async login(token: string) {
    localStorage.setItem('token', token)
    await this.load()
    console.log({ who: 'app.auth.login' })
  }

  async load() {
    this.user = await app.safe(() => app.users.current())
    this.config = await app.safe(async () => {
      if (this.user) {
        return await app.configs.get(this.user.username)
      }
    })
  }

  logout(): void {
    localStorage.removeItem('token')
    this.user = undefined
    console.log({ who: 'app.auth.logout' })
  }
}
