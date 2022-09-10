import { Router } from 'vue-router'

export class Guard {
  async guestOnly(router: Router) {
    await app.auth.initialize()

    if (app.auth.user) {
      router.replace('/')
    }
  }

  async userOnly(router: Router, auth?: { username: string }) {
    await app.auth.initialize()

    if (!app.auth.user) {
      router.replace('/')
    }

    if (typeof auth === 'object' && app.auth.user) {
      if (auth.username !== app.auth.user.username) {
        router.replace('/')
      }
    }
  }
}
