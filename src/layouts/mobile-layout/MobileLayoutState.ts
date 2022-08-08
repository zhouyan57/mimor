import { useAuth } from "../../hooks/useAuth"
import { useLang } from "../../hooks/useLang"

export class MobileLayoutState {
  lang = useLang()
  auth = useAuth()

  get appName(): string {
    return this.lang.zh ? "谜墨" : "Mimor"
  }
}
