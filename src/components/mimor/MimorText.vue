<script setup lang="ts">
import { MimorState } from './MimorState'
import { Program } from './models/Program'

defineProps<{
  mimor: MimorState
  program: Program
  text: string
}>()
</script>

<template>
  <span>{{ text }}</span>
</template>
