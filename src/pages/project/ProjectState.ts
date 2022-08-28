import { FileJson } from '../../jsons/FileJson'
import { ProjectJson } from '../../jsons/ProjectJson'
import { comparePath } from '../../utils/comparePath'

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
    const user = app.auth.user
    if (!user) return

    this.project = await app.safe(() =>
      app.projects.get(user.username, this.options.name)
    )

    this.files = await app.safe(() =>
      app.files.all(user.username, this.options.name)
    )
  }

  get sortedFiles(): Array<FileJson> | undefined {
    return (
      this.files &&
      this.files.sort((left, right) => comparePath(left.path, right.path))
    )
  }
}
