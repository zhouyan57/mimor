import { ty } from '@xieyuheng/ty'
import { ProjectSchema } from '../../jsons/ProjectJson'

export class ProjectRepoMemory {
  async all(username: string) {
    return app.api.http.get({
      url: `/users/${username}/projects`,
      path: 'data',
      schema: ty.array(ProjectSchema),
    })
  }

  async get(username: string, name: string) {
    return app.api.http.get({
      url: `/users/${username}/projects/${name}`,
      schema: ProjectSchema,
    })
  }
}
