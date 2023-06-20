import { hashSHA256Hex } from '../../utils/hashSHA256Hex'
import { State } from './State'

export type StateOptions = {
  src: string
}

export async function loadState(options: StateOptions): Promise<State> {
  const { src } = options

  // In most file systems, path length is limited to 255 bytes,
  // so we need to use hash here.
  const srcHash = await hashSHA256Hex(src)

  return {
    src,
    srcHash,
  }
}
