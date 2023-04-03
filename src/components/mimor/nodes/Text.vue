<script setup lang="ts">
import { computed } from 'vue'
import { Program } from '../Program'
import { State } from '../State'

const props = defineProps<{
  state: State
  program: Program
  text: string
}>()

const isInline = computed(() => !props.text.includes('\n'))

// NOTE The following tirm will make
// newline between text and element not visible.

const lines = computed(() => props.text.trim().split('\n'))

function isNewline(line: string): boolean {
  return line.trim() === ''
}
</script>

<template>
  <span v-if="isInline">{{ text }}</span>
  <span v-else>
    <span v-for="(line, index) of lines" :key="index">
      <div v-if="isNewline(line)" class="py-1.5"></div>
      <span v-else>{{ line }}</span>
    </span>
  </span>
</template>
