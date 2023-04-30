export type Editor = {
  filename: string
  text: string
  isEditing: boolean
  isPublic: boolean
  mode: EditorMode
  knownModes: Array<EditorMode>
}

export type EditorMode = 'mimor' | 'md'

export function createEditor(): Editor {
  return {
    filename: '',
    text: '',
    isEditing: false,
    isPublic: true,
    mode: 'mimor',
    knownModes: ['mimor', 'md'],
  }
}
