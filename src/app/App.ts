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

  async safe<T>(f: () => Promise<T>): Promise<T | undefined> {
    try {
      return await f()
    } catch (error) {
      if (!(error instanceof Error)) {
        console.log('Safely catched error:', error)
      } else {
        console.log('Safely catched error:', error.message)
      }

      return undefined
    }
  }
}
