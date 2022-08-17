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

  async load() {
    this.project = await app.api.project(this.options.name)
    this.files = await app.api.projectFiles(this.options.name)
  }
}
