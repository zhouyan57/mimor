import { ty } from '@xieyuheng/ty'
import { ProjectSchema, ProjectJson } from '../../jsons/ProjectJson'

export class ProjectRepoMemory {
  loaded = false
  projects: Map<string, ProjectJson> = new Map()

  load(username: string, projects: Array<ProjectJson>) {
    for (const project of projects) {
      const key = this.formatKey(username, project.name)
      this.projects.set(key, project)
    }

    this.loaded = true
  }

  async all(username: string) {
    if (!this.loaded) return undefined
    return Array.from(this.projects.values())
  }

  formatKey(username: string, name: string): string {
    return `${username}/${name}`
  }

  async get(username: string, name: string) {
    const key = this.formatKey(username, name)
    return this.projects.get(key)
  }

  async put(username: string, name: string, project: ProjectJson) {
    const key = this.formatKey(username, name)
    this.projects.set(key, project)
  }
}
