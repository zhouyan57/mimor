import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectState {
  project?: ProjectJson

  constructor(
    public options: {
      name: string
    }
  ) {}

  async load() {
    this.project = await app.api.project(this.options.name)
  }
}
