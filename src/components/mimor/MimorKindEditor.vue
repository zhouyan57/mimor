<script setup lang="ts">
import MimorEditor from './MimorEditor.vue'
import MimorHeadProgram from './MimorHeadProgram.vue'
import { Program } from './Program'
import { State } from './State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex h-full w-full flex-col">
    <MimorHeadProgram
      class="border-b border-black"
      :state="state"
      :program="program"
    />

    <MimorEditor :state="state" />
  </div>
</template>
