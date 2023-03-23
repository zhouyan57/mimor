import { AuthorJson } from '../../schemas/AuthorJson'

export class AuthorRepoMemory {
  map: Map<string, AuthorJson> = new Map()

  load(authors: Array<AuthorJson>) {
    for (const author of authors) {
      this.map.set(author.username, author)
    }
  }

  async get(username: string) {
    const key = username
    return this.map.get(key)
  }

  async put(username: string, author: AuthorJson) {
    const key = username
    this.map.set(key, this.map.get(key) || author)
  }
}
