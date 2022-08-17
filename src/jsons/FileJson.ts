import { Obtain, ty } from '@xieyuheng/ty'

export const FileSchema = ty.object({
  path: ty.string(),
  content: ty.string(),
})

export type FileJson = Obtain<typeof FileSchema>
