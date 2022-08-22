export class Register {
  async start(body: { username: string; name: string; email: string }) {
    const response = await app.api.http.fetch(`/register`, {
      method: 'POST',
      body: JSON.stringify(body),
    })

    return await response.json()
  }

  async verify() {
    //
  }
}
