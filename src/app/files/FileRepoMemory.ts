import { ty } from '@xieyuheng/ty'
import { FileJson } from '../../jsons/FileJson'

export class FileRepoMemory {
  map: Map<string, Map<string, FileJson>> = new Map()

  key(username: string, projectName: string) {
    return `${username}/${projectName}`
  }

  load(username: string, projectName: string, files: Array<FileJson>) {
    const innerMap = new Map()
    for (const file of files) {
      innerMap.set(file.path, file)
    }

    const key = this.key(username, projectName)
    this.map.set(key, innerMap)
  }

  async all(username: string, projectName: string) {
    const key = this.key(username, projectName)
    const innerMap = this.map.get(key)
    if (!innerMap) return undefined
    return Array.from(innerMap.values())
  }

  async post(username: string, projectName: string, file: FileJson) {
    await this.put(username, projectName, file.path, file)
  }

  async get(username: string, projectName: string, path: string) {
    const key = this.key(username, projectName)
    return this.map.get(key)?.get(path)
  }

  async put(
    username: string,
    projectName: string,
    path: string,
    file: FileJson
  ) {
    const key = this.key(username, projectName)
    this.map.set(key, this.map.get(key) || new Map())
    this.map.get(key)?.delete(path)
    this.map.get(key)?.set(file.path, file)
  }
}
