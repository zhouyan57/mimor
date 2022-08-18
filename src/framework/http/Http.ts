import merge from 'lodash/merge'

export type HttpOptions = {
  url?: string
} & Partial<RequestInit>

export class Http {
  constructor(public options: HttpOptions) {}

  async fetch(url: string, options?: RequestInit): Promise<Response> {
    if (this.options.url) {
      url = this.options.url + url
    }

    const response = await fetch(url, merge(options, this.options))

    if (!response.ok) {
      console.log({
        who: 'http.fetch',
        message: 'response not ok',
        url,
        options,
        response,
      })
    }

    return response
  }
}
