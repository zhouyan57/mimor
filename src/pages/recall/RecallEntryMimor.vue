<script setup lang="ts">
import Mimor from '../../components/mimor/Mimor.vue'
import { State } from './State'
import { Entry } from './Entry'

defineProps<{
  state: State
  entry: Entry
}>()
</script>

<template>
  <Mimor
    class="h-[32rem] shrink-0"
    :key="entry.src"
    :src="entry.src"
    :text="entry.text"
  />
</template>
