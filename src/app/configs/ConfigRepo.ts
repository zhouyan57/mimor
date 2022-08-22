import { ConfigRepoRemote } from './ConfigRepoRemote'

export class ConfigRepo {
  remote = new ConfigRepoRemote()

  async get(username: string) {
    return this.remote.get(username)
  }
}
