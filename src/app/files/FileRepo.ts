import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'
import { FileRepoRemote } from './FileRepoRemote'
import { FileRepoMemory } from './FileRepoMemory'

export class FileRepo {
  remote = new FileRepoRemote()
  memory = new FileRepoMemory()

  async all(username: string, projectName: string) {
    return this.remote.all(username, projectName)
  }

  async get(username: string, projectName: string, path: string) {
    return this.remote.get(username, projectName, path)
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson
  ) {
    return this.remote.put(username, projectName, path, file)
  }
}
