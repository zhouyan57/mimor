import { use } from 'chai'
import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectListState {
  projects?: Array<ProjectJson>

  async load() {
    const { username } = app.auth.userOrFail()
    this.projects = await app.safe(() => app.projects.all(username))
  }
}
