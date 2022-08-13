import { Obtain, ty } from "@xieyuheng/ty"

export const VerifyingSchema = ty.object({
  email: ty.string(),
  confirmation_code: ty.string(),
  links: ty.object({
    verify: ty.string(),
    revoke: ty.string(),
  }),
})

export type VerifyingJson = Obtain<typeof VerifyingSchema>
