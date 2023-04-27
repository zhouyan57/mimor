export function mimorPathParse(path: string): {
  isPublic: boolean
  username: string
  file: string
} {
  // Examples:
  // - users/xieyuheng/mimors/debug.mimor
  // - users/xieyuheng/public/mimors/debug.mimor

  const parts = path.split('/')
  const username = parts[1]
  if (parts[2] === 'public') {
    return {
      isPublic: true,
      username,
      file: parts.slice(4).join('/'),
    }
  } else {
    return {
      isPublic: false,
      username,
      file: parts.slice(3).join('/'),
    }
  }
}
