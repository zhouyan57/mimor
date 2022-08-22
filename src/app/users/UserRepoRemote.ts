import { UserSchema } from '../../jsons/UserJson'
import { Http } from '../../framework/http'

export class UserRepoRemote {
  async current() {
    return app.api.http.get(`/user`, {
      schema: UserSchema,
    })
  }
}
