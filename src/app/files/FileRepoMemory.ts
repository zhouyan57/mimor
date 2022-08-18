import { ty } from '@xieyuheng/ty'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoMemory {
  map: Map<string, Map<string, Map<string, FileJson>>> = new Map()

  load(username: string, projectName: string, files: Array<FileJson>) {
    const innerInnerMap = new Map()
    for (const file of files) {
      innerInnerMap.set(file.path, file)
    }

    const innerMap = this.map.get(username) || new Map()
    innerMap.set(projectName, innerInnerMap)
    this.map.set(username, innerMap)
  }

  async all(username: string, projectName: string) {
    const innerMap = this.map.get(username)
    if (!innerMap) return undefined

    const innerInnerMap = innerMap.get(projectName)
    if (!innerInnerMap) return undefined

    return Array.from(innerInnerMap.values())
  }

  async get(username: string, projectName: string, path: string) {
    return this.map.get(username)?.get(projectName)?.get(path)
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson
  ) {
    this.map.get(username)?.get(projectName)?.delete(path)
    this.map.get(username)?.get(projectName)?.set(file.path, file)
  }
}
