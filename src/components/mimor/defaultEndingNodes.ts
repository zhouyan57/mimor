import { XNode, parseNodes } from '@xieyuheng/x-node'

export function defaultEndingNodes(): Array<XNode> {
  return parseNodes(`<back-cover>The End</back-cover>`)
}
