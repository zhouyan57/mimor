import { Obtain, ty } from '@xieyuheng/ty'

export const ConfigSchema = ty.object({
  name: ty.string(),
  lang: ty.union(ty.string(), ty.null()),
  name_zh: ty.union(ty.string(), ty.null()),
  name_en: ty.union(ty.string(), ty.null()),
})

export type ConfigJson = Obtain<typeof ConfigSchema>
