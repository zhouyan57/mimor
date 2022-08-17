export type Values = Record<string, string>

interface PostOptions {
  headers?: Record<string, string>
  then?: (response: Response) => Promise<void>
}

type Unprocessable<T> = { message: string; errors: Record<string, string> }

export class Form<T extends Values> {
  processing = false
  response: Response | undefined = undefined
  error?: Error
  unprocessable?: Unprocessable<T>

  constructor(public values: T) {}

  async postByEvent(
    event: Event,
    url: string,
    options?: PostOptions
  ): Promise<void> {
    const target: any = event.target
    for (const key of Object.keys(this.values)) {
      ;(this.values as any)[key] = target[key].value
    }

    await this.post(url, options)
  }

  async post(url: string, options?: PostOptions): Promise<void> {
    this.processing = true

    this.response = undefined
    this.error = undefined
    this.unprocessable = undefined

    try {
      this.response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          ...options?.headers,
        },
        body: JSON.stringify(this.values),
      })

      if (this.response.status === 422) {
        this.unprocessable = await this.response.json()
      }

      if (this.response.ok && options?.then) {
        await options.then(this.response)
      }
    } catch (error) {
      if (!(error instanceof Error)) throw error
      this.error = error
    }

    this.processing = false
  }
}
