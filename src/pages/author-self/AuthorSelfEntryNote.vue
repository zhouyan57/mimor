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
    :key="`${entry.path}+${entry.updatedAt}`"
    :src="`~/${entry.path}`"
    :isEditable="true"
    :text="entry.uploadedText || entry.text"
    @update="
      ({ text }) => {
        entry.updatedAt = Date.now()
        entry.text = text
      }
    "
  />
</template>
