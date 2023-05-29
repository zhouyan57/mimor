<script setup lang="ts">
import Note from '../../components/note/Note.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <Note
    class="flex h-full max-w-[47rem] flex-col"
    :key="entry.path"
    :src="`~/${entry.path}`"
    :isEditable="true"
    @update="
      ({ text }) => {
        entry.updatedAt = Date.now()
        entry.text = text
      }
    "
    @loaded="
      ({ text }) => {
        entry.text = text
      }
    "
  />
</template>
