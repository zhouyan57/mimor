<script setup lang="ts">
import autosize from 'autosize'
import { onMounted, ref } from 'vue'
import { onVisible } from '../../utils/browser/onVisible'
import { State } from './State'

const props = defineProps<{ state: State }>()

const textareaElement = ref<HTMLTextAreaElement | undefined>(undefined)

onMounted(() => {
  if (textareaElement.value && !props.state.isFullscreen) {
    autosize(textareaElement.value)

    onVisible(textareaElement.value, (element) => {
      if (!props.state.isFullscreen) {
        autosize.update(element)
      }
    })
  }
})

// https://stackoverflow.com/questions/5680013/how-to-be-notified-once-a-web-font-has-loaded

document.fonts.addEventListener('loadingdone', (event) => {
  if (textareaElement.value && !props.state.isFullscreen) {
    autosize(textareaElement.value)
  }
})

document.fonts.ready.then(() => {
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
    class="font-mono h-full w-full resize-none px-3 py-2 text-base focus:outline-none disabled:bg-white"
    rows="1"
    v-model="state.text"
  ></textarea>
</template>
