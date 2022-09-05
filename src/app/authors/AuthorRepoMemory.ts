import { AuthorJson } from '../../jsons/AuthorJson'

export class AuthorRepoMemory {
  map: Map<string, AuthorJson> = new Map()

  async get(username: string) {
    const key = username
    return this.map.get(key)
  }

  async put(username: string, author: AuthorJson) {
    const key = username
    this.map.set(key, this.map.get(key) || author)
  }
}
