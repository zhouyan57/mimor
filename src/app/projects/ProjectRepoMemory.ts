import { ty } from '@xieyuheng/ty'
import { ProjectSchema, ProjectJson } from '../../jsons/ProjectJson'

export class ProjectRepoMemory {
  initialized = false
  projects: Map<string, ProjectJson> = new Map()

  async all(username: string) {
    if (this.initialized) return this.projects.values()
    throw new Error()
  }

  async get(username: string, name: string) {
    throw new Error()
  }
}
