<script setup lang="ts">
import { computed } from 'vue'
import { MimorState } from './MimorState'
import { Program } from './models/Program'

const props = defineProps<{
  mimor: MimorState
  program: Program
  text: string
}>()

const isInline = computed(() => !props.text.includes('\n'))

const lines = computed(() => props.text.trim().split('\n'))

function isNewline(line: string): boolean {
  return line.trim() === ''
}
</script>

<template>
  <span v-if="isInline">{{ text }}</span>
  <span v-else>
    <span v-for="(line, index) of lines" :key="index">
      <span v-if="isNewline(line)" class="block py-1.5"> </span>
      <span v-else>{{ line }}</span>
    </span>
  </span>
</template>
