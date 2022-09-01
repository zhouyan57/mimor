import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectListState {
  projects?: Array<ProjectJson>
  username: string

  constructor(options: { username: string }) {
    this.username = options.username
  }

  async load() {
    this.projects = await app.safe(() => app.projects.all(this.username))
  }

  get sortedProjects(): Array<ProjectJson> | undefined {
    return this.projects && app.projects.sortByDate(this.projects)
  }
}
