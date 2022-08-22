import { ty } from '@xieyuheng/ty'
import { ConfigJson, ConfigSchema } from '../../jsons/ConfigJson'

export class  ConfigRepoRemote {
  async get(username: string) {
    throw new Error('TODO')
  }

  async put(username: string, config: ConfigJson) {
    throw new Error('TODO')
  }  
}
