import { AuthorJson } from '../../schemas/AuthorJson'

export class AuthorListState {
  authors?: Array<AuthorJson>

  async load() {
    await app.auth.initialize()
    const result = await app.safe(() => app.authors.search({ page: 1 }))
    this.authors = result.data
  }
}
