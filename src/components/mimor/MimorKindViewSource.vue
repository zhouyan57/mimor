<script setup lang="ts">
import MimorHead from './MimorHead.vue'
import { Program } from './Program'
import { State } from './State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex h-full flex-col">
    <MimorHead
      class="border-b border-black"
      :state="state"
      :program="program"
    />

    <textarea
      class="h-full px-3 py-2.5 font-mono text-base"
      v-model="state.text"
    />
  </div>
</template>
