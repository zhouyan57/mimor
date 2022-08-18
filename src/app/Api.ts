import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../jsons/FileJson'
import { ProjectSchema } from '../jsons/ProjectJson'
import { UserSchema } from '../jsons/UserJson'
import { FileJson } from '../jsons/FileJson'
import { Http } from '../framework/http'

export class Api {
  url = import.meta.env.VITE_API_URL

  get http() {
    return new Http({
      url: this.url,
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    })
  }

  get token() {
    return localStorage.getItem('token') || ''
  }

  async user() {
    const response = await this.http.fetch(`/user`)
    if (!response.ok) return
    return UserSchema.validate(await response.json())
  }

  async projects() {
    if (!app.auth.user) {
      console.log({
        who: 'app.api.projects',
        message: 'no user',
      })
      return
    }

    const response = await this.http.fetch(
      `/users/${app.auth.user.username}/projects`
    )

    if (!response.ok) return

    const { data } = await response.json()

    return ty.array(ProjectSchema).validate(data)
  }

  async project(name: string) {
    if (!app.auth.user) {
      console.log({
        who: 'app.api.project',
        message: 'no user',
      })
      return
    }

    const response = await this.http.fetch(
      `/users/${app.auth.user.username}/projects/${name}`
    )

    if (!response.ok) return

    return ProjectSchema.validate(await response.json())
  }

  async projectFiles(name: string) {
    if (!app.auth.user) {
      console.log({
        who: 'app.api.projectFiles',
        message: 'no user',
      })
      return
    }

    const response = await this.http.fetch(
      `/users/${app.auth.user.username}/projects/${name}/files`
    )

    if (!response.ok) return

    const { data } = await response.json()

    return ty.array(FileSchema).validate(data)
  }

  async projectFile(name: string, path: string) {
    if (!app.auth.user) {
      console.log({
        who: 'app.api.projectFile',
        message: 'no user',
      })
      return
    }

    const response = await this.http.fetch(
      `/users/${app.auth.user.username}/projects/${name}/files/${path}`
    )

    if (!response.ok) return

    return FileSchema.validate(await response.json())
  }

  async saveProjectFile(name: string, file: FileJson) {
    if (!app.auth.user) {
      console.log({
        who: 'app.api.saveProjectFile',
        message: 'no user',
      })
      return
    }

    await this.http.fetch(
      `/users/${app.auth.user.username}/projects/${name}/files/${file.path}`,
      {
        method: 'PUT',
        body: JSON.stringify(file),
      }
    )
  }
}
