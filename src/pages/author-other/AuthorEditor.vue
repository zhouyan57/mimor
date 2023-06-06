<script setup lang="ts">
import { reactive } from 'vue'
import AuthorEditorHead from './AuthorEditorHead.vue'
import AuthorEditorTextarea from './AuthorEditorTextarea.vue'
import AuthorEditorToolbar from './AuthorEditorToolbar.vue'
import { State } from './State'
import { stateEditorSave } from './stateEditorSave'

defineProps<{ state: State }>()

const report = reactive({
  errorMessage: '',
})
</script>

<template>
  <!--
       We need to use capture on the form here,
       because focus and blur events do not bubble up.
  -->

  <form
    tabindex="-1"
    @submit.prevent="stateEditorSave(state, report)"
    @click="state.editor.isEditing = true"
    @focus.capture="state.editor.isEditing = true"
    @blur.capture="state.editor.isEditing = false"
    class="flex flex-col border border-black"
    :class="{
      'border-orange-500 ring-1 ring-orange-400': state.editor.isEditing,
    }"
  >
    <AuthorEditorHead :state="state" />
    <AuthorEditorTextarea
      :state="state"
      :key="String(Boolean(state.editor.text))"
    />
    <AuthorEditorToolbar :state="state" />
  </form>
</template>
