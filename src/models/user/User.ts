import { Schema, ty } from '@xieyuheng/ty'

export type User = {
  '@path': string
  '@revision': string
  name: string
}

export const UserSchema: Schema<User> = ty.object({
  '@path': ty.string(),
  '@revision': ty.string(),
  name: ty.string(),
})
