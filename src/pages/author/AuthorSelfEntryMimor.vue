<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
import { useWindow } from '../../reactives/useWindow'
import { Entry } from './Entry'
import { State } from './State'
import { stateEntryUpdate } from './stateEntryUpdate'

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
      ({ text }) =>
        // We can not just side effect on current prop entry,
        // it is not the same reference.
        stateEntryUpdate(state, {
          path: entry.path,
          updatedAt: Date.now(),
          text,
        })
    "
    @loaded="
      ({ text }) => {
        stateEntryUpdate(state, {
          path: entry.path,
          text,
        })

        window.console.log({
          who: 'AuthorSelfEntryMimor',
          message: 'loaded',
          entry,
          state,
        })
      }
    "
  />
</template>
