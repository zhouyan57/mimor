export type Editor = {
  text: string
  isEditing: boolean
  isPrivate: boolean
}

export function createEditor(): Editor {
  return {
    text: '',
    isEditing: false,
    isPrivate: true,
  }
}
