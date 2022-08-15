import { VerifyingJson } from "../../jsons/VerifyingJson"

export class LoginState {
  verifying: VerifyingJson | null = null

  get links() {
    return {
      login: `${app.api.url}/login`,
    }
  }
}
