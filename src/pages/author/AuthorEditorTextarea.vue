<script setup lang="ts">
import { State } from './State'
import { editorNumberOfLines } from './editorNumberOfLines'
import { editorTextareaPlaceholder } from './editorTextareaPlaceholder'

defineProps<{ state: State }>()
</script>

<template>
  <textarea
    class="my-2 h-full w-full resize-none px-3 font-mono text-base focus:outline-none"
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
</template>
