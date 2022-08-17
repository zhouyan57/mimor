import { FileJson } from '../../jsons/FileJson'

export class ProjectFileState {
  file?: FileJson

  constructor(
    public options: {
      path: string
      project: {
        name: string
      }
    }
  ) {}

  get project() {
    return this.options.project
  }

  get path() {
    return this.options.path
  }

  async load() {
    // this.file = app.api.projectFile(this.project.name, this.path)
  }
}
