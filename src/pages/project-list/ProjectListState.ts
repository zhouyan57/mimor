import { ProjectJson } from '../../jsons/ProjectJson'
import { AuthorJson } from '../../jsons/AuthorJson'

export class ProjectListState {
  projects?: Array<ProjectJson>
  author?: AuthorJson
  username: string

  constructor(options: { username: string }) {
    this.username = options.username
  }

  async update(options: { username: string }) {
    this.username = options.username
    this.projects = undefined
    this.author = undefined
    await this.load()
  }

  async load() {
    this.projects = await app.safe(() => app.projects.all(this.username))
    this.author = await app.safe(() => app.authors.get(this.username))
  }

  get sortedProjects(): Array<ProjectJson> | undefined {
    return this.projects && app.projects.sortByDate(this.projects)
  }
}
