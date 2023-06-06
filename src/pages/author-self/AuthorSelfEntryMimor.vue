<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
import { Entry } from './Entry'
import { State } from './State'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <Mimor
    class="h-[34rem] max-w-[47rem] shrink-0"
    :key="`${entry.path}+${entry.updatedAt}`"
    :src="`~/${entry.path}`"
    :isEditable="true"
    :text="entry.text"
    @update="
      ({ text }) => {
        entry.updatedAt = Date.now()
        entry.text = text
      }
    "
  />
</template>
