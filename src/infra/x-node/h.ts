import { XNode, XElement } from "./index"

type Args = NormalArgs // | TagArgs | TagAttributes | TagChildren

type NormalArgs = [
  tag: string,
  attributes: Record<string, string>,
  children: Array<XNode>
]

function isNormalArgs(args: Args): args is NormalArgs {
  return args.length === 3 && args[2] instanceof Array
}

export function h(...args: Args): XElement {
  if (isNormalArgs(args)) {
    const [tag, attributes, children] = args
    return { tag, attributes, children }
  }

  throw new Error(`Unknown args: ${JSON.stringify(args)}`)
}
