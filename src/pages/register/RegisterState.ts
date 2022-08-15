import { VerifyingJson } from "../../jsons/VerifyingJson"

export class RegisterState {
  verifying: VerifyingJson | null = null

  get links() {
    return {
      register: `${app.api.url}/register`,
    }
  }
}
