import { Schema } from "@xieyuheng/ty"

// Learn API from:
// - https://laravel.com/docs/9.x/http-client

export class Http {
  static get<O>(url: string, options: RequestInit & { output: Schema<O> }) {
    return new HttpResponse({ ...options, url, method: "GET" })
  }
}

export type HttpResponseOptions<O> = RequestInit & {
  url: string
  output: Schema<O>
}

export class HttpResponse<O> {
  constructor(public options: HttpResponseOptions<O>) {}

  async body(): Promise<O | undefined> {
    const { url, headers, output } = this.options

    const response = await fetch(url, { headers })

    if (!response.ok) {
      console.log({ who: "api.get", message: "response not ok", response })
      return
    }

    return output.validate(await response.json())
  }
}
