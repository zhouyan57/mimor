import { Api } from './Api'
import { Auth } from './auth/Auth'
import { Lang } from './Lang'
import { UserRepo } from './users/UserRepo'
import { AuthorRepo } from './authors/AuthorRepo'
import { ProjectRepo } from './projects/ProjectRepo'
import { FileRepo } from './files/FileRepo'
import { ConfigRepo } from './configs/ConfigRepo'

export class App {
  lang = new Lang()
  auth = new Auth()
  api = new Api()

  users = new UserRepo()
  authors = new AuthorRepo()
  projects = new ProjectRepo()
  files = new FileRepo()
  configs = new ConfigRepo()

  get name(): string {
    return this.lang.zh ? '谜墨' : 'Mimor'
  }

  async safe<T>(f: () => Promise<T>): Promise<T | undefined> {
    try {
      return await f()
    } catch (error) {
      if (!(error instanceof Error)) {
        console.dir('Safely catched error:', error)
      } else {
        console.log('Safely catched error:', error.message)
      }

      return undefined
    }
  }
}
