import parseXml, { XmlNode, XmlElement, XmlText } from '@rgrove/parse-xml'
import { h, XElement, XNode } from './index'

export class ParsingError extends Error {
  constructor(public message: string, public element: Element) {
    super()
  }
}

export function parseNodes(input: string): Array<XNode> {
  const root = parseXml(`<root>${input}</root>`)
  return fromNodes((root.children[0] as any).children)
}

function fromNodes(childNodes: Array<XmlNode>): Array<XNode> {
  const nodes = []
  for (const node of childNodes) {
    if (node.type === 'element') nodes.push(fromElement(node as XmlElement))
    if (node.type === 'text') nodes.push(fromText(node as XmlText))
  }

  return nodes
}

function fromText(node: XmlText): string {
  return node.text
}

function fromElement(node: XmlElement): XElement {
  return h(node.name, node.attributes, fromNodes(node.children))
}
