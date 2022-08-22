import { ty, Schema } from '@xieyuheng/ty'
import merge from 'lodash/merge'
import get from 'lodash/get'

export type RequestOptions<O> = {
  output: { schema: Schema<O> }
  path?: string
} & RequestInit

export class HttpError extends Error {
  constructor(public message: string, public response: Response) {
    super()
  }
}

export class Http {
  constructor(
    public options: {
      url: string
      headers: () => Record<string, string>
    }
  ) {}

  async get<O>(
    url: string,
    options: RequestOptions<O>
  ): Promise<O | undefined> {
    return this.fetch('GET', url, options)
  }

  async post<O>(
    url: string,
    options: RequestOptions<O>
  ): Promise<O | undefined> {
    return this.fetch('POST', url, options)
  }

  async put<O>(
    url: string,
    options: RequestOptions<O>
  ): Promise<O | undefined> {
    return this.fetch('PUT', url, options)
  }

  async fetch<O>(
    method: string,
    url: string,
    options: RequestOptions<O>
  ): Promise<O | undefined> {
    url = this.options.url + url
    options = {
      ...options,
      headers: merge(options.headers, this.options.headers()),
    }

    const response = await fetch(url, { ...options, method })
    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    const body = await response.json()
    return options.output.schema.validate(
      options.path ? get(body, options.path) : body
    )
  }
}
