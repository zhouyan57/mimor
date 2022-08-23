<script setup lang="ts">
import FileEditorControl from './FileEditorControl.vue'
import { FileState as State } from './FileState'

defineProps<{ state: State }>()
</script>

<template>
  <div v-if="state.file" class="h-full py-1">
    <div
      class="flex h-full w-full flex-col rounded-sm p-2 focus-within:ring-1 focus-within:ring-stone-500 md:shadow-md"
    >
      <textarea
        class="h-full w-full resize-none pb-2 font-mono focus:outline-none"
        v-model="state.file.content"
      ></textarea>

      <FileEditorControl :state="state" />
    </div>
  </div>
</template>
