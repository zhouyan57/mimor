import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectRepoMemory {
  map: Map<string, Map<string, ProjectJson>> = new Map()

  load(username: string, projects: Array<ProjectJson>) {
    const innerMap = new Map()
    for (const project of projects) {
      innerMap.set(project.name, project)
    }

    this.map.set(username, innerMap)
  }

  async all(username: string) {
    const innerMap = this.map.get(username)
    if (!innerMap) return undefined
    return Array.from(innerMap.values())
  }

  async post(username: string, project: ProjectJson) {
    this.map.set(username, this.map.get(username) || new Map())
    this.map.get(username)?.set(project.name, project)
  }

  async get(username: string, name: string) {
    return this.map.get(username)?.get(name)
  }

  async put(username: string, name: string, project: ProjectJson) {
    this.map.set(username, this.map.get(username) || new Map())
    this.map.get(username)?.delete(name)
    this.map.get(username)?.set(project.name, project)
  }
}
