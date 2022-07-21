import { XNode, XElement, h } from "."
import { JSDOM } from "jsdom"
const { window } = new JSDOM("")
const domParser = new window.DOMParser()

export function parseNodes(input: string): Array<XNode> {
  const nodes = []
  const dom = domParser.parseFromString(
    `<root>${input}</root>`,
    "application/xml"
  )

  const errorNode = dom.querySelector("parsererror")

  if (errorNode) {
    throw new Error(errorNode.innerHTML)
  }

  const root = dom.childNodes[0]
  return fromNodes(root.childNodes)
}

function fromNodes(childNodes: NodeListOf<ChildNode>): Array<XNode> {
  const nodes = []
  for (const node of childNodes) {
    if (node.nodeType === 1) nodes.push(fromElement(node as Element))
    if (node.nodeType === 3) nodes.push(fromText(node as Text))
  }

  return nodes
}

function fromText(node: Text): string {
  return node.wholeText
}

function fromElement(node: Element): XElement {
  const attributes: Record<string, string> = {}
  for (const attribute of node.attributes) {
    attributes[attribute.name] = attribute.value
  }

  return h(node.tagName, attributes, fromNodes(node.childNodes))
}
