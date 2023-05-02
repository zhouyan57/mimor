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
    class="my-2 h-full w-full resize-none px-3 font-mono text-base focus:outline-none disabled:bg-white"
    :style="{
      height: state.isFullscreen
        ? undefined
        : stateNumberOfLines(state) * 1.5 + 'rem',
    }"
    v-model="state.text"
  ></textarea>
</template>
