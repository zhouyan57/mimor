import { Api } from './Api'
import { Auth } from './Auth'
import { Lang } from './Lang'
import { ProjectStore } from './ProjectStore'
import { FileStore } from './FileStore'

export class App {
  lang = new Lang()
  auth = new Auth()
  api = new Api()
  projects = new ProjectStore()
  files = new FileStore()

  get name(): string {
    return this.lang.zh ? '谜墨' : 'Mimor'
  }
}
