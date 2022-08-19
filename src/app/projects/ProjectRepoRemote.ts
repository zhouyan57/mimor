import { ty } from '@xieyuheng/ty'
import { ProjectJson, ProjectSchema } from '../../jsons/ProjectJson'

export class ProjectRepoRemote {
  async all(username: string) {
    return app.api.http.get(`/users/${username}/projects`, {
      path: 'data',
      schema: ty.array(ProjectSchema),
    })
  }

  async post(username: string, project: ProjectJson) {
    await app.api.http.fetch(`/users/${username}/projects`, {
      method: 'POST',
      body: JSON.stringify(project),
    })
  }

  async get(username: string, name: string) {
    return app.api.http.get(`/users/${username}/projects/${name}`, {
      schema: ProjectSchema,
    })
  }
}
