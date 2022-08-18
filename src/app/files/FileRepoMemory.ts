import { ty } from '@xieyuheng/ty'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoMemory {
  loaded = false
  files: Map<string, FileJson> = new Map()
  
  async all(username: string, projectName: string) {
    if (!this.loaded) return undefined
    return Array.from(this.files.values())
  }

  async get(username: string, projectName: string, path: string) {
    throw new Error()
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson
  ) {
    throw new Error()
  }
}
