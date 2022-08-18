import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoRemote {
  async all(username: string, name: string) {
    return app.api.http.get({
      url: `/users/${username}/projects/${name}/files`,
      path: 'data',
      schema: ty.array(FileSchema),
    })
  }

  async get(username: string, name: string, path: string) {
    return app.api.http.get({
      url: `/users/${username}/projects/${name}/files/${path}`,
      schema: FileSchema,
    })
  }

  async put(username: string, name: string, file: FileJson) {
    await app.api.http.fetch(
      `/users/${username}/projects/${name}/files/${file.path}`,
      {
        method: 'PUT',
        body: JSON.stringify(file),
      }
    )
  }
}
