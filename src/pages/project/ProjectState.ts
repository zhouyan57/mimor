import { FileJson } from '../../jsons/FileJson'
import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectState {
  project?: ProjectJson
  files?: Array<FileJson>

  constructor(
    public options: {
      name: string
    }
  ) {}

  get name(): string {
    return this.options.name
  }

  async load() {
    const { username } = app.auth.userOrFail()
    this.project = await app.safe(() =>
      app.projects.get(username, this.options.name)
    )
    this.files = await app.safe(() =>
      app.files.all(username, this.options.name)
    )
  }
}
