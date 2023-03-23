import { useForm } from '../../components/form'

export class ConfigState {
  form = useForm({
    username: '',
    email: '',
    name: '',
    lang: '',
    name_zh: '',
    name_en: '',
  })

  async load() {
    await app.auth.initialize()

    const user = app.auth.user
    if (!user) return

    const config = app.auth.config
    if (!config) return

    Object.assign(this.form.values, {
      username: user.username,
      email: user.email,
      name: config.name,
      lang: config.lang,
      name_zh: config.name_zh,
      name_en: config.name_en,
    })
  }
}
