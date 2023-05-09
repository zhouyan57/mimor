<script setup lang="ts">
import autosize from 'autosize'
import { onMounted, ref } from 'vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const textareaElement = ref<HTMLTextAreaElement | undefined>(undefined)

onMounted(() => {
  if (textareaElement.value && !props.state.isFullscreen) {
    autosize(textareaElement.value)
  }
})
</script>

<template>
  <textarea
    ref="textareaElement"
    :disabled="!state.isEditing"
    name="text"
    spellcheck="false"
    class="h-full w-full resize-none px-3 py-2 font-mono text-base focus:outline-none disabled:bg-white"
    rows="1"
    v-model="state.text"
  ></textarea>
</template>
