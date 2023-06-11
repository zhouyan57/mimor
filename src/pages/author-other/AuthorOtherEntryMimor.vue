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
    class="h-[32rem] max-w-[47rem] shrink-0"
    :key="entry.path"
    :src="`~/${entry.path}`"
    :text="entry.text"
  />
</template>
