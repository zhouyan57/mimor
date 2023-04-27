export async function loadText(src: string): Promise<string> {
  const response = await fetch(src)
  const text = await response.text()
  return text
}
