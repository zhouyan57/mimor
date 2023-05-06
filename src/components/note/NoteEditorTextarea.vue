<script setup lang="ts">
import { ref } from 'vue'
import { State } from './State'

const props = defineProps<{ state: State }>()

const text = ref(props.state.text)

function updateText(event: Event) {
  const element = event.target as HTMLElement
  if (element) {
    props.state.text = element.innerText
  }
}
</script>

<template>
  <pre
    :contenteditable="state.isEditing"
    spellcheck="false"
    class="h-full w-full whitespace-pre-line bg-white px-3 py-2 font-mono text-base focus:outline-none"
    @input="updateText($event)"
    >{{ text }}</pre
  >
</template>
