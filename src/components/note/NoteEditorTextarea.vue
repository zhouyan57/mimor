<script setup lang="ts">
import { State } from './State'
import { stateNumberOfLines } from './stateNumberOfLines'

defineProps<{ state: State }>()
</script>

<template>
  <textarea
    name="text"
    spellcheck="false"
    class="my-3 h-full w-full resize-none px-3 font-mono text-base focus:outline-none"
    :style="{
      height: state.isFullscreen
        ? undefined
        : stateNumberOfLines(state) * 1.56 + 'rem',
    }"
    v-model="state.text"
  ></textarea>
</template>
