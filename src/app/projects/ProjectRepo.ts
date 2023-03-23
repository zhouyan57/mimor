import { ProjectJson } from '../../schemas/ProjectJson'
import { ProjectRepoMemory } from './ProjectRepoMemory'
import { ProjectRepoRemote } from './ProjectRepoRemote'

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
    const data = await this.remote.post(username, project)
    if (data) await this.memory.post(username, data)
  }

  async get(username: string, name: string) {
    const found = await this.memory.get(username, name)
    if (found) return found

    const project = await this.remote.get(username, name)

    if (project) {
      this.memory.put(username, name, project)
    }

    return project
  }

  async put(username: string, name: string, project: ProjectJson) {
    await this.remote.put(username, name, project)
    await this.memory.put(username, name, project)
  }

  async delete(username: string, name: string) {
    await this.remote.delete(username, name)
    await this.memory.delete(username, name)
  }

  sortByDate(projects: Array<ProjectJson>): Array<ProjectJson> {
    return projects.sort((left, right) => {
      return this.date(right).getTime() - this.date(left).getTime()
    })
  }

  date(project: ProjectJson): Date {
    if (project.updated_at) {
      return new Date(project.updated_at)
    }

    if (project.created_at) {
      return new Date(project.created_at)
    }

    return new Date()
  }
}
