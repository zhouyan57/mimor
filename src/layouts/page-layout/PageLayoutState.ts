import { useAuth } from "../../hooks/useAuth"
import { useLang } from "../../hooks/useLang"

export class PageLayoutState {
  lang = useLang()
  auth = useAuth()

  classes = {
    transition: "transition delay-0 duration-500 ease-out",
  }

  get appName(): string {
    return this.lang.zh ? "谜墨" : "Mimor"
  }

  formatTitle(): string {
    return `${this.appName}`
  }
}
