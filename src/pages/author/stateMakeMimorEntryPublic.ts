import { useGlobalBackend } from '../../reactives/useGlobalBackend'
import { useGlobalToken } from '../../reactives/useGlobalToken'
import { MimorEntry } from './MimorEntry'
import { State } from './State'

export async function stateMakeMimorEntryPublic(
  state: State,
  mimorEntry: MimorEntry,
): Promise<void> {
  if (mimorEntry.isPublic) {
    return
  }

  const { url } = useGlobalBackend()
  const token = useGlobalToken()

  // {
  //   const newPath = mimorEntry.path
  //   const response = await fetch(new URL(`${newPath}?kind=file`, url), {
  //     method: 'POST',
  //     headers: {
  //       authorization: token.authorization,
  //     },
  //     body: state.editor.text,
  //   })
  // }

  {
    const response = await fetch(new URL(`${mimorEntry.path}?kind=file`, url), {
      method: 'DELETE',
      headers: {
        authorization: token.authorization,
      },
    })
  }
}
