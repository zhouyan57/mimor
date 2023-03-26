export type ElementTranslation = {
  tag: { from: string; to: string }
  attributes?: Array<AttributeTranslation>
  children?: Array<ElementTranslation>
}

export type AttributeTranslation = {
  from: string
  to: string
  value: Record<string, string>
}
