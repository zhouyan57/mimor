import { ty } from '@xieyuheng/ty'
import { ProjectSchema } from '../../jsons/ProjectJson'

export class ProjectRepoRemote {
  async all(username: string) {
    return app.api.http.get(`/users/${username}/projects`, {
      path: 'data',
      schema: ty.array(ProjectSchema),
    })
  }

  async get(username: string, name: string) {
    return app.api.http.get(`/users/${username}/projects/${name}`, {
      schema: ProjectSchema,
    })
  }
}
