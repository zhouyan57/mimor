export type XNode = XElement | string

export type XElement = {
  tag: string
  attributes: Record<string, string>
  children: Array<XNode>
}
