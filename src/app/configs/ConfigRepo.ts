import { ConfigRepoRemote } from './ConfigRepoRemote'
import { ConfigJson, ConfigSchema } from '../../jsons/ConfigJson'

export class ConfigRepo {
  remote = new ConfigRepoRemote()

  async get(username: string) {
    return await this.remote.get(username)
  }

  async put(username: string, config: ConfigJson) {
    await this.remote.put(username, config)

    if (config.lang) {
      app.lang.tag = config.lang      
    }
    
    if (config.name && app.auth.user) {
      app.auth.user.name = config.name
    }
  }
}
