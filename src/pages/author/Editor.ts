export type Editor = {
  filename: string
  text: string
  isEditing: boolean
  isPublic: boolean
}

export function createEditor(): Editor {
  return {
    filename: '',
    text: '',
    isEditing: false,
    isPublic: true,
  }
}
