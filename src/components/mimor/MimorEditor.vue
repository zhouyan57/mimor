<script setup lang="ts">
import MimorEditorTextarea from './MimorEditorTextarea.vue'
import MimorEditorToolbar from './MimorEditorToolbar.vue'
import { State } from './State'

defineProps<{
  state: State
}>()
</script>

<template>
  <from class="flex h-full flex-col">
    <MimorEditorTextarea :state="state" />
    <MimorEditorToolbar :state="state" />
  </from>
</template>
