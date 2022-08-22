import { HttpError } from '../framework/http'

export type Values = Record<string, string>

interface PostOptions<T> {
  headers?: Record<string, string>
  prepare?: (values: T) => Promise<any>
  then?: (response: Response) => Promise<void>
}

interface SubmitOptions<T> {
  action: (values: T) => Promise<void>
}

type Unprocessable<T> = {
  message: string
  errors: Record<string, string>
}

export class Form<T extends Values> {
  processing = false
  response: Response | undefined = undefined
  error?: Error
  unprocessable?: Unprocessable<T>

  constructor(public values: T) {}

  loadValuesFromEvent(event: Event) {
    const target: any = event.target
    for (const key of Object.keys(this.values)) {
      if (target.hasOwnProperty(key)) {
        ;(this.values as any)[key] = target[key].value
      } else {
        console.log({
          who: 'Form.loadValuesFromEvent',
          message: `The event target does not have key: ${key}`,
        })
      }
    }
  }

  async submit(event: Event, options: SubmitOptions<T>): Promise<void> {
    this.loadValuesFromEvent(event)

    this.processing = true

    this.response = undefined
    this.error = undefined
    this.unprocessable = undefined

    try {
      // NOTE We should not pass reactive `this.values` around.
      const values = JSON.parse(JSON.stringify(this.values))
      await options.action(values)
    } catch (error) {
      if (!(error instanceof Error)) throw error
      this.error = error
      if (error instanceof HttpError) {
        if (error.response.status === 422) {
          this.unprocessable = await error.response.json()
        }
      }
    }

    this.processing = false
  }
}
