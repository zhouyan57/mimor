export function pathFormat(options: {
  isPublic: boolean
  username: string
  file: string
}): string {
  if (options.isPublic) {
    return `users/${options.username}/public/mimors/${options.file}`
  } else {
    return `users/${options.username}/mimors/${options.file}`
  }
}
