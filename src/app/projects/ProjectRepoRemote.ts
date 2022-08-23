import { ty } from '@xieyuheng/ty'
import { ProjectJson, ProjectSchema } from '../../jsons/ProjectJson'

export class ProjectRepoRemote {
  async all(username: string) {
    return app.api.http.get(`/users/${username}/projects`, {
      output: {
        schema: ty.array(ProjectSchema),
        path: 'data',
      },
    })
  }

  async post(username: string, project: ProjectJson) {
    await app.api.http.post(`/users/${username}/projects`, {
      body: JSON.stringify(project),
    })
  }

  async get(username: string, name: string) {
    return app.api.http.get(`/users/${username}/projects/${name}`, {
      output: {
        schema: ProjectSchema,
      },
    })
  }
}
