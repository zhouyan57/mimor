import { AuthorRepoRemote } from './AuthorRepoRemote'
import { AuthorRepoMemory } from './AuthorRepoMemory'

export class AuthorRepo {
  remote = new AuthorRepoRemote()
  memory = new AuthorRepoMemory()

  async search(options: { page: number }) {
    const result = await this.remote.search(options)
    this.memory.load(result.data)
    return result
  }

  async get(username: string) {
    const found = await this.memory.get(username)
    if (found) return found

    const author = await this.remote.get(username)

    if (author) {
      this.memory.put(username, author)
    }

    return author
  }
}
