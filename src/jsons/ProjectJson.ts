import { Obtain, ty } from '@xieyuheng/ty'

export const ProjectSchema = ty.object({
  name: ty.string(),
  description: ty.optional(ty.union(ty.string(), ty.null())),
})

export type ProjectJson = Obtain<typeof ProjectSchema>
