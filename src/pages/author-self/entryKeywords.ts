import { parse } from '@xieyuheng/x-node'
import { createMetadata } from '../../components/mimor/createMetadata'
import { translate } from '../../components/mimor/translate'
import { translations } from '../../components/mimor/translations'
import { pathParse } from '../author/pathParse'
import { Entry } from './Entry'

export function entryKeywords(entry: Entry): Array<string> {
  return Array.from(
    new Set([
      ...entryKeywordsFromPath(entry),
      ...entryKeywordsFromMimor(entry),
      ...entryKeywordsFromMarkdown(entry),
    ]),
  )
}

function entryKeywordsFromPath(entry: Entry): Array<string> {
  const parsed = pathParse(entry.path)
  const parts = parsed.file.split('/')
  const prefixes = parts.slice(0, parts.length - 1)
  return prefixes.map((prefix) => prefix + '/')
}

function entryKeywordsFromMimor(entry: Entry): Array<string> {
  if (!entry.path.endsWith('mimor')) {
    return []
  }

  if (!entry.text) {
    return []
  }

  try {
    const nodes = parse(entry.text)
    const translatedNodes = translate(translations, nodes)
    const metadata = createMetadata(translatedNodes)
    return metadata.keywords
  } catch (_error) {
    return []
  }
}

function entryKeywordsFromMarkdown(entry: Entry): Array<string> {
  return []
}
