import { ty } from '@xieyuheng/ty'
import { FileSchema } from '../jsons/FileJson'
import { ProjectSchema } from '../jsons/ProjectJson'
import { UserSchema } from '../jsons/UserJson'
import { FileJson } from '../jsons/FileJson'

export class Api {
  url = import.meta.env.VITE_API_URL

  get token() {
    return localStorage.getItem('token') || ''
  }

  async user() {
    const response = await fetch(`${this.url}/user`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      console.log({ who: 'app.api.user', message: 'response not ok', response })
      return
    }

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

    const response = await fetch(
      `${this.url}/users/${app.auth.user.username}/projects`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.log({
        who: 'app.api.projects',
        message: 'response not ok',
        response,
      })
      return
    }

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

    const response = await fetch(
      `${this.url}/users/${app.auth.user.username}/projects/${name}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.log({
        who: 'app.api.project',
        message: 'response not ok',
        response,
      })
      return
    }

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

    const response = await fetch(
      `${this.url}/users/${app.auth.user.username}/projects/${name}/files`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.log({
        who: 'app.api.projectFiles',
        message: 'response not ok',
        response,
      })
      return
    }

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

    const response = await fetch(
      `${this.url}/users/${app.auth.user.username}/projects/${name}/files/${path}`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          Accept: 'application/json',
        },
      }
    )

    if (!response.ok) {
      console.log({
        who: 'app.api.projectFile',
        message: 'response not ok',
        response,
      })
      return
    }

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

    const response = await fetch(
      `${this.url}/users/${app.auth.user.username}/projects/${name}/files/${file.path}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${this.token}`,
          'content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(file),
      }
    )

    if (!response.ok) {
      console.log({
        who: 'app.api.saveProjectFile',
        message: 'response not ok',
        response,
      })
      return
    }
  }
}
