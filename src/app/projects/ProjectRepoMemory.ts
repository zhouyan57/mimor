import { ProjectJson } from '../../jsons/ProjectJson'

export class ProjectRepoMemory {
  map: Map<string, Map<string, ProjectJson>> = new Map()
  loaded: Set<string> = new Set()

  load(username: string, projects: Array<ProjectJson>) {
    const innerMap = new Map()
    for (const project of projects) {
      innerMap.set(project.name, project)
    }

    const key = username
    this.map.set(key, innerMap)
    this.loaded.add(key)
  }

  async all(username: string) {
    const key = username
    if (!this.loaded.has(key)) return undefined

    const innerMap = this.map.get(key)
    if (!innerMap) return undefined

    return Array.from(innerMap.values())
  }

  async post(username: string, project: ProjectJson) {
    await this.put(username, project.name, project)
  }

  async get(username: string, name: string) {
    const key = username
    return this.map.get(key)?.get(name)
  }

  async put(username: string, name: string, project: ProjectJson) {
    const key = username
    this.map.set(key, this.map.get(key) || new Map())
    this.map.get(key)?.delete(name)
    this.map.get(key)?.set(project.name, project)
  }
}
