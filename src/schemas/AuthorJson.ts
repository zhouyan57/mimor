import { Obtain, ty } from '@xieyuheng/ty'

export const AuthorSchema = ty.object({
  username: ty.string(),
  name: ty.string(),
  config: ty.object({
    lang: ty.union(ty.string(), ty.null()),
    name_zh: ty.union(ty.string(), ty.null()),
    name_en: ty.union(ty.string(), ty.null()),
  }),
})

export type AuthorJson = Obtain<typeof AuthorSchema>
