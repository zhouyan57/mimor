<script setup lang="ts">
import { ProjectFileState as State } from './ProjectFileState'

defineProps<{ state: State }>()
</script>

<template>
  <div
    v-if="state.file"
    class="flex h-full w-full flex-col rounded-sm p-2 shadow-md focus-within:ring-1 focus-within:ring-stone-500"
  >
    <textarea
      class="h-full w-full resize-none pb-2 font-mono focus:outline-none"
      v-model="state.file.content"
    ></textarea>

    <div class="flex w-full justify-end border-t border-stone-500 pt-1">
      <div class="space-x-3 self-end text-lg">
        <button class="hover:underline">Recall</button>
        <button
          class="hover:underline"
          :class="[state.saving && 'text-yellow-500']"
          @click="state.save()"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>
