import { XElement, XNode } from '@xieyuheng/x-node'
import { AttributeTranslation, Translation } from './Translation'

export function translate(
  translations: Array<Translation>,
  nodes: Array<XNode>,
): Array<XNode> {
  return nodes.map((node) => translateNode(translations, node))
}

function translateNode(translations: Array<Translation>, node: XNode): XNode {
  if (typeof node === 'string') {
    return node
  } else {
    return translateElement(translations, node)
  }
}

function translateElement(
  translations: Array<Translation>,
  element: XElement,
): XElement {
  const translation = translations.find(
    (translation) => translation.tag.from === element.tag,
  )

  if (translation === undefined) {
    return element
  }

  const tag = translation.tag.to

  const attributes = translateAttributes(
    translation.attributes || [],
    element.attributes,
  )

  const children = translate(
    translations,
    translateDirectChildren(translation.children || [], element.children),
  )

  return {
    tag,
    attributes,
    children,
  }
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
      results[translation.to] = translation.value
        ? translation.value(value)
        : value
    } else {
      results[key] = value
    }
  }

  return results
}

function translateDirectChildren(
  translations: Array<Translation>,
  children: Array<XNode>,
): Array<XNode> {
  return children.map((child) => translateDirectChild(translations, child))
}

function translateDirectChild(
  translations: Array<Translation>,
  child: XNode,
): XNode {
  if (typeof child === 'string') {
    return child
  }

  const translation = translations.find(
    (translation) => translation.tag.from === child.tag,
  )

  if (translation === undefined) {
    return child
  }

  const tag = translation.tag.to

  const attributes = translateAttributes(
    translation.attributes || [],
    child.attributes,
  )

  const children = translateDirectChildren(
    translation.children || [],
    child.children,
  )

  return {
    tag,
    attributes,
    children,
  }
}
