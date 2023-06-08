import { SearchResult, SearchTarget } from './State'

export function targetMatchText(
  target: SearchTarget,
  input: string,
): SearchResult | undefined {
  const matchedLines: Array<{
    index: number
    line: string
  }> = []

  const lines = target.text.split('\n')
  for (const [index, line] of lines.entries()) {
    const matched = line.match(input)
    if (matched) {
      matchedLines.push({ index, line })
    }
  }

  if (matchedLines.length > 0) {
    return {
      matchedLines,
    }
  }
}
