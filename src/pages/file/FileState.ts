import { FileJson } from '../../jsons/FileJson'

export class FileState {
  file?: FileJson
  updating = false

  constructor(
    public options: {
      username: string
      path: string
      project: { name: string }
    },
  ) {}

  get path(): string {
    return this.file?.path || this.options.path
  }

  get username(): string {
    return this.options.username
  }

  get project(): { name: string } {
    return this.options.project
  }

  async load() {
    this.file = await app.safe(() =>
      app.files.get(this.username, this.project.name, this.path),
    )
  }

  async update(file: FileJson) {
    this.updating = true

    await app.safe(async () => {
      if (this.file) {
        await app.files.put(
          this.username,
          this.project.name,
          this.file.path,
          file,
        )
      }
    })

    this.updating = false
  }

  async save() {
    if (this.file) {
      await this.update(this.file)
    }
  }
}
