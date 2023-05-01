<script setup lang="ts">
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

    <textarea
      class="h-full px-3 py-2.5 font-mono text-base"
      :class="{
        'border-x border-b border-black': state.theme.name !== 'white',
      }"
      v-model="state.text"
    />
  </div>
</template>
