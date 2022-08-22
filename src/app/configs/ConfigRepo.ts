import { ConfigRepoRemote } from './ConfigRepoRemote'
import { ConfigJson, ConfigSchema } from '../../jsons/ConfigJson'

export class ConfigRepo {
  remote = new ConfigRepoRemote()

  async get(username: string) {
    return this.remote.get(username)
  }

  async put(username: string, config: ConfigJson) {
    return this.remote.put(username, config)
  }
}
