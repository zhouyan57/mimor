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
    class="max-h-[34rem] max-w-[47rem] shrink-0"
    :key="entry.path"
    :src="`~/${entry.path}`"
  />
</template>
