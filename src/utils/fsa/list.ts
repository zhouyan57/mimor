import { arrayFromAsyncIterable } from '../arrayFromAsyncIterable'
import { promiseAllFulfilled } from '../promiseAllFulfilled'

export async function list(
  handle: FileSystemDirectoryHandle | FileSystemFileHandle,
): Promise<Array<string>> {
  switch (handle.kind) {
    case 'file': {
      return []
    }

    case 'directory': {
      const handles = await arrayFromAsyncIterable(handle.values())

      const lists = await promiseAllFulfilled(
        handles.map(async (handle) =>
          (await list(handle)).map((path) => [handle.name, path].join('/')),
        ),
      )

      return lists.flatMap((list) => list)
    }
  }
}
