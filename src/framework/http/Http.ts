import { ty, Schema } from '@xieyuheng/ty'
import merge from 'lodash/merge'
import get from 'lodash/get'

export type HttpOptions = {
  url: string
  headers: () => Record<string, string>
}

export class HttpError extends Error {
  constructor(public message: string, public response: Response) {
    super()
  }
}

export class Http {
  constructor(public options: HttpOptions) {}

  mergeUrl(url: string): string {
    return this.options.url + url
  }

  mergeOptions(options?: RequestInit): RequestInit {
    const headers = merge(options?.headers, this.options.headers())
    return { ...options, headers }
  }

  async get<T>(
    url: string,
    args: { schema: Schema<T>; path?: string },
    options?: RequestInit
  ): Promise<T | undefined> {
    url = this.mergeUrl(url)
    options = this.mergeOptions(options)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    const { path, schema } = args

    const body = await response.json()

    return schema.validate(path ? get(body, path) : body)
  }

  async fetch(url: string, options?: RequestInit): Promise<Response> {
    url = this.mergeUrl(url)
    options = this.mergeOptions(options)

    const response = await fetch(url, options)

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return response
  }
}
