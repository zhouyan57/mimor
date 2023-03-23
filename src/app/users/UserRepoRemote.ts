import { HttpError } from '../../errors/HttpError'
import { UserSchema } from '../../schemas/UserJson'

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
}
