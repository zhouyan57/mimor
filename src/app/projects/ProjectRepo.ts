import { ty } from '@xieyuheng/ty'
import { ProjectSchema } from '../../jsons/ProjectJson'
import { ProjectRepoRemote } from './ProjectRepoRemote'
import { ProjectRepoMemory } from './ProjectRepoMemory'

export class ProjectRepo {
  remote = new ProjectRepoRemote()
  memory = new ProjectRepoMemory()

  async all(username: string) {
    return this.remote.all(username)
  }

  async get(username: string, name: string) {
    return this.remote.get(username, name)
  }
}
