import { Api } from './Api'
import { Auth } from './Auth'
import { Lang } from './Lang'
import { ProjectRepo } from './projects/ProjectRepo'
import { FileRepo } from './files/FileRepo'

export class App {
  lang = new Lang()
  auth = new Auth()
  api = new Api()

  projects = new ProjectRepo()
  files = new FileRepo()

  get name(): string {
    return this.lang.zh ? '谜墨' : 'Mimor'
  }
}
