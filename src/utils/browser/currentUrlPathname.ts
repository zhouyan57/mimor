export function currentUrlPathname() {
  const url = new URL(window.location.href)
  const pathname = url.pathname
  return pathname
}
