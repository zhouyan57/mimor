import { stringTrimStart } from '../../utils/stringTrimStart'

export function pathParse(path: string): {
  isPublic: boolean
  username: string
  file: string
} {
  // Examples:
  // - users/xieyuheng/contents/debug.mimor
  // - users/xieyuheng/public/contents/debug.mimor

  path = stringTrimStart(path, '/')

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
