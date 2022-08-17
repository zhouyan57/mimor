<script setup lang="ts">
import type { FileJson } from '../../jsons/FileJson'
import { ProjectFileState as State } from './ProjectFileState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div
    class="w-full h-full flex flex-col shadow focus-within:ring-1 rounded-sm focus-within:ring-stone-500 p-2"
  >
    <textarea
      class="font-mono text-sm w-full h-full resize-none focus:outline-none"
      v-model="file.content"
    ></textarea>

    <div class="self-end space-x-3 text-stone-500">
      <button class="font-bold">Recall</button>
      <button class="font-bold">Save</button>
    </div>
  </div>
</template>
