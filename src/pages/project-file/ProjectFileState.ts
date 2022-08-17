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

  get path() {
    return this.options.path
  }

  get project() {
    return this.options.project
  }

  async load() {
    // this.file = app.api.projectFile(this.project.name, this.path)
  }
}
