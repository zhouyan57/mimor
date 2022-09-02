import { AuthorJson } from '../../jsons/AuthorJson'

export class AuthorListState {
  authors?: Array<AuthorJson>

  async load() {
    const result = await app.safe(() => app.authors.search({ page: 1 }))
    this.authors = result.data
  }
}
