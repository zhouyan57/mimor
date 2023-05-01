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
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-out"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-8 opacity-0"
    >
      <NoteEditorToolbar v-if="state.isEditing" :state="state" />
    </Transition>
  </form>
</template>
