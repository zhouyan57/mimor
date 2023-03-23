import { Obtain, ty } from '@xieyuheng/ty'

export const ProjectSchema = ty.object({
  name: ty.string(),
  description: ty.optional(ty.union(ty.string(), ty.null())),
  private: ty.optional(ty.union(ty.boolean(), ty.null())),
  created_at: ty.optional(ty.string()),
  updated_at: ty.optional(ty.string()),
})

export type ProjectJson = Obtain<typeof ProjectSchema>
