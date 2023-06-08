export type Editor = {
  filename: string
  text: string
  isFocused: boolean
  isPublic: boolean
  mode: EditorMode
  knownModes: Array<EditorMode>
}

export type EditorMode = 'mimor' | 'md'

export function createEditor(): Editor {
  return {
    filename: '',
    text: '',
    isFocused: false,
    isPublic: true,
    mode: 'mimor',
    knownModes: ['mimor', 'md'],
  }
}
