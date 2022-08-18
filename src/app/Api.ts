import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../jsons/FileJson'
import { ProjectSchema } from '../jsons/ProjectJson'
import { UserSchema } from '../jsons/UserJson'
import { FileJson } from '../jsons/FileJson'
import { Http } from '../framework/http'

export class Api {
  url = import.meta.env.VITE_API_URL

  http = new Http({
    url: this.url,
    headers: () => ({
      Authorization: `Bearer ${this.token}`,
      Accept: 'application/json',
    }),
  })

  get token() {
    return localStorage.getItem('token') || ''
  }

  async user() {
    return this.http.get({
      url: `/user`,
      schema: UserSchema,
    })
  }
}
