<script setup lang="ts">
import * as Kv from 'idb-keyval'
import { asyncRun } from '../../utils/asyncRun'
import Mimor from '../../components/mimor/Mimor.vue'
import { useWindow } from '../../reactives/useWindow'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()

const who = 'AuthorSelfEntryMimor'

const window = useWindow()
</script>

<template>
  <Mimor
    class="h-[32rem] shrink-0"
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
