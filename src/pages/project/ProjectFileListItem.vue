<script setup lang="ts">
import { FileJson } from '../../jsons/FileJson'
import { ProjectState as State } from './ProjectState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div class="border border-stone-900 rounded-sm p-2">
    <div>{{ file.path }}</div>
  </div>
</template>
