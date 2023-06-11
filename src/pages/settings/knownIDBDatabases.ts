// Firefox does not support get list of  databases:
// https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/databases#browser_compatibility

export function knownIDBDatabases(): Array<string> {
  return [
    'keyval-store',
    'mimor.app/author-self',
    'mimor.app/author-other',
    'mimor.app/Home/state.users',
    'mimor.app/<mimor>',
    'mimor.app/<note>',
  ]
}
