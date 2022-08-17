<script setup lang="ts">
import { FileJson } from '../../jsons/FileJson'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div class="border border-stone-500 rounded-sm px-3 py-2">
    <div class="font-bold">{{ file.path }}</div>
  </div>
</template>
