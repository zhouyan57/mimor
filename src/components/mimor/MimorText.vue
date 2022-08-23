<script setup lang="ts">
import { computed } from 'vue'
import { MimorState } from './MimorState'
import { Program } from './models/Program'

const props = defineProps<{
  mimor: MimorState
  program: Program
  text: string
}>()

const parts = computed(() => props.text.trim().split('\n'))
</script>

<template>
  <span
    ><span v-for="(part, index) of parts" :key="index"
      ><span v-if="part.trim()">{{ part }}</span
      ><span v-else class="block py-1.5"></span></span
  ></span>
</template>
