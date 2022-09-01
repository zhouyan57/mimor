import { UserSchema } from '../../jsons/UserJson'
import { HttpError } from '../../errors/HttpError'

export class UserRepoRemote {
  async current() {
    const response = await fetch(`${app.api.url}/user`, {
      headers: app.api.headers,
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return UserSchema.validate(await response.json())
  }

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
}
