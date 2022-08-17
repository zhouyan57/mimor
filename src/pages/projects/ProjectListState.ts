import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectListState {
  projects: Array<ProjectJson> = []

  async load() {
    this.projects = await app.api.projects()
  }
}
