import { FileJson } from '../../jsons/FileJson'

export class FileState {
  file?: FileJson
  saving = false
  username: string
  path: string
  project: { name: string }

  constructor(options: {
    username: string
    path: string
    project: { name: string }
  }) {
    this.username = options.username
    this.path = options.path
    this.project = options.project
  }

  async load() {
    this.file = await app.safe(() =>
      app.files.get(this.username, this.project.name, this.path)
    )
  }

  async save() {
    this.saving = true

    await app.safe(async () => {
      if (this.file) {


        await app.files.put(
          this.username,
          this.project.name,
          this.file.path,
          this.file
        )
      }
    })

    this.saving = false
  }
}
