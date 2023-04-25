import { basename } from 'path-browserify'
import { User } from './User'

export function username(user: User): string {
  return basename(user['@path'])
}
