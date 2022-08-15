import { VerifyingJson } from "../../jsons/VerifyingJson"

export class RegisterState {
  verifying: VerifyingJson | null = null

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      register: `${api}/register`,
    }
  }
}
