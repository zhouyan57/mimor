import { HttpError } from '../../errors/HttpError'
import { AuthorSchema } from '../../schemas/AuthorJson'

export class AuthorRepoRemote {
  async search(options: { page: number }) {
    const { page } = options

    const response = await fetch(`${app.api.url}/users?page=${page}`, {
      headers: app.api.headers,
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return await response.json()
  }

  async get(username: string) {
    const response = await fetch(`${app.api.url}/users/${username}`, {
      headers: app.api.headers,
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return AuthorSchema.validate(await response.json())
  }
}
