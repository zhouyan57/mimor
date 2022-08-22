import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoRemote {
  async all(username: string, projectName: string) {
    return app.api.http.get(
      `/users/${username}/projects/${projectName}/files`,
      {
        path: 'data',
        output: {
          schema: ty.array(FileSchema),
        },
      }
    )
  }

  async post(username: string, projectName: string, file: FileJson) {
    await app.api.http.fetch(
      `/users/${username}/projects/${projectName}/files`,
      {
        method: 'POST',
        body: JSON.stringify(file),
      }
    )
  }

  async get(username: string, projectName: string, path: string) {
    return app.api.http.get(
      `/users/${username}/projects/${projectName}/files/${path}`,
      {
        output: {
          schema: FileSchema,
        },
      }
    )
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
