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
    this.project = await app.api.project(username, this.options.name)
    this.files = await app.api.files(this.options.name)
  }
}
