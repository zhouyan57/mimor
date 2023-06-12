<script setup lang="ts">
import autosize from 'autosize'
import { onMounted, ref } from 'vue'
import { State } from './State'
import { editorTextareaPlaceholder } from './editorTextareaPlaceholder'

defineProps<{ state: State }>()

const textareaElement = ref<HTMLTextAreaElement | undefined>(undefined)

onMounted(() => {
  if (textareaElement.value) {
    autosize(textareaElement.value)
  }
})
</script>

<template>
  <textarea
    ref="textareaElement"
    class="font-mono my-2 h-full w-full resize-none px-3 text-base focus:outline-none"
    name="text"
    spellcheck="false"
    rows="1"
    v-model="state.editor.text"
    :placeholder="editorTextareaPlaceholder(state.editor)"
  ></textarea>
</template>
