import { useAuth } from "../../hooks/useAuth"
import { useLang } from "../../hooks/useLang"
import { VerifyingJson } from "../../jsons/VerifyingJson"

export class LoginState {
  lang = useLang()
  auth = useAuth()

  verifying: VerifyingJson | null = null

  get links() {
    const api = import.meta.env.VITE_API_URL

    return {
      login: `${api}/login`,
    }
  }
}
