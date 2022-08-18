import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'
import { FileRepoRemote } from './FileRepoRemote'

export class FileRepo {
  remote = new FileRepoRemote()

  async all(username: string, name: string) {
    return this.remote.all(username, name)
  }

  async get(username: string, name: string, path: string) {
    return this.remote.get(username, name, path)
  }

  async put(username: string, name: string, file: FileJson) {
    return this.remote.put(username, name, file)
  }
}
