import { UserJson } from '../../jsons/UserJson'
import { ConfigJson } from '../../jsons/ConfigJson'
import { Register } from './Register'
import { Login } from './Login'

export class Auth {
  user?: UserJson
  config?: Partial<ConfigJson>
  initialized = false

  register = new Register()
  login = new Login()

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

  async saveTokenAndLoad(token: string) {
    localStorage.setItem('token', token)
    await this.load()
    console.log({ who: 'app.auth.login' })
  }

  logout(): void {
    localStorage.removeItem('token')
    this.user = undefined
    this.config = undefined
    console.log({ who: 'app.auth.logout' })
  }

  async load() {
    this.user = await app.safe(() => app.users.current())

    this.config = await app.safe(async () => {
      if (this.user) {
        return await app.configs.get(this.user.username)
      }
    })

    if (this.config?.lang) {
      app.lang.tag = this.config.lang
    }
  }

  reconfig(config: Partial<ConfigJson>) {
    this.config = this.config || {}
    Object.assign(this.config, config)

    if (config.name && this.user) {
      this.user.name = config.name
    }
  }
}