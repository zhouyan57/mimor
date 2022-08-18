import { FileJson } from '../../jsons/FileJson'

export class FileState {
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
    const { username } = app.auth.userOrFail()
    this.file = await app.files.get(username, this.project.name, this.path)
  }

  async save() {
    if (this.file) {
      this.saving = true
      const { username } = app.auth.userOrFail()
      await app.files.put(username, this.project.name, this.file)
      this.saving = false
    }
  }
}
