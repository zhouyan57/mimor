<script setup lang="ts">
import { reactive } from 'vue'
import AuthorEditorHead from './AuthorEditorHead.vue'
import AuthorEditorToolbar from './AuthorEditorToolbar.vue'
import { State } from './State'
import { editorNumberOfLines } from './editorNumberOfLines'
import { editorTextareaPlaceholder } from './editorTextareaPlaceholder'
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

    <textarea
      class="my-1 h-full w-full resize-none px-1 font-mono text-base focus:outline-none"
      :class="{
        'transition-[height] duration-200':
          editorNumberOfLines(state.editor) <= 3,
      }"
      name="text"
      spellcheck="false"
      v-model="state.editor.text"
      :style="{ height: editorNumberOfLines(state.editor) * 1.5 + 'rem' }"
      :placeholder="editorTextareaPlaceholder(state.editor)"
    ></textarea>

    <AuthorEditorToolbar :state="state" />
  </form>
</template>
