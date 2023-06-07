export function pathFormat(options: {
  isPublic: boolean
  username: string
  file: string
}): string {
  if (options.isPublic) {
    return `users/${options.username}/public/contents/${options.file}`
  } else {
    return `users/${options.username}/contents/${options.file}`
  }
}
