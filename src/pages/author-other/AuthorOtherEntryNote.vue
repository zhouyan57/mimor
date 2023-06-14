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
    class="flex h-full flex-col"
    :key="entry.path"
    :src="`~/${entry.path}`"
    :text="entry.text"
  />
</template>
