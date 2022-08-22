import { ty } from '@xieyuheng/ty'
import { ConfigJson, ConfigSchema } from '../../jsons/ConfigJson'
import { wait } from '../../utils/wait'

export class ConfigRepoRemote {
  async get(username: string) {
    return await app.api.http.get(`/users/${username}/config`, {
      output: { schema: ConfigSchema },
    })
  }

  async put(username: string, config: Partial<ConfigJson>) {
    await app.api.http.put(`/users/${username}/config`, {
      body: JSON.stringify(config),
      output: { schema: ty.any() },
    })
  }
}
