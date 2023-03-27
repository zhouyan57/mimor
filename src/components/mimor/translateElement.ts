import { XElement } from '@xieyuheng/x-node'
import { AttributeTranslation, Translation } from './Translation'

export function translateElement(
  translations: Array<Translation>,
  element: XElement,
): XElement {
  for (const translation of translations) {
    if (translation.tag.from === element.tag) {
      const tag = translation.tag.to

      const attributes = translation.attributes
        ? translateAttributes(translation.attributes, element.attributes)
        : element.attributes

      const children = element.children

      return {
        tag,
        attributes,
        children,
      }
    }
  }

  return element
}

function translateAttributes(
  translations: Array<AttributeTranslation>,
  attributes: Record<string, string>,
): Record<string, string> {
  const results: Record<string, string> = {}
  for (const [key, value] of Object.entries(attributes)) {
    const translation = translations.find(
      (translation) => translation.from === key,
    )

    if (translation !== undefined) {
      results[translation.to] = value
    } else {
      results[key] = value
    }
  }

  return results
}

function translateDirectChild() {
  //
}
