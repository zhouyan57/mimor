import { AuthorRepoRemote } from './AuthorRepoRemote'

export class AuthorRepo {
  remote = new AuthorRepoRemote()

  async search(options: { page: number }) {
    return this.remote.search(options)
  }

  async get(username: string) {
    return this.remote.get(username)
  }
}
