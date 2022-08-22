import { UserRepoRemote } from './UserRepoRemote'

export class UserRepo {
  remote = new UserRepoRemote()

  async current() {
    return this.remote.current()
  }
}
