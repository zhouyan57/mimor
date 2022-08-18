import { ty, Schema } from '@xieyuheng/ty'
import merge from 'lodash/merge'
import get from 'lodash/get'

export type HttpOptions = {
  url: string
  headers: () => Record<string, string>
}

export class Http {
  cached: Map<string, any> = new Map()

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

    const key = JSON.stringify({ url, options })
    const found = this.cached.get(key)

    if (found) {
      console.log({
        who: 'Http.cache',
        message: 'hit cached json',
        url,
        options,
        json: found,
      })

      return found
    }

    const response = await fetch(url, options)

    if (!response.ok) {
      console.log({
        who: 'Http.cached',
        message: 'response not ok',
        url,
        options,
        response,
      })

      return undefined
    }

    const { path, schema } = args

    const body = await response.json()
    const json = schema.validate(path ? get(body, path) : body)

    this.cached.set(key, json)

    console.log({
      who: 'Http.cache',
      message: 'json cached',
      url,
      options,
      response,
      json,
    })

    return json
  }

  purge(args: { url: string }, options?: RequestInit) {
    const url = this.mergeUrl(args.url)
    options = this.mergeOptions(options)

    const key = JSON.stringify({ url, options })
    this.cached.delete(key)
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
