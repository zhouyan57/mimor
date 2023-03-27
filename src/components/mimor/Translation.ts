export type Translation = {
  tag: { from: string; to: string }
  attributes?: Array<AttributeTranslation>
  children?: Array<Translation>
}

export type AttributeTranslation = {
  from: string
  to: string
  value?: (value: string) => string
}
