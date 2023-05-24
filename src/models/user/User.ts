import { Schema, ty } from '@xieyuheng/ty'

export type User = {
  '@path': string
  '@revision': string
  name: string
  avatar?: Uint8Array
}

export const UserSchema: Schema<User> = ty.object({
  '@path': ty.string(),
  '@revision': ty.string(),
  name: ty.string(),
  avatar: ty.optional(
    ty.guard((data): data is Uint8Array => data instanceof Uint8Array),
  ),
})
