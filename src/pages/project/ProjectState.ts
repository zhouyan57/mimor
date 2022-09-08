import { FileJson } from '../../jsons/FileJson'
import { ProjectJson } from '../../jsons/ProjectJson'
import { comparePath } from '../../utils/comparePath'

export class ProjectState {
  project?: ProjectJson
  files?: Array<FileJson>

  constructor(public options: { username: string; name: string }) {}

  get username(): string {
    return this.options.username
  }

  get name(): string {
    return this.project?.name || this.options.name
  }

  async load() {
    this.project = await app.safe(() =>
      app.projects.get(this.username, this.name),
    )

    this.files = await app.safe(() => app.files.all(this.username, this.name))
  }

  get sortedFiles(): Array<FileJson> | undefined {
    return (
      this.files &&
      this.files.sort((left, right) => comparePath(left.path, right.path))
    )
  }
}
