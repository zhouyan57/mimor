import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'
import { HttpError } from '../../errors/HttpError'

export class FileRepoRemote {
  async all(username: string, projectName: string) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${projectName}/files`,
      {
        headers: app.api.headers,
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    const { data } = await response.json()

    return ty.array(FileSchema).validate(data)
  }

  async post(username: string, projectName: string, file: FileJson) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${projectName}/files`,
      {
        method: 'POST',
        headers: app.api.headers,
        body: JSON.stringify(file),
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return FileSchema.validate(await response.json())
  }

  async get(username: string, projectName: string, path: string) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${projectName}/files/${path}`,
      {
        headers: app.api.headers,
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return FileSchema.validate(await response.json())
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson,
  ) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${projectName}/files/${path}`,
      {
        method: 'PUT',
        headers: app.api.headers,
        body: JSON.stringify(file),
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }
  }

  async delete(username: string, projectName: string, path: string) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${projectName}/files/${path}`,
      {
        method: 'DELETE',
        headers: app.api.headers,
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }
  }
}
