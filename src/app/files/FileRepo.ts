import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'
import { FileRepoRemote } from './FileRepoRemote'
import { FileRepoMemory } from './FileRepoMemory'

export class FileRepo {
  remote = new FileRepoRemote()
  memory = new FileRepoMemory()

  async all(username: string, projectName: string) {
    const found = await this.memory.all(username, projectName)
    if (found) 
      return found
    

    const files = await this.remote.all(username, projectName)

    if (files) {
      this.memory.load(username, projectName, files)
    }

    return files
  }

  async post(username: string, projectName: string, file: FileJson) {
    await this.remote.post(username, projectName, file)
    await this.memory.post(username, projectName, file)
  }

  async get(username: string, projectName: string, path: string) {
    const found = await this.memory.get(username, projectName, path)
    if (found) return found

    const file = await this.remote.get(username, projectName, path)

    if (file) {
      this.memory.put(username, projectName, path, file)
    }

    return file
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson
  ) {
    await this.remote.put(username, projectName, path, file)
    await this.memory.put(username, projectName, path, file)
  }
}
