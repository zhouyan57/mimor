import { ty } from '@xieyuheng/ty'
import { ConfigJson, ConfigSchema } from '../../jsons/ConfigJson'
import { wait } from '../../utils/wait'

export class ConfigRepoRemote {
  async get(username: string) {
    // throw new Error('TODO')
    await wait(3000)
  }

  async put(username: string, config: ConfigJson) {
    // throw new Error('TODO')
    await wait(3000)
  }
}
