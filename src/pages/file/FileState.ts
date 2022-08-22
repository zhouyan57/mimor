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
    const user = app.auth.user
    if (!user) return

    this.file = await app.safe(() =>
      app.files.get(user.username, this.project.name, this.path)
    )
  }

  async save() {
    this.saving = true

    await app.safe(async () => {
      if (this.file) {
        const user = app.auth.user
        if (!user) return

        await app.files.put(
          user.username,
          this.project.name,
          this.file.path,
          this.file
        )
      }
    })

    this.saving = false
  }
}
