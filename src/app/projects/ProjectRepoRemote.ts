import { ty } from '@xieyuheng/ty'
import { HttpError } from '../../errors/HttpError'
import { ProjectJson, ProjectSchema } from '../../schemas/ProjectJson'

export class ProjectRepoRemote {
  async all(username: string) {
    const response = await fetch(`${app.api.url}/users/${username}/projects`, {
      headers: app.api.headers,
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    const { data } = await response.json()

    return ty.array(ProjectSchema).validate(data)
  }

  async post(username: string, project: ProjectJson) {
    const response = await fetch(`${app.api.url}/users/${username}/projects`, {
      method: 'POST',
      headers: app.api.headers,
      body: JSON.stringify(project),
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return ProjectSchema.validate(await response.json())
  }

  async get(username: string, name: string) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${name}`,
      {
        headers: app.api.headers,
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return ProjectSchema.validate(await response.json())
  }

  async put(username: string, name: string, project: ProjectJson) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${name}`,
      {
        method: 'PUT',
        headers: app.api.headers,
        body: JSON.stringify(project),
      },
    )

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return ProjectSchema.validate(await response.json())
  }

  async delete(username: string, name: string) {
    const response = await fetch(
      `${app.api.url}/users/${username}/projects/${name}`,
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
