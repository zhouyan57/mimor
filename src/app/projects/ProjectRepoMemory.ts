import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectRepoMemory {
  map: Map<string, Map<string, ProjectJson>> = new Map()

  load(username: string, projects: Array<ProjectJson>) {
    const map = new Map()
    for (const project of projects) {
      map.set(project.name, project)
    }

    this.map.set(username, map)
  }

  async all(username: string) {
    const map = this.map.get(username)
    if (!map) return undefined
    return Array.from(map.values())
  }

  async get(username: string, name: string) {
    return this.map.get(username)?.get(name)
  }

  async put(username: string, name: string, project: ProjectJson) {
    this.map.get(username)?.set(name, project)
  }
}
