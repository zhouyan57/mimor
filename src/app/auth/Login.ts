import { VerifyingSchema } from '../../jsons/VerifyingJson'

export class Login {
  async start(body: { email: string }) {
    return await app.api.http.post(`/login`, {
      output: { schema: VerifyingSchema },
      body: JSON.stringify(body),
    })
  }
}
