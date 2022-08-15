import { useAuth } from "../../hooks/useAuth"
import { useLang } from "../../hooks/useLang"

export class DashboardState {
  lang = useLang()
  auth = useAuth()
}
