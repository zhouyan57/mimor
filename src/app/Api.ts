export class Api {
  url = import.meta.env.VITE_API_URL

  get token() {
    return localStorage.getItem('token') || ''
  }

  get headers() {
    return {
      Authorization: `Bearer ${app.api.token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }
  }
}
