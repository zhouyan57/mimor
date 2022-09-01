import { FileJson } from '../../jsons/FileJson'
import { ProjectJson } from '../../jsons/ProjectJson'
import { comparePath } from '../../utils/comparePath'

export class ProjectState {
  project?: ProjectJson
  files?: Array<FileJson>
  username: string
  name: string

  constructor(options: { username: string; name: string }) {
    this.username = options.username
    this.name = options.name
  }

  async load() {
    const user = app.auth.user
    if (!user) return

    this.project = await app.safe(() =>
      app.projects.get(user.username, this.name)
    )

    this.files = await app.safe(() => app.files.all(user.username, this.name))
  }

  get sortedFiles(): Array<FileJson> | undefined {
    return (
      this.files &&
      this.files.sort((left, right) => comparePath(left.path, right.path))
    )
  }
}
