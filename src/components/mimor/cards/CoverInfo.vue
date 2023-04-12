<script setup lang="ts">
import { Program } from '../Program'
import { State } from '../State'

defineProps<{
  state: State
  program: Program
}>()
</script>

<template>
  <div class="flex flex-col">
    <div
      class="scrollbar-hide mx-3 flex overflow-x-auto overflow-y-hidden whitespace-pre pb-1 font-mono text-sm text-white"
    >
      {{ state.url }}
    </div>

    <div class="mx-3 flex space-x-3 font-sans text-lg font-bold text-white">
      <div v-for="(keyword, index) of program.metadata.keywords" :key="index">
        {{ keyword }}
      </div>
    </div>
  </div>
</template>
