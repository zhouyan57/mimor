import { ConfigJson, ConfigSchema } from '../../jsons/ConfigJson'
import { HttpError } from '../../errors/HttpError'

export class ConfigRepoRemote {
  async get(username: string) {
    const response = await fetch(`${app.api.url}/users/${username}/config`, {
      headers: app.api.headers,
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return ConfigSchema.validate(await response.json())
  }

  async put(username: string, config: Partial<ConfigJson>) {
    const response = await fetch(`${app.api.url}/users/${username}/config`, {
      method: 'PUT',
      headers: app.api.headers,
      body: JSON.stringify(config),
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }
  }
}
