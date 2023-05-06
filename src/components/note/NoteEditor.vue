<script setup lang="ts">
import NoteEditorTextarea from './NoteEditorTextarea.vue'
import NoteEditorToolbar from './NoteEditorToolbar.vue'
import { State } from './State'
import { stateEditorSave } from './stateEditorSave'

defineProps<{ state: State }>()
</script>

<template>
  <form
    tabindex="-1"
    @submit.prevent="
      () => {
        stateEditorSave(state)
        $emit('update')
      }
    "
    class="flex h-full w-full flex-col"
  >
    <!-- The following use of `key` is for restoring text on exit. -->
    <NoteEditorTextarea :state="state" :key="String(state.isEditing)" />

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-out"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-8 opacity-0"
    >
      <NoteEditorToolbar v-show="state.isEditing" :state="state" />
    </Transition>
  </form>
</template>
