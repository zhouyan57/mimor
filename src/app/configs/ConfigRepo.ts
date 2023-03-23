import { ConfigJson } from '../../schemas/ConfigJson'
import { ConfigRepoRemote } from './ConfigRepoRemote'

export class ConfigRepo {
  remote = new ConfigRepoRemote()

  async get(username: string) {
    return await this.remote.get(username)
  }

  async put(username: string, config: Partial<ConfigJson>) {
    await this.remote.put(username, config)
    app.lang.reconfig(config)
    app.auth.reconfig(config)
  }
}
