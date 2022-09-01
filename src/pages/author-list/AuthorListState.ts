type Author = {
  username: string
  name: string
  config: {
    lang: string | null
    name_zh: string | null
    name_en: string | null
  }
}

export class AuthorListState {
  authors?: Array<Author>

  async load() {
    const result = await app.safe(() => app.users.search({ page: 1 }))
    this.authors = result.data
  }
}
