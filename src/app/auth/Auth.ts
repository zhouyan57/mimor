import { ConfigJson } from '../../schemas/ConfigJson'
import { UserJson } from '../../schemas/UserJson'
import { Login } from './Login'
import { Register } from './Register'

export class Auth {
  user?: UserJson
  config?: Partial<ConfigJson>
  initialized = false

  register = new Register()
  login = new Login()

  async initialize() {
    if (this.initialized) return
    await this.load()
    this.initialized = true
  }

  async saveTokenAndLoad(token: string) {
    localStorage.setItem('token', token)
    await this.load()
  }

  logout(): void {
    localStorage.removeItem('token')
    this.user = undefined
    this.config = undefined
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
