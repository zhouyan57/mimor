export class Login {
  async start(body: { email: string }) {
    const response = await app.api.http.fetch(`/login`, {
      method: 'POST',
      body: JSON.stringify(body),
    })

    return await response.json()
  }

  async verify() {
    //
  }
}
