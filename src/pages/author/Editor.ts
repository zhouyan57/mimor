export type Editor = {
  text: string
  isEditing: boolean
  isPublic: boolean
}

export function createEditor(): Editor {
  return {
    text: '',
    isEditing: false,
    isPublic: true,
  }
}
