<script setup lang="ts">
import { State } from './State'
import { stateNumberOfLines } from './stateNumberOfLines'

defineProps<{ state: State }>()
</script>

<template>
  <textarea
    :disabled="!state.isEditing"
    name="text"
    spellcheck="false"
    class="h-full w-full resize-none px-3 py-2 font-mono text-base focus:outline-none disabled:bg-white"
    :style="{
      height: state.isFullscreen
        ? undefined
        : stateNumberOfLines(state) * 1.5 + 1 + 'rem',
    }"
    v-model="state.text"
  ></textarea>
</template>
