<script setup lang="ts">
import type { FileJson } from '../../jsons/FileJson'
import { ProjectFileState as State } from './ProjectFileState'

defineProps<{ state: State; file: FileJson }>()
</script>

<template>
  <div
    class="flex h-full w-full flex-col rounded-sm p-2 shadow-md focus-within:ring-1 focus-within:ring-stone-500"
  >
    <textarea
      class="h-full w-full resize-none pb-2 font-mono focus:outline-none"
      v-model="file.content"
    ></textarea>

    <div class="flex w-full justify-end border-t border-stone-500 pt-2">
      <div class="space-x-3 self-end text-stone-500">
        <button class="font-bold">Recall</button>
        <button class="font-bold">Save</button>
      </div>
    </div>
  </div>
</template>
