<script setup lang="ts">
import Note from '../../components/note/Note.vue'
import { useWindow } from '../../reactives/useWindow'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()

const window = useWindow()
</script>

<template>
  <Note
    class="flex h-full max-w-[47rem] flex-col"
    :key="entry.path"
    :src="`~/${entry.path}`"
    :isEditable="true"
    :text="entry.text"
    @update="
      ({ text }) => {
        entry.updatedAt = Date.now()
        entry.text = text

        window.console.log({
          who: 'AuthorSelfEntryNote',
          message: 'update',
          entry,
          state,
        })
      }
    "
    @loaded="
      ({ text }) => {
        entry.text = text

        window.console.log({
          who: 'AuthorSelfEntryNote',
          message: 'loaded',
          entry,
          state,
        })
      }
    "
  />
</template>
