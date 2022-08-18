import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { ProjectSchema } from '../../jsons/ProjectJson'
import { UserSchema } from '../../jsons/UserJson'
import { FileJson } from '../../jsons/FileJson'
import { Http } from '../../framework/http'

export class ProjectRepoRemote {
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
