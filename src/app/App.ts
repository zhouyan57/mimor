import { Api } from './Api'
import { Auth } from './Auth'
import { Lang } from './Lang'
import { ProjectRepoRemote } from './projects/ProjectRepoRemote'
import { FileStore } from './FileStore'

export class App {
  lang = new Lang()
  auth = new Auth()
  api = new Api()
  projects = new ProjectRepoRemote()
  files = new FileStore()

  get name(): string {
    return this.lang.zh ? '谜墨' : 'Mimor'
  }
}
