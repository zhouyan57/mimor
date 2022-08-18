import { ty, Schema } from '@xieyuheng/ty'
import merge from 'lodash/merge'
import get from 'lodash/get'

export type HttpOptions = {
  url: string
  headers: () => Record<string, string>
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
    args: { url: string; schema: Schema<T>; path?: string },
    options?: RequestInit
  ): Promise<T | undefined> {
    const url = this.mergeUrl(args.url)
    options = this.mergeOptions(options)

    const response = await fetch(url, options)

    if (!response.ok) {
      console.log({
        who: 'Http.get',
        message: 'response not ok',
        url,
        options,
        response,
      })

      return undefined
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
      console.log({
        who: 'Http.fetch',
        message: 'response not ok',
        url,
        options,
        response,
      })
    }

    return response
  }
}
