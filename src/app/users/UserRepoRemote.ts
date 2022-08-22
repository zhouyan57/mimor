import { UserSchema } from '../../jsons/UserJson'

export class UserRepoRemote {
  async current() {
    return app.api.http.get(`/user`, {
      output: {
        schema: UserSchema,
      },
    })
  }
}
