import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoRemote {
  async all(username: string, projectName: string) {
    return app.api.http.get({
      url: `/users/${username}/projects/${projectName}/files`,
      path: 'data',
      schema: ty.array(FileSchema),
    })
  }

  async get(username: string, projectName: string, path: string) {
    return app.api.http.get({
      url: `/users/${username}/projects/${projectName}/files/${path}`,
      schema: FileSchema,
    })
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson
  ) {
    await app.api.http.fetch(
      `/users/${username}/projects/${projectName}/files/${path}`,
      {
        method: 'PUT',
        body: JSON.stringify(file),
      }
    )
  }
}
