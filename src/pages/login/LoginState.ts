import { VerifyingJson } from "../../jsons/VerifyingJson"

export class LoginState {
  verifying: VerifyingJson | null = null

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      login: `${api}/login`,
    }
  }
}
