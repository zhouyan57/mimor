<script setup lang="ts">
import NoteEditorTextarea from './NoteEditorTextarea.vue'
import NoteEditorToolbar from './NoteEditorToolbar.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <!--
       We need to use capture on the form here,
       because focus and blur events do not bubble up.
  -->

  <form
    tabindex="-1"
    @click="state.isEditing = true"
    @focus.capture="state.isEditing = true"
    @blur.capture="state.isEditing = false"
    class="flex h-full flex-col overflow-y-auto border border-black"
    :class="{
      'border-orange-400 ring-2 ring-orange-300': state.isEditing,
    }"
  >
    <NoteEditorTextarea :state="state" />
    <NoteEditorToolbar
      v-if="state.isEditing"
      class="mx-2 border-t border-orange-400 py-2"
      :state="state"
    />
  </form>
</template>
