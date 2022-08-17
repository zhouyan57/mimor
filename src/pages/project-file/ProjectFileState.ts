import { FileJson } from '../../jsons/FileJson'

export class ProjectFileState {
  file?: FileJson
  saving = false

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
    this.file = await app.api.projectFile(this.project.name, this.path)
  }

  async save() {
    if (this.file) {
      this.saving = true
      await app.api.saveProjectFile(this.project.name, this.file)
      this.saving = false
    }
  }
}
