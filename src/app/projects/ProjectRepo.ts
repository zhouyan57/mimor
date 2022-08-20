import { ty } from '@xieyuheng/ty'
import { ProjectSchema, ProjectJson } from '../../jsons/ProjectJson'
import { ProjectRepoRemote } from './ProjectRepoRemote'
import { ProjectRepoMemory } from './ProjectRepoMemory'

export class ProjectRepo {
  remote = new ProjectRepoRemote()
  memory = new ProjectRepoMemory()

  async all(username: string) {
    const found = await this.memory.all(username)
    if (found) return found

    const projects = await this.remote.all(username)

    if (projects) {
      this.memory.load(username, projects)
    }

    return projects
  }

  async post(username: string, project: ProjectJson) {
    await this.remote.post(username, project)
    await this.memory.post(username, project)
  }

  async get(username: string, name: string) {
    const found = await this.memory.get(username, name)
    if (found) 
      return found
    

    const project = await this.remote.get(username, name)

    if (project) {
      this.memory.put(username, name, project)
    }

    return project
  }
}
