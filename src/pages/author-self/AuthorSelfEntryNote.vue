<script setup lang="ts">
import * as Kv from 'idb-keyval'
import Note from '../../components/note/Note.vue'
import { useWindow } from '../../reactives/useWindow'
import { Entry } from './Entry'
import { State } from './State'
import { asyncRun } from '../../utils/asyncRun'

defineProps<{
  state: State
  entry: Entry
}>()

const who = 'AuthorSelfEntryNote'

const window = useWindow()
</script>

<template>
  <Note
    class="flex h-full flex-col"
    :key="`${entry.path}+${entry.updatedAt}`"
    :src="`~/${entry.path}`"
    :isEditable="true"
    :text="entry.newText || entry.text"
    @update="
      ({ text }) => {
        entry.updatedAt = Date.now()
        entry.text = text

        window.console.log({
          who,
          message: 'update',
          entry,
        })

        asyncRun(async () => {
          const store = Kv.createStore('mimor.app/contents', 'cache')
          const cache = { text }
          const src = `~/${entry.path}`
          await Kv.set(src, cache, store)
        })
      }
    "
  />
</template>
