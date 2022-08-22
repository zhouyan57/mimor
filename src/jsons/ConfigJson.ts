import { Obtain, ty } from '@xieyuheng/ty'

export const ConfigSchema = ty.object({
  name: ty.string(),
  lang: ty.optional(ty.string()),
  name_zh: ty.optional(ty.string()),
  name_en: ty.optional(ty.string()),
})

export type ConfigJson = Obtain<typeof ConfigSchema>
