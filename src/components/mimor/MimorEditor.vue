<script setup lang="ts">
import MimorEditorTextarea from './MimorEditorTextarea.vue'
import MimorEditorToolbar from './MimorEditorToolbar.vue'
import { State } from './State'
import { stateSave } from './stateSave'

defineProps<{
  state: State
}>()
</script>

<template>
  <from
    tabindex="-1"
    @submit.prevent="stateSave(state)"
    class="flex h-full flex-col overflow-y-auto"
  >
    <MimorEditorTextarea :state="state" />
    <MimorEditorToolbar v-show="state.isEditing" :state="state" />
  </from>
</template>
