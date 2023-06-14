<script setup lang="ts">
import TransitionPush from '../transitions/TransitionPush.vue'
import NoteEditorTextarea from './NoteEditorTextarea.vue'
import NoteEditorToolbar from './NoteEditorToolbar.vue'
import { State } from './State'
import { stateEditorSave } from './stateEditorSave'

defineProps<{ state: State }>()

const emit = defineEmits(['update'])

async function submit(state: State) {
  await stateEditorSave(state)
  emit('update')
}
</script>

<template>
  <form
    tabindex="-1"
    @submit.prevent="submit(state)"
    class="flex h-full w-full flex-col"
  >
    <!-- The following use of `key` is for restoring text on exit. -->
    <NoteEditorTextarea
      :state="state"
      :key="String(state.isEditing) + String(state.isFullscreen)"
    />

    <TransitionPush>
      <NoteEditorToolbar v-if="state.isEditing" :state="state" />
    </TransitionPush>
  </form>
</template>
