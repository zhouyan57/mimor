import { basename } from 'path-browserify'
import { reactive, watch } from 'vue'
import { User } from '../models/user/User'

type Auth = {
  username?: string
  user?: User
}

const globalAuth: Auth = reactive({
  username: window.localStorage.getItem('username') || undefined,
})

export function useGlobalAuth() {
  return globalAuth
}

watch(
  () => globalAuth.user,
  (value) => {
    if (value) {
      globalAuth.username = basename(value['@path'])
    } else {
      globalAuth.username = undefined
    }
  },
)

watch(
  () => globalAuth.username,
  (value) => {
    if (value) {
      window.localStorage.setItem('username', value)
    } else {
      window.localStorage.removeItem('username')
    }
  },
)
