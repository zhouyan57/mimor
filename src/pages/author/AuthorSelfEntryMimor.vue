<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
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
  <Mimor
    class="h-[34rem] max-w-[47rem] shrink-0"
    :key="entry.path"
    :src="`~/${entry.path}`"
    :isEditable="true"
    :text="entry.text"
    @update="
      ({ text }) => {
        entry.updatedAt = Date.now()
        entry.text = text
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
