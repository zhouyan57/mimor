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

  async projects() {
    const { username } = app.auth.userOrFail()

    return this.http.get({
      url: `/users/${username}/projects`,
      path: 'data',
      schema: ty.array(ProjectSchema),
    })
  }

  async project(username: string, name: string) {
    return this.http.get({
      url: `/users/${username}/projects/${name}`,
      schema: ProjectSchema,
    })
  }

  async files(name: string) {
    const { username } = app.auth.userOrFail()

    return this.http.get({
      url: `/users/${username}/projects/${name}/files`,
      path: 'data',
      schema: ty.array(FileSchema),
    })
  }

  async file(name: string, path: string) {
    const { username } = app.auth.userOrFail()

    return this.http.get({
      url: `/users/${username}/projects/${name}/files/${path}`,
      schema: FileSchema,
    })
  }

  async saveFile(name: string, file: FileJson) {
    const { username } = app.auth.userOrFail()

    await this.http.fetch(
      `/users/${username}/projects/${name}/files/${file.path}`,
      {
        method: 'PUT',
        body: JSON.stringify(file),
      }
    )
  }
}
