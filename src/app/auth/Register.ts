import { HttpError } from '../../errors/HttpError'
import { VerifyingSchema } from '../../schemas/VerifyingJson'

export class Register {
  async start(body: { username: string; name: string; email: string }) {
    const response = await fetch(`${app.api.url}/register`, {
      method: 'POST',
      headers: app.api.headers,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new HttpError('response not ok', response)
    }

    return VerifyingSchema.validate(await response.json())
  }
}
