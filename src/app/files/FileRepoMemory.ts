import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../../jsons/FileJson'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoMemory {
  async all(username: string, projectName: string) {
    throw new Error()
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
