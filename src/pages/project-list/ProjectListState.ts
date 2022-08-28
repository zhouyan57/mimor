import { use } from 'chai'
import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectListState {
  projects?: Array<ProjectJson>

  async load() {
    const user = app.auth.user
    if (!user) return

    this.projects = await app.safe(() => app.projects.all(user.username))
  }

  get sortedProjects(): Array<ProjectJson> | undefined {
    return this.projects && app.projects.sortByDate(this.projects)
  }
}
