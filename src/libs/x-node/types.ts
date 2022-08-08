export type XNode = XElement | string

export type XElement = {
  tag: string
  attributes: Record<string, string>
  children: Array<XNode>
}

export function isXElement(node: XNode): node is XElement {
  return typeof node === "object"
}
