import { UserRepoRemote } from './UserRepoRemote'

export class UserRepo {
  remote = new UserRepoRemote()

  async current() {
    return this.remote.current()
  }

  async search(options: { page: number }) {
    return this.remote.search(options)
  }
}
