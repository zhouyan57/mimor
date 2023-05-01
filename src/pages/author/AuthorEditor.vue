<script setup lang="ts">
import { reactive } from 'vue'
import AuthorEditorHead from './AuthorEditorHead.vue'
import AuthorEditorTextarea from './AuthorEditorTextarea.vue'
import AuthorEditorToolbar from './AuthorEditorToolbar.vue'
import { State } from './State'
import { stateSave } from './stateSave'

defineProps<{ state: State }>()

const report = reactive({
  errorMessage: '',
})
</script>

<template>
  <form
    tabindex="-1"
    @submit.prevent="stateSave(state, report)"
    @click="state.editor.isEditing = true"
    @focus.capture="state.editor.isEditing = true"
    @blur.capture="state.editor.isEditing = false"
    class="flex flex-col border border-black p-2"
    :class="{
      'border-orange-400 ring-2 ring-orange-300': state.editor.isEditing,
    }"
  >
    <AuthorEditorHead :state="state" />
    <AuthorEditorTextarea :state="state" />
    <AuthorEditorToolbar :state="state" />
  </form>
</template>
