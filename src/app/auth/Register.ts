import { VerifyingSchema } from '../../jsons/VerifyingJson'

export class Register {
  async start(body: { username: string; name: string; email: string }) {
    return await app.api.http.post(`/register`, {
      output: { schema: VerifyingSchema },
      body: JSON.stringify(body),
    })
  }
}
