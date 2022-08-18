import { Api } from './Api'
import { Auth } from './Auth'
import { Lang } from './Lang'
import { ProjectRepo } from './projects/ProjectRepo'
import { FileRepoRemote } from './files/FileRepoRemote'

export class App {
  lang = new Lang()
  auth = new Auth()
  api = new Api()

  projects = new ProjectRepo()
  files = new FileRepoRemote()

  get name(): string {
    return this.lang.zh ? '谜墨' : 'Mimor'
  }
}
